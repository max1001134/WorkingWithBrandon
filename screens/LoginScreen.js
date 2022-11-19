//TODO: STILL NEED TO ADD ERROR MESSAGES AND MAYBE EMAIL VERIFICATION

//import react stuff
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

//import react navigation stuff
import {useNavigation} from '@react-navigation/native';

//import firebase stuff
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getDatabase, set, ref } from 'firebase/database';
import {app} from '../config.js';

const LoginScreen = () => {

  //get authentication and database
  const auth = getAuth(app);
  const database = getDatabase(app);

  //create user credentials if email and password are valid
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Username");
        let message = "Successfully Registered";
        console.log(message);
      })
      .catch((error) => {
        let message = "Failed to Register";
        console.log(message);
      });
  };

  //login user if account exists
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        let message = "Sucessfully Logged In";
        //reset values in text input to blank
        setEmail("")
        setPassword("")
        console.log(message);
        navigation.navigate("ToDo");
      })
      .catch((error) => {
        let message = "Failed to Log In";
        console.log(message)
      });
  }

  //navigation
  const navigation = useNavigation();

  const [email, setEmail] = useState(''); //email variable set default to blank
  const [password, setPassword] = useState(''); //password variable set default to blank

  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}>

        <TextInput
          placeholder="Email"
          placeholderTextColor={"black"}
          selectionColor={"black"}
          value = {email}
          onChangeText = {text => setEmail(text)}
          style = {[styles.inputBox, {marginTop: "15%"}]}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          selectionColor={"black"}
          value = {password}
          onChangeText = {text => setPassword(text)}
          style = {styles.inputBox}
          secureTextEntry
        />

        <TouchableOpacity
          style = {[styles.button, {marginTop: "15%"}]}
          onPress = {login}
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.button}
          onPress = {register}
        >
          <Text>Register</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fa8072",
  },
  inputContainer: {
    width: "80%",
    height: 400,
    backgroundColor: '#f7aea6',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
  },
  inputBox: {
    backgroundColor: "transparent",
    padding: 10,
    marginTop: 10,
    borderColor: "black",
    borderBottomWidth: 2,
  },
  button: {
    marginTop: 25,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
})