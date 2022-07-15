import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const styles =  StyleSheet.create({
    Body: {
        marginTop: wp(5),
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#ddd',
        width: wp(80),
        paddingHorizontal: wp(5),
        paddingVertical: hp(2.5),
        borderRadius: hp(1.5),
        borderWidth: hp(0.2),
        borderColor: '#B3E59F',
        // borderBottomColor:  '#B3E59F',
    },
    LoginButton: {
        marginTop: wp(6),
        backgroundColor: '#DF75A5',
        width: wp(70),
        borderRadius: hp(3),
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
    },
    LoginButtonText: {
        textAlign: 'center',
        color: '#fff',
    },
    // BodyFooter: {
    //     padding: hp(4),
    // },
    // ForgetText: {
    //     color: '#6A5ACD',
    // },
})

export default styles;