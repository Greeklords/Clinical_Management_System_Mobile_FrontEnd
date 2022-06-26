import React from 'react';
import { View, TextInput, Button, Text, ScrollView,StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 



const Test= () => { 

  const navigation = useNavigation(); 

  const [email,setemail] = React.useState("")
  
  
  return (
    <ScrollView>
      
      <Text>Payment successfully!</Text>
      <Text></Text>
 
      <Text >Email</Text>
      <TextInput
         onChangeText={setemail}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={email}
      />




    </ScrollView>
  );
};


export default Test;


 