import React,{useState,useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity , Image, Keyboard, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Style';

// Icons
import EyeOpenIcon from '@assets/icons/eyeOpen';
import EyeCloseIcon from '@assets/icons/eyeClose';

const InputForm = (props) => {

  return (
    <View style={styles.Body}>
    {
      props.showUserName && 
      <TextInput
        placeholder= {props.local.userName}
        style={styles.input}
        value={props.userNameValue}
        onChangeText={props.onChangeUserName}
        onSubmitEditing={Keyboard.dismiss}
      />
    }
   
    {
      props.showEmailForm && 
        <TextInput
          placeholder={props.local.userEmail}
          style={[styles.input,{marginTop: 30}]}
          value={props.emailValue}
          onChangeText={props.onChangeEmail}
          onSubmitEditing={Keyboard.dismiss}
        />
    }

    {
      props.showPassForm && 
      <View style={{flexDirection: 'row',width: wp(90)}}>
        <TextInput
          placeholder={props.local.userPassword}
          style={[styles.input,{marginTop: 30}]}
          value={props.passwordValue}
          onChangeText={props.onChangePassword}
          onSubmitEditing={Keyboard.dismiss}
          secureTextEntry = {props.showPass ? false : true}
        />
        <TouchableOpacity
          onPress={props.handleShowPass}
          style={{paddingHorizontal: hp(0.3), marginTop: 30}}
        >
          {
            props.showPass ? 
            <EyeOpenIcon 
              width={wp(6.5)} 
              height={hp(8)}
            />
            :
            <EyeCloseIcon 
              width={wp(6.5)} 
              height={hp(8)}
            />
          }
        </TouchableOpacity>
      </View>
      
      
    }

    {
      props.showConfirmPassForm &&
      <View style={{flexDirection: 'row',width: wp(90)}}> 
        <TextInput
          placeholder={props.local.userConfirmPassword}
          style={[styles.input, {marginTop: 30}]}
          value={props.confirmPassValue}
          onChangeText={props.onChangeConfirmPass}
          onSubmitEditing={Keyboard.dismiss}
          secureTextEntry = {props.showPass ? false : true}
        />
        <TouchableOpacity
            onPress={props.handleShowPass}
            style={{paddingHorizontal: hp(0.3), marginTop: 30}}
        >
          {
            props.showPass ? 
            <EyeOpenIcon 
              width={wp(6.5)} 
              height={hp(8)}
            />
            :
            <EyeCloseIcon 
              width={wp(6.5)} 
              height={hp(8)}
            />
          }
        </TouchableOpacity>
      </View>
    }


    <TouchableOpacity
      style={styles.LoginButton}
      onPress=
      { 
        props.isLogin && props.showEmailForm ? props.showPassFormAction 
        : 
        !props.isLogin && props.showUserName && props.showEmailForm ? props.showRegPassFormAction 
        : 
        props.isLogin && props.showPassForm ? props.loginAction 
        :
        !props.isLogin && props.showPassForm && props.showConfirmPassForm ? props.registerAction
        :
        null
      }
    >
      <Text style={styles.LoginButtonText}>
        {
          props.isLogin && props.showEmailForm ? props.local.next
          : 
          !props.isLogin && props.showUserName && props.showEmailForm ? props.local.next
          : 
          props.isLogin && props.showPassForm ? props.local.login
          : 
          !props.isLogin && props.showPassForm && props.showConfirmPassForm ? props.local.register
          :
          '' 
        }
      </Text>
    </TouchableOpacity>
   
    {/* <View style={styles.BodyFooter}>
      <TouchableOpacity>
        <Text style={styles.ForgetText}>Forget Password?</Text>
      </TouchableOpacity>
    </View> */}

    </View>
  )
}

export default InputForm