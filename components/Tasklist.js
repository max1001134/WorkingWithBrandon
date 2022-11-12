import { View, Text } from 'react-native'
import React from 'react'
import TaskObject from './Task'
import Task from './Task'

const Tasklist = () => {
  return (
    <View
        contentContainerStyle = {{
        paddingHorizaontal: 15,
        paddingTop: 10,
        flex: 1,
      }}
      horizontal
    >
      <Text className = "text-xl font-bold flex-center">First To Do</Text>
      <TaskObject title = "task1" description = "yuhhhhhhhhhhhhhhhhhhhhhhhh"/>
      <TaskObject title = "task2" description = "guhhhhhhhhhhhhhhhhhhhhhhhh"/>
      <TaskObject title = "task3" description = "huhhhhhhhhhhhhhhhhhhhhhhhh"/>
      <TaskObject title = "task4" description = "zuhhhhhhhhhhhhhhhhhhhhhhhh"/>
    </View>
  )
}

export default Tasklist