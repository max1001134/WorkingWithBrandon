import { View, Text, SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
  UserIcon, 
  ChevronDownIcon, 
  SparklesIcon,
  TvIcon
 } from "react-native-heroicons/outline";
 import * as Icons from "react-native-heroicons/solid";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])

  return(
    <SafeAreaView className = "bg-white pt-5"> 
        {/* header */}
        <View className = "flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source = {{
              uri: 'https://links.papareact.com/wru'
            }}
            className = 'h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <View className = "flex-1">
            <Text className = "font=bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className = "front-bold text-xl">
              Current Location
              <ChevronDownIcon size = {20} color = "#00CCBB"/>
            </Text>
          </View>
          <UserIcon size = {35} color="#00CCBB" />
        </View>

        {/* Search bar */}
        <View className = "flex-row items-center space-x-2 pb-2 mx-4">
          <View className = "flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <TvIcon size = {20} color = "#00CCBB" />
            <TextInput 
              placeholder = "Restaurants and cuisines"
              keyboardType = "default"
            />
          </View>
          
          <SparklesIcon color = "#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView className = "bg-gray-100">
          {/* Categories */}
          <Categories />

          {/* Featured Rows */}
          <FeaturedRow 
            id = "testing1"
            title = "Featured"
            description = "Paid placements from our partners"
          />
          <FeaturedRow 
            id = "testing2"
            title = "Tasty Discounts"
            description = "Everyone's been enjoyinh these juicy discounts!"
          />
          <FeaturedRow 
            id = "testing3"
            title = "Offers near you!"
            description = "Why not support your local restaurant tonight"
          />

        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;