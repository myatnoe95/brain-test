import React,{useState,useEffect,useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity , Image, Keyboard, ScrollView, ToastAndroid} from 'react-native';
import InputForm from '@components/UserInput/InputForm';
import LangModal from '../Language/LangModal';
//Storage
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

//Context
import {AuthContext} from '../../../Context/Context';

//Local
import {useLocal} from '../../../Hook';

//Style
import styles from './Style';

const Login = (props) => {

  const {auth, lang, getLang, getAuth, token, getToken} = useContext(AuthContext);
  const local = useLocal();

  const [keyboardAction, setKeyboardAction] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [login, setLogin] = useState(true);
  const [showUserName, setShowUserName] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [showPassForm, setShowPassForm] = useState(false);
  const [showConfirmPassForm, setShowConfirmPassForm] = useState(false);
  const [langModal, setLangModal] = useState(false);
  const [showPass, setShowPass] = useState(false);


  const showRegUserNameFormAction = () => {
    setLogin(!login);
    setShowUserName(true);
    setShowEmailForm(true);
    setShowPassForm(false);
    setShowConfirmPassForm(false);
  }

  const showRegPassFormAction = () => {
    setShowUserName(false);
    setShowEmailForm(false);
    setShowPassForm(true);
    setShowConfirmPassForm(true);
  }

  const showEmailFormAction = () => {
    setLogin(!login);
    setShowEmailForm(true);
    setShowUserName(false);
    setShowPassForm(false);
    setShowConfirmPassForm(false);
  }

  const showPassFormAction = () => {
    setShowEmailForm(false);
    setShowPassForm(true);
  }

  const showLangModal = () => {
    setLangModal(true);
  }

  const closeLangModal = () => {
    setLangModal(!langModal);
  }

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardAction(false);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardAction(true);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

const loginAction = () => {
    let data = {
      userEmail : email,
      userPass : password,
    }
    console.log('Login Data>>', data);
    RNSecureKeyStore.get("@userData")
    .then((res)=> {
       const userData = JSON.parse(res);
       console.log('Get User Data>>', userData);
       if(userData.userEmail == data.userEmail && userData.userPass == data.userPass){
        RNSecureKeyStore.set("@userToken", 'asdf1234',{accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY});
        getAuth(true);
        setEmail('');
        setPassword('');
        RNSecureKeyStore.get("@userToken")
        .then((res)=> {
           console.log('Get Token>>', res);
           getToken(res);
           ToastAndroid.showWithGravityAndOffset(
            'Successfully Login!',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            25,
            50
          );
           props.navigation.navigate('Home');
        });
       }else{
        ToastAndroid.showWithGravityAndOffset(
          'Login Failed',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          25,
          50
        );
       }
       
    });

}

const registerAction = () => {
  let data = {
    userName: userName,
    userEmail : email,
    userPass : password,
    userConfirmPass: confirmPass
  }
  if(!data.userName && !data.userEmail && !data.userPass && !data.userConfirmPass){
    ToastAndroid.show('Reqired to fill all input!!', ToastAndroid.CENTER);
  }
  else if(data.userPass != data.userConfirmPass){
    ToastAndroid.show('Password does not Match!', ToastAndroid.CENTER);
  }else{
    RNSecureKeyStore.set("@userData", JSON.stringify(data),{accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY});
    RNSecureKeyStore.get("@userData")
    .then((res)=> {
       console.log('Get User Data>>', JSON.parse(res));
       setUserName('');
       setEmail('');
       setPassword('');
       setConfirmPass('');
       ToastAndroid.show('Register Successfully!', ToastAndroid.CENTER);
    });
  }
}

return (
    <View>
      <ScrollView>
        <View style={styles.Header}>
          <View style={styles.Language}>
            <TouchableOpacity
              onPress={showLangModal}
            >
              {
                langModal &&
                  <LangModal
                    langModal = {langModal}
                    showLangModal = {showLangModal}
                    closeLangModal = {closeLangModal}
                    lang = {lang}
                    getLang = {getLang}
                    local={local}
                  />
              }
              
              <Text style={styles.LangText}> {local.language} </Text>

            </TouchableOpacity>
          </View>
          {
            keyboardAction && 
            <View style={styles.Image}>
                <Image 
                  source={require('@assets/images/brain.png')} 
                  style={{ width: 150, height: 130, alignContent: 'center' }}
                  resizeMode="contain"
                  resizeMethod="resize"
                />
            </View>
          }
        
          <Text style={styles.SubTitle}>TRAIN YOUR BRAIN</Text>
        </View>

        {/* User Input Field */}
        <InputForm
          userNameValue = {userName}
          emailValue = {email}
          passwordValue = {password}
          confirmPassValue = {confirmPass}
          onChangeUserName = {(name)=> setUserName(name)}
          onChangeEmail = {(email)=> setEmail(email)}
          onChangePassword = {(pass)=> setPassword(pass)}
          onChangeConfirmPass = {(pass)=> setConfirmPass(pass)}
          isLogin = {login}
          showUserName = {showUserName}
          showEmailForm = {showEmailForm}
          showPassForm = {showPassForm}
          showPassFormAction = {showPassFormAction}
          showRegPassFormAction ={showRegPassFormAction}
          showConfirmPassForm = {showConfirmPassForm}
          loginAction = {loginAction}
          registerAction = {registerAction}
          local = {local}
          showPass = {showPass}
          handleShowPass = {handleShowPass}

        />

        <View style={styles.Footer}>
          {
            showEmailForm || showPassForm ?
            <>
              <Text style={styles.FooterText}>{ login ? local.noAcc: local.alreadyAcc }</Text>
              <TouchableOpacity 
                onPress={login ? showRegUserNameFormAction : showEmailFormAction}
              >
                <Text style={styles.FooterSpanText}> {login ? local.register: local.login}</Text>
              </TouchableOpacity>
            </>
            : null
            
          }
           
    
        </View>
      </ScrollView>
    </View>
  )
}
export default Login;