import React from 'react';
import { View, Text } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from '../../Screens/Home/Home';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default MainStack;