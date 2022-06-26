import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicon from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AppButton from '../Components/AppButton';

//import {useNavigation} from 'react-router-dom'; 
import axios from 'axios';
// import { useState } from 'react/cjs/react.production.min';






const Get_medical_report= ({ navigation }) => {

  //const navigation = useNavigation();

 

 <Text>Downlord your medical report here</Text>
  

    return (
      <ScrollView>

      <View style={styles.container}>
        
      </View>

    </ScrollView>

);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  inputboxcontainer: {

    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'skyblue',
    margin: 20,
    textAlign: 'center',
    //backgroundColor: Colors.Appbackground,
    flexDirection: "row",
    padding: 4,
    borderRadius: 13,
    width: '90%',
    marginVertical: 15,
    borderColor: 'skyblue',
    paddingHorizontal: 10,
    paddingTop: 6

  },
  inputbox: {
    marginHorizontal: 10,
    paddingTop: 8
  },

  err: {

    color: 'red',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: -4

  },

});
     
  export default Get_medical_report;