import { View, Text, TouchableOpacity, Modal, Button, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Task from './Task'
import { SafeAreaView } from 'react-native-safe-area-context'

const Tasklist = ( { listTitle, recurrence, urgency, completed, taskData }) => {
  const [taskVisible, setTasksVisible] = useState(false);
  return (
    <TouchableOpacity className = "bg-white mb-3" onPress={() => {setTasksVisible(true)}}>
      <View className = "mt-1 mb-1 px-4">
        <Text className = "font-bold text-lg">{listTitle}</Text>
        <Text className = "font-bold text-sm text-rose-300 ml-4">Recurring: {recurrence}</Text>
        <Text className = "font-bold text-sm text-rose-300 ml-4">Urgency: {urgency}</Text>
      </View>
      <Modal
        transparent = {true}
        visible = {taskVisible}
      >
        <View style={{backgroundColor:"#000000aa", flex:1}}>
          <View style = {{backgroundColor:"#ffffff", margin:50, padding:40, borderRadius: 10, flex: 1}}>
            <ScrollView>
              {display()}
            </ScrollView>
            <Button title = "Close list" onPress={() => {setTasksVisible(false)}} color = "salmon"/>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  )

  function display()
  {
    return taskData.map((item) => {
      var splitarray = item.split(":")
      return(
        <Task title = {splitarray[0]} description = {splitarray[1]}/>
      );
    })
  }
}

export default Tasklist