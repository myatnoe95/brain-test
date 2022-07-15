import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    MainContainer: {
        // backgroundColor: 'yellow',
        height: '100%',
    },
    IntroText: {

    },
    MainText: {
        paddingVertical: hp(2),
        paddingHorizontal: wp(3),
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'CormorantSC-Medium',
        color: '#fff',
        // fontFamily: 'EduQLDBeginner-SemiBold',
    },
    SubText: {
        fontSize: 14,
        paddingHorizontal: wp(3),
        color: '#fff',
    },
    TestCategories: {
        // backgroundColor: 'blue',
        alignItems: 'center',
        padding: hp(3)
    },
    CategoryCard: {
        marginTop: hp(2),
        // justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#ffffff',
        width: wp(85),
        height: hp(23),
        // marginHorizontal: wp(2.5),
        // marginVertical: hp(1),
        borderColor: '#808080',	
        borderWidth: hp(0.3),
        borderRadius: hp(2),
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: hp(2),
        elevation: 3,
    },
    CardHeader: {
        // backgroundColor: '#FF1493',
        flexDirection: 'row',
        // width: hp(40),
        height: hp(15)
    },
    LeftHeader: {
        // backgroundColor: 'yellow',
        width: hp(14),
    },
    CategoryImgContainer: {
        paddingVertical: hp(2),
        paddingHorizontal: hp(2)
    },
    RightHeader: {
       width: hp(29),
    //    backgroundColor: 'blue',
       alignContent: 'center',
       alignItems: 'center',
       justifyContent: 'center'
    },
    TestTitle: {
       fontSize: 15,
       fontWeight: 'bold',
       fontFamily: 'EduQLDBeginner-SemiBold',
    },
    MiddleLine: {
        borderWidth:hp(0.13), 
        borderStyle:'dashed', 
        borderRadius:hp(0.5),
        borderColor:'black'
    },
    CardFooter: {
        flexDirection: 'row',
        // backgroundColor: '#FF7F50',
        height: hp(7),
        justifyContent: 'space-between'
    },
    LeftFooter: {
        width: hp(10),
        // backgroundColor: 'red',
        // paddingHorizontal: hp(4),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RightFooter: {
        width: hp(30),
        // backgroundColor: 'blue',
        // paddingHorizontal: hp(2),

        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
        
        
    },
    TakeTestAction: {
        // paddingHorizontal: hp(5),
        // paddingVertical: wp(2),
        paddingRight: wp(2),
    },
    TakeTestBtn: {
        backgroundColor: '#fce4ec',
        // borderWidth: wp(0.5),
        borderRadius: hp(1.5),
        paddingHorizontal: hp(1.2),
        paddingVertical: hp(1.2),
    },
    BtnText: {
        color: '#000'
    }
})


export default styles;