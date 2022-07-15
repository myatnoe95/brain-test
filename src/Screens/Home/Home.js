import React,{useContext} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView,} from 'react-native';
//Storage
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

//Context
import {AuthContext} from '../../Context/Context';

//Icons
import MenuIcon from '../../../assets/icons/Menu';
import LogoutIcon from '../../../assets/icons/Logout';
import NavigationArrowIcon from '../../../assets/icons/navigationArrow';

//Components
import Header from '@components/Header/Header';

//Style
import styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = (props) => {

  const {auth, getAuth, getToken} = useContext(AuthContext);

  const removeAction = () => {
    getAuth(false);
    getToken('');
    props.navigation.navigate('Login');
  }

  return (
    <View style={{backgroundColor: 	'#f48fb1'}}>
      <ScrollView>
      {/* App Header Bar */}
      <Header
        removeAction= {removeAction}
      />

      <View style={styles.MainContainer}>
        <View style={styles.IntroText}>
          <Text style={styles.MainText}>What are you interested in? </Text>
          <Text style={styles.SubText}> Take the test and get the result</Text>
        </View>

        <View style={styles.TestCategories}>
          <View style={styles.CategoryCard}>
            <View style={styles.CardHeader}>
                <View style={styles.LeftHeader}>
                  <View style={styles.CategoryImgContainer}>
                    <Image 
                      source={require('@assets/images/bulb.png')} 
                      style={{width: wp(15), height: wp(18), borderRadius: wp(7.5),}}
                      resizeMode="contain"
                      resizeMethod="resize"
                    >
                   </Image>
                  </View>
                </View>
                <View style={styles.RightHeader}>
                  <Text style={styles.TestTitle}>Test Your Verbal Intelligence</Text>
                </View>
            </View>
            <View style={styles.MiddleLine}></View>
            <View style={styles.CardFooter}>
              <View style={styles.LeftFooter}>
                <NavigationArrowIcon
                  width={wp(5)} 
                  height={hp(5)}
                />  
              </View>

              <View style={styles.RightFooter}>
                <View style={styles.QtyQuestion}>
                  <Text style={{textAlign: 'center'}}> 50 Questions</Text>
                </View>
               
                <View style={styles.TakeTestAction}>
                  <TouchableOpacity 
                    style={styles.TakeTestBtn}
                  >
                    <Text style={styles.BtnText}>Take Test</Text>
                  </TouchableOpacity>
                </View>
               
              </View>
                
            </View>
          </View>

          <View style={styles.CategoryCard}>
            <View style={styles.CardHeader}>
              
                <View style={styles.LeftHeader}>
                  <View style={styles.CategoryImgContainer}>
                    <Image 
                      source={require('@assets/images/amnesia.png')} 
                      style={{width: wp(15), height: wp(18), borderRadius: wp(7.5)}}
                      resizeMode="contain"
                      resizeMethod="resize"
                    >
                   </Image>
                  </View>
                </View>
                <View style={styles.RightHeader}>
                  <Text style={styles.TestTitle}>Test Your Memory Intelligence</Text>
                </View>
            </View>
            <View style={styles.MiddleLine}></View>
            <View style={styles.CardFooter}>
              <View style={styles.LeftFooter}>
                <NavigationArrowIcon
                  width={wp(5)} 
                  height={hp(5)}
                />  
              </View>

              <View style={styles.RightFooter}>
                <View style={styles.QtyQuestion}>
                  <Text style={{textAlign: 'center'}}> 25 Questions</Text>
                </View>
               
                <View style={styles.TakeTestAction}>
                  <TouchableOpacity 
                    style={styles.TakeTestBtn}
                  >
                    <Text style={styles.BtnText}>Take Test</Text>
                  </TouchableOpacity>
                </View>
               
              </View>
                
            </View>
          </View>

          <View style={styles.CategoryCard}>
            <View style={styles.CardHeader}>
              
                <View style={styles.LeftHeader}>
                  <View style={styles.CategoryImgContainer}>
                    <Image 
                      source={require('@assets/images/iq.png')} 
                      style={{width: wp(15), height: wp(18), borderRadius: wp(7.5),}}
                      resizeMode="contain"
                      resizeMethod="resize"
                    >
                   </Image>
                  </View>
                </View>
                <View style={styles.RightHeader}>
                  <Text style={styles.TestTitle}>Test Your Numerical Intelligence</Text>
                </View>
            </View>
            <View style={styles.MiddleLine}></View>
            <View style={styles.CardFooter}>
              <View style={styles.LeftFooter}>
                <NavigationArrowIcon
                  width={wp(5)} 
                  height={hp(5)}
                />  
              </View>

              <View style={styles.RightFooter}>
                <View style={styles.QtyQuestion}>
                  <Text style={{textAlign: 'center'}}> 30 Questions</Text>
                </View>
               
                <View style={styles.TakeTestAction}>
                  <TouchableOpacity 
                    style={styles.TakeTestBtn}
                  >
                    <Text style={styles.BtnText}>Take Test</Text>
                  </TouchableOpacity>
                </View>
               
              </View>
                
            </View>
          </View>
        </View>
        
      </View>
      </ScrollView>
    </View>
  )
}

export default Home;