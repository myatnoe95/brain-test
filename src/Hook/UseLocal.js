import React,{useContext} from 'react';
import { View, Text } from 'react-native';

//Context
import {AuthContext} from '../Context/Context';

//Helpers
import en from '@components/Helper/en';
import mm from '@components/Helper/mm';


export const useLocal = () => {
 
  const {lang} = React.useContext(AuthContext);
  console.log('Lang in UseLocal>>', lang);
  if(lang == 'en'){
    console.log('reach');
    return en;
  }else{
    return mm;
  }
}

