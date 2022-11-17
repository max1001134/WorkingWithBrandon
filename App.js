import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToDoScreen from './screens/To_Do_Screen';
import LeaderboardScreen from './screens/LeaderboardScreen';

import { LogBox } from 'react-native'; //to suppress stupid key prop warning


const Stack = createNativeStackNavigator();
const Navbar = createBottomTabNavigator();

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Navbar.Navigator>
          <Navbar.Screen name="Todo" component={ToDoScreen} />
          <Navbar.Screen name="Home" component={LeaderboardScreen} />
        </Navbar.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

