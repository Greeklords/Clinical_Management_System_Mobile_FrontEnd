import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button,Image } from 'react-native';
import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import AppButton from '../Components/AppButton';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {DevSettings} from 'react-native';

// Just call reload method 



 



const History = () => {

  const navigation = useNavigation();

  const [comments, setComments] = useState({});
  const {id}=useParams()

  useEffect(() => {
    axios
      .get('http://192.168.43.68:4000/onlinePatient/onlineprofile/62b95f69e8544337c005351a')
      .then((res) => {          
        console.log(res.data);
        setComments(res.data);
      })      
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function cancelAppointment(e){
    e.preventDefault();          
    
      axios.delete(`http://192.168.43.68:4000/onlinePatient/onlineprofile/62b95f69e8544337c005351a`).then(()=>{        
       // DevSettings.reload();
      }).catch((err)=>{
        alert(err)
      })      
  }

  
   return (
    <ScrollView>
        
        <Text></Text>

        <TouchableOpacity style={styles.card1} >


           <Text></Text>
           
           <Text></Text>
           <Text style={styles.cardText}>Profile</Text>
            <Image style={styles.cardImage} source={require('../assets/img/request.png')} />
            <Text></Text>
                   
              <Text> id: {comments._id}</Text>
              <Text> doctor name : {comments.doctorname}</Text>                 
              <Text></Text>  

            <Text></Text>
            <AppButton
          //title="Continue" onPress={ContinuePressed}
          title="Cancel" onPress={cancelAppointment}

          />
             <AppButton
          //title="Continue" onPress={ContinuePressed}
          title="Reshedule" onPress={() => navigation.navigate('Channel_a_Doctor')}

          />
            <View>

      
    </View>
           
        </TouchableOpacity>

        <Text></Text>


    </ScrollView>


);
};
const styles = StyleSheet.create({

container: {
flex: 1,
padding: 20,
alignItems: 'center',
justifyContent: 'center',
color: 'black',

},
card1: {
backgroundColor: '#DBECFF',
marginBottom: 10,
marginLeft: '5%',
width: '90%',
height: '100%',
shadowColor: '#000',
shadowOpacity: 0.2,
shadowRadius: 1,

},
cardText:{
textAlign: 'center',
fontSize: 20
},
cardImage: {
width: '30%',
height: 50,
resizeMode: 'cover',
alignItems: 'center',
marginLeft: 190,
marginTop: 10,


},



});

export default History;


 