import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Task = ({ title, description }) => {
  return (
    <TouchableOpacity className = "bg-rose-100 mb-4 rounded-md pt-2 pb-2">
      <Text className = "font-bold ml-2">To-Do: {title}</Text>
      <Text className = "ml-6">{description}</Text>
    </TouchableOpacity>
  )
}

export default Task