import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button,Image } from 'react-native';
import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import AppButton from '../Components/AppButton';
import axios from 'axios';


const Find_Doctor = () => {

    const navigation = useNavigation();

    const [comments, setComments] = useState([]);

    useEffect(() => {
      axios
        .get('http://192.168.43.68:4000/doctor/displaydoctors')
        .then((res) => {          
          console.log(res.data);
          setComments(res.data);
        })      
        .catch((error) => {
          console.log(error);
        });
    }, []);


      // const getAllData = () => {
      //   //   axios
      //   //     .get('http://192.168.8.103:4000/onlinePatient/displayOnline')
      //   //     .then(response => {
      //   //       console.log(JSON.stringify(response.data))
      //   //     })
      //   //     .catch(error => console.error(error));
      //   // };
  

    

    return (
        <ScrollView>
            
            <Text></Text>

            <TouchableOpacity style={styles.card1} >
               <Text></Text>
              
                {comments.map((row, index) => (
                <View key={index}>    

                 <Text style={styles.cardText}>Dr.{row.firstname} {row.lastname}</Text>
                <Image style={styles.cardImage} source={require('../assets/img/request.png')} />
                <Text></Text>

                  <Text> First Name : {row.firstname}</Text>
                  <Text> Last Name : {row.lastname}</Text>
                  <Text> Working Hospital: {row.workingHospital}</Text>
                  <Text> University : {row.university}</Text>
                  <Text> Email: {row.email}</Text>
                  <AppButton
              //title="Continue" onPress={ContinuePressed}
              title="Book Appointment" onPress={() => navigation.navigate('Channel_a_Doctor')}
              />
                  <Text></Text>                         
                </View>
                ))}
                
             

                <Text></Text>
                {/* <AppButton
              //title="Continue" onPress={ContinuePressed}
              title="Book Appoinment" onPress={() => navigation.navigate('Channel_a_Doctor')}

              /> */}
                
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
        height: '90%',
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

export default Find_Doctor;