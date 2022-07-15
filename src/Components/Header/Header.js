import React,{useContext} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
//Storage
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

//Context
import {AuthContext} from '../../Context/Context';

//Icons
import MenuIcon from '../../../assets/icons/Menu';
import LogoutIcon from '../../../assets/icons/Logout';

//Style
import styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = (props) => {
  return (
    <View style={styles.MainHeader}>
        <View style={styles.LeftContainer}>
            <View style={styles.ProfileImgContainer}>
                <Image 
                source={require('@assets/images/default_profile.png')} 
                style={styles.ProfileImage}
                resizeMode="contain"
                resizeMethod="resize"
                >
                </Image>
            </View>
            <View style={styles.ProfileNameContainer}>
                <Text style={styles.ProfileName}>Myat</Text>
            </View>
        </View>
        <View style={styles.RightContainer}>
            <View style={styles.MenuContainer}>
                <MenuIcon
                width={wp(5)} 
                height={hp(5)}
                />
            </View>
            <View style={styles.LogoutContainer}>
                <TouchableOpacity
                onPress={props.removeAction}
                >
                <LogoutIcon
                    width={wp(6)} 
                    height={hp(5)}
                />
                </TouchableOpacity>
            </View>
        </View>
  </View>
  )
}

export default Header