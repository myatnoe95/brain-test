import React from 'react';
import { View, Text } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import LoginScreen from '../../Screens/Auth/Login/Login';
import BrainSplashScreen from '../../Screens/SplashScreen/BrainSplashScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='BrainSplash' component={BrainSplashScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
   </Stack.Navigator>
  )
}

export default AuthStack;