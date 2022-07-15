import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";

//Storage
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";


//Style
import styles  from "./Style";

const LangModal = (props) => {
  const changeLanguage = (lang) => {
    try{
        RNSecureKeyStore.set('@lang', JSON.stringify(lang),{accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY});
        props.getLang(lang);
        RNSecureKeyStore.get('@lang')
        .then((res)=> {
           console.log('Get Lang>>', JSON.parse(res));
        });
    }catch (error) {
        console.log('error', error);
    }
  }

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.LangModal}
        onRequestClose = {props.closeLangModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style ={styles.modelHeader}>
                <View style={styles.modalHeaderContent}>
                    <Text style={styles.HeaderContentText}>{props.local.chooseLanguage}</Text></View>
                <TouchableOpacity
                   onPress={props.closeLangModal}
                >
                    <Text style={styles.modalHeaderCloseText}>X</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
                <TouchableOpacity 
                    style={{marginBottom: 10}}
                    onPress={()=>changeLanguage('en')}
                >
                    <Text>{props.local.eng}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{marginBottom: 10}}
                    onPress={()=>changeLanguage('mm')}     
                >
                    <Text>{props.local.mm}</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
  );
};

export default LangModal;