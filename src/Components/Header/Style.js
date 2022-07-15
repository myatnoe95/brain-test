import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    MainHeader: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    LeftContainer: {
        flexDirection: 'row',
        // backgroundColor: 'red',

    },
    ProfileImgContainer: {
        // alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp(2),
        paddingVertical: hp(0.5),
        marginTop: hp(1),
    },
    ProfileImage: {
        width: 50, 
        height: 50, 
        backgroundColor: '#DCDCDC', 
        borderRadius: 25 ,
    },
    ProfileNameContainer: {
        // alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: hp(1),
    },
    ProfileName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    RightContainer: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
    },
    MenuContainer: {
        paddingHorizontal: hp(1),
        justifyContent: 'center',
    },
    LogoutContainer: {
        paddingHorizontal: hp(1),
        justifyContent: 'center',
    }
})

export default styles;