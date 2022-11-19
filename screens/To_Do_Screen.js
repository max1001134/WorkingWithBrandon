import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Modal, Button, Keyboard} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Tasklist from '../components/Tasklist';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  const [community, setCommunity] = useState("North Korea");
  const [modalVisible, setModalVisible] = useState(false);
  const [communityProfilePic, setCommunityProfilePic] = useState('https://theawesomedaily.com/wp-content/uploads/2022/07/pfp18.jpeg');

  {/* 
  What a Community Task must have. We must make an array out of these items to store task items */ }
  const [listData, setListData] = useState(["Meat:20 pounds", "Veggies:Carrots and Potatos"]);
  const [listTitle, setListTitle] = useState("List title");
  const [listRecurrence, setListRecurrence] = useState("weekly");
  const [listCompleted, setListCompleted] = useState(false);
  const [listUrgency, setListUrgency] = useState("!!!");
  
  const [completeDataSet, setCompleteDataSet] = useState(["Getting Groceries", "weekly", "!!!", false, ["Meat:20 pounds", "Veggies:Carrots and Potatos"]], ["Hangout Prep", "montly", "!", false, ["Party shopping:hats, thrifting, clubbing", "Clean Guest Room:vaccum, dust, mop", "Stock kitchen:drinks and snacks"]], ["Community cleaning", "weekly", "!!", false, ["Kitchen:dishes, mopping, sweeping, wiping counter", "Living room:dust and sweep"]]);

  return(
    <SafeAreaView className = "bg-white pt-5 grow">
      {/* Title and shii */}
      <View className = "items-center">
        <Text className = "pb-1 font-bold text-2xl">Current To-Do Lists</Text>
        <View className = "flex-row">
          <Image 
              source = {{
                uri: communityProfilePic
              }}
              className = 'h-7 w-7 bg-pink-300 p-6 rounded-full'
            />
          <View className = "pb-4">
            <Text className = "pl-2 pt-2 font=bold text-rose-500 text-xs">Tally it up with...</Text>
            <Text className = "flex-row font-bold pl-2">{community}</Text>
          </View>
        </View>
      </View> 
      
      {/* Search Bar */}
      <View className = "flex-row items-center space-x-2 pb-2 mx-4">
          <View className = "flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <Ionicons name = "search" size = {20} color = "salmon"/>
            <TextInput 
              placeholder = "Search To-Do Lists..."
              keyboardType = "default"
            />
          </View>
          {/* Add Tasks */} 
          <View className = "flex-row">
            <TouchableOpacity className = "" onPress={() => setModalVisible(!modalVisible)}>
              <Ionicons name = "add-circle-outline" size = {50} color = "salmon" />
            </TouchableOpacity>
            <Modal
              transparent = {true}
              visible = {modalVisible}
            >
            <View style={{backgroundColor:"#000000aa", flex:1}}>
              <View className="bg-white w-full h-100 absolute bottom-0 rounded-t-lg">
                <View className="flex flex-row mt-6 ml-6 mb-6">
                  <Text className = "font-bold text-base">T: </Text>
                  <TextInput autoFocus={true}/>
                  <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className="absolute right-6">
                    <AntDesign name="upsquare" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          </View>
        </View>


      {/* Display of Lists */}
      <ScrollView className = "bg-rose-50 pt-4 pl-3 pr-3">
        <Tasklist listTitle = "Getting Groceries" urgency = "!!!" recurrence = "weekly" completed = {false} taskData = {listData}/>
        <Tasklist listTitle = "Community cleaning" urgency = "!" recurrence = "every 2 weeks" completed = {false} taskData = {listData}/>
        <Tasklist listTitle = "Hangout prep" urgency = "!!" recurrence = "monthly" completed = {false} taskData = {listData}/>
      </ScrollView>


    </SafeAreaView>
    
  );

  function display()
  {
    return completeDataSet.map((item) => {
      var splitarray = item[4].split(":")
      return(
        <Tasklist listTitle = {item[0]} urgency = {item[2]} recurrence = {item[1]} completed = {list[3]} taskData = {splitarray}/>
      );
    })
  }
};



export default HomeScreen;