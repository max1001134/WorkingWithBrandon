import { View, Text } from 'react-native'
import React from 'react'

const Task = ({ title, description }) => {
  return (
    <View>
      <Text className = "font-bold ml-2">{title}</Text>
      <Text className = "ml-6">{description}</Text>
    </View>
  )
}

export default Task