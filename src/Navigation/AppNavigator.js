import React,{useState,useEffect} from 'react';
import { View, Text } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';

//Context
import {AuthContext} from '../Context/Context';

//Stacks
import AuthStack from './Stack/AuthStack';
import MainStack from './Stack/MainStack';

//Screen
import BrainSplashScreen from '../Screens/SplashScreen/BrainSplashScreen';

//Storage
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AppNavigator = () => {

  const [lang, setLang] = useState('en');
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState('');
  const [splashScreen, setSplashScreen] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const context = {
    auth,
    lang,
    token,

    getAuth: value => {
      setAuth(value);
    },
    getLang : value => {
      setLang(value);
    },
    getToken : value => {
      setToken(value);
    }
  };

  useEffect(() => {
    RestoreData();
  }, []);

  const RestoreData = () => {
    try {
      RNSecureKeyStore.get("@userData")
      .then((res)=> {
         const userData = JSON.parse(res);
         setUserInfo(userData);
         setAuth(true);
        //  setTimeout(() => {
        //   setSplashScreen(false);
        // }, 5000);
      });
      RNSecureKeyStore.get("@lang")
      .then((res)=> {
         const locale = res;
         setLang(locale);
      });
    }catch (error){
      console.log('error', error);
    }
  };

  console.log('Is Auth::', auth);
  console.log('userInfo::', userInfo);

  // if(splashScreen) {
  //   // return (
  //   //   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //   //     <Text>Welcome to our app</Text>
       
  //   //   </View>
  //   // );
  //   return <BrainSplashScreen/>
  // }else{
  //   return (
  //     <AuthContext.Provider value={context}>
  //       <NavigationContainer>
  //         {
  //           auth ? 
  //           <MainStack/>
  //           :
  //           <AuthStack/>
  //         }
  //       </NavigationContainer>
  //     </AuthContext.Provider>
  //   )
  // }
  return (
    <AuthContext.Provider value={context}>
      <NavigationContainer>
        {
          token ? 
          <MainStack/>
          :
          <AuthStack/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default AppNavigator;