import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToDoScreen from './screens/To_Do_Screen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import LoginScreen from './screens/LoginScreen';

import { LogBox } from 'react-native'; //to suppress stupid key prop warning

//icons
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Navbar = createBottomTabNavigator();

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Navbar.Navigator screenOptions={({route}) => ({
          tabBarStyle: {
            position:'absolute',
            elevation: 0,
            borderRadius: 15,
            borderTopWidth: 0,
            left: 15,
            right: 15,
            bottom: 50,
            height: "7%",
            backgroundColor: "#ffffff",
          },
          tabBarOptions: {showIcon:true},
          tabBarShowLabel: false,
        })}>
          <Navbar.Screen name="Todo" component={ToDoScreen} options={{
            tabBarIcon: ({focused, size, color}) => (
              <SafeAreaView style={{alignItems:'center', justifyContent:'center', textAlign:'center', top: 10}}>
                <MaterialIcons name="view-list" size={24} color={focused ? "#FA8072" : "#000000"} />
                <Text style={{color: focused ? "#FA8072" : "#000000", fontSize: 12}}>To-Do List</Text>
              </SafeAreaView>
            ),
          }}/>
          <Navbar.Screen name="Home" component={LeaderboardScreen} options={{
            tabBarIcon: ({focused, size, color}) => (
              <SafeAreaView style={{alignItems:'center', justifyContent:'center', textAlign:'center', top: 10}}>
                <MaterialIcons name="leaderboard" size={24} color={focused ? "#FA8072" : "#000000"} />
                <Text style={{color: focused ? "#FA8072" : "#000000", fontSize: 12}}>Leaderboard</Text>
              </SafeAreaView>
            ),
          }}/>
        </Navbar.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

