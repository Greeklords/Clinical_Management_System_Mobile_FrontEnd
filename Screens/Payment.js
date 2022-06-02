import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

const Payment = () => { 

    const navigation = useNavigation();
  
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

            //<TouchableOpacity onPress={()=>navigation.navigate('Home')}>

            <Text >Specialization</Text>
          <TextInput


           
            onChangeText={(text) => { this.setState({ Specialization: text }) }}
            style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
          />
          
        </TouchableOpacity> 
  
      </View> 
    );
  };
  
  export default Payment; 