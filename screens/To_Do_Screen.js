import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Modal} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Tasklist from '../components/Tasklist';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  const [community, setCommunity] = useState("Insert Community");
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <SafeAreaView className = "bg-white pt-5 grow"> 
      <View className = "flex-row pb-3 items-center mx-4 space-x-2">
        <Text className = "flex-row font-bold">{community}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text>+</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="fade" transparent={true} onRequestClose={() => {setModalVisible(!modalVisible)}}>
          <View>
            <Text>Test</Text>
          </View>
        </Modal>
      </View>
      <ScrollView className = "bg-slate-50">
        <Tasklist />
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default HomeScreen;