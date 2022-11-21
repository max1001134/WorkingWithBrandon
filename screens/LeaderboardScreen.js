import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Modal, Button} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Placement from '../components/Placement';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [community, setCommunity] = useState("The Rise Roommates");
  const [communityProfilePic, setCommunityProfilePic] = useState('https://images.csmonitor.com/csm/2015/07/924596_1_0727-roommates_standard.jpg?alias=standard_900x600');
  const [rewards, setRewards] = useState("50$ and free Dinner");
  const [period, setPeriod] = useState("Date 1 - Date 2");
  const [members, setMembers] = useState(["Max:10", "Joey:150", "Warren:60", "AJ:10"]);
  const [taskVisible, setTasksVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView className = "flex-1 bg-white">
    {/* Title and shii */}
      <View className = "items-center">
        <Text className = " pb-1 font-bold text-2xl">Community Leaders</Text>
        <View className = "flex-row">
          <Image
              source = {{
                uri: communityProfilePic
              }}
              className = 'h-7 w-7 bg-pink-300 p-6 rounded-full'
            />
          <View className = "pb-4">
            <Text className = "pl-2 pt-2 text-rose-500 text-xs">Tally it up with...</Text>
            <Text className = "flex-row font-bold pl-2">{community}</Text>
          </View>
        </View>
      </View> 




      {/* Row for prize and Period */}
      <View className = "bg-rose-100 flex-row justify-between">
        <View className = "pl-2">
            <View className = "flex-row pt-2">
                <Ionicons name = "gift" size = {25} color = "tan"/>
                <Text className = "pt-2 pl-2">
                    Prize: 
                </Text>
                <Text className = "pt-2 pl-1 font-semibold">
                    {rewards}
                </Text>
            </View>
            <View className = "pt-2 pb-2 flex-row">
                <Ionicons name = "calendar-sharp" size = {25} color = "tan"/>
                <Text className = "pt-2 pl-2">
                    Period: 
                </Text>
                <Text className = "pt-2 pl-1 font-semibold">
                    {period}
                </Text>
            </View>
        </View>
        <View className = "justify-center pr-3">
            <TouchableOpacity onPress={() => {setTasksVisible(true)}}>
                <Ionicons name = "menu" size = {40} color = "pink"/>
            </TouchableOpacity>
        </View>
      </View>


      {/* Actual leaderboard */}
      <ScrollView className = "bg-rose-50 pt-4 pl-3 pr-3">
        {display1()}
      </ScrollView>


      {/* Pop-up to change prize and period */}
      <Modal
        transparent = {true}
        visible = {taskVisible}
      >
        <View style={{backgroundColor:"#000000aa", flex:1}}>
          <View style = {{backgroundColor:"#ffffff", margin:50, padding:40, borderRadius: 10, flex: 1}}>
            <View className = "flex-row justify-between mt-2">
                <Text className = "font-bold text-base">Prize: </Text>
                <View className = "bg-gray-100">
                    <TextInput
                    placeholder = "                                        "
                    keyboardType = "default"
                    onChangeText = {setRewards}
                    />
                </View>
            </View>
            <View className = "flex-row justify-between mt-2">
                <Text className = "font-bold text-base">Period: </Text>
                <View className = "bg-gray-100">
                    <TextInput
                    placeholder = "                                        "
                    keyboardType = "default"
                    onChangeText= {setPeriod}
                    />
                </View>
            </View>
            <Button title = "Close list" onPress={() => {setTasksVisible(false)}} color = "salmon"/>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
  function display1()
  {
    return members.map((item) => {
      var splitarray = item.split(":")
      return(
        <Placement user = {splitarray[0]} score = {splitarray[1]}/>
      );
    })
  }
};

export default HomeScreen