import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

//Responsive Screen
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Animation
import LottieView from 'lottie-react-native';

const BrainSplashScreen = () => {

  const navigation = useNavigation();
    return (
      <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <LottieView 
            style={{ width: wp(80) }} 
            source={require('@assets/animation/39962-funny-brain.json')} 
            autoPlay loop 
          />

        <View style={{ marginLeft: hp(12)}}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Login')}
          style={{
            backgroundColor: '#9E8ABC',
            width:200,
            paddingHorizontal: hp(1),
            paddingVertical: hp(1),
            borderRadius: hp(3),
          }}
        >
          <Text style={{ fontSize: hp(2.5), color: '#fff',textAlign: 'center'}}>Get Started {'>>'}</Text>
        </TouchableOpacity>
        </View>
        </View>

        {/* <View style={{backgroundColor: 'blue'}}>
          <TouchableOpacity
          onPress={()=>props.navigation.navigate('Login')}
          style={{
            // backgroundColor: 'red',
            paddingHorizontal: hp(1),
            paddingVertical: hp(1),
            borderRadius: hp(0.5),
            flexDirection: 'row'
          }}
        >
          <Text style={{ fontSize: hp(2.5), color: '#fff'}}>Get Started {'>'}</Text>
        </TouchableOpacity>
      </View> */}
    </>
    );
}

export default BrainSplashScreen;