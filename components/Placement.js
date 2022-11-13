import { View, Text } from 'react-native'
import React from 'react'

const Placement = ( {user, score} ) => {
  return (
    <View className = "mt-2 mb-2 pb-2 pt-2 px-3 flex-row bg-white rounded-lg">
        <Text className = "font-bold text-lg"></Text>
        <Text className = "font-bold text-xl ml-4 text-yellow-400">{user}:</Text>
        <Text className = "font-bold text-xl text-rose-300 ml-2">{score} points</Text>
    </View>
  )
}

export default Placement