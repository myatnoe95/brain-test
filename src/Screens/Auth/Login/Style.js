import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const styles =  StyleSheet.create({
    Header: {
        alignContent: 'center', 
        justifyContent:'center',
        marginTop: wp(5),
    },
    Language: {
       flexDirection: 'row-reverse',
    },
    LangText : {
        padding: hp(1),
        fontSize: hp(2),
    },
    Image: {
        alignItems: 'center',
        marginTop: wp(15),
    },
    SubTitle: {
        marginTop: wp(3),
        textAlign: 'center',
        fontSize: hp(3.5),
        fontWeight: 'bold',
    },
    Footer: {
        flexDirection: "row",
        justifyContent: 'center',
        padding: wp(5),
    },
    FooterText: {
        textAlign: 'center',
    },
    FooterSpanText: {
        color: '#6A5ACD',
    }
})

export default styles;