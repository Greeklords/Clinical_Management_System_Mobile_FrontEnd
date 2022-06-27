import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicon from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AppButton from '../Components/AppButton';

//import {useNavigation} from 'react-router-dom'; 
import axios from 'axios';
// import { useState } from 'react/cjs/react.production.min';

import { Formik } from 'formik';
import * as Yup from 'yup';


const mobileRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);


const appValidationSchema = Yup.object().shape({

  firstname: Yup.string().required().label("firstname"),
  lastname: Yup.string().required().label("lastname"),
  collectedDate:Yup.string().required().label("collectedDate"),
  dob: Yup.date().required().label("dob"),
  age: Yup.number().required().label("age"),
  mobileno: Yup.string().required().matches(mobileRegex,"Invalid Mobile Number").label("mobileno"),
  email: Yup.string().required().email().label("email"),
  address: Yup.string().required().label("address"),
  report_status:Yup.string().required().label("report_status")
  
});

const Req_Lab_report= ({ navigation }) => {

  //const navigation = useNavigation();

  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("")
  const [collectedDate, setcollectedDate] = React.useState("")
  const [dob, setdob] = React.useState("")
  const [age, setage] = React.useState("")
  const [mobileno, setmobileno] = React.useState("")
  const [email, setemail] = React.useState("")
  const [address, setaddress] = React.useState("")
  const [reportStatus, setreportStatus] = React.useState("")


  const postData = (data) => {
    console.log(data);
    const payload = {
     
          firstname:data.firstname,
          lastname:data.lastname ,
          collectedDate:data.collectedDate,
          dob:data.dob,
          age:data.age,
          mobileno:data.mobileno,
          email:data.email,
          address:data. address,
          reportStatus:data.reportStatus,
    }
    axios
      .post('http://192.168.43.68:4000/checkupDetails/addCheckupDetails', payload)
      .then(response => {
        console.log(JSON.stringify(response.data))
      })
      .catch(err=>console.log(err))
  };
  

    return (
      <ScrollView>

      <View style={styles.container}>
        {/* <Button title='GET' onPress={getAllData}/>
        <Button title='POST' onPress={postData}/> */}

        <Text></Text>
        <Text >First Name</Text>
        <Formik
          initialValues={{
          firstname: '',
          lastname: '',
          collectedDate: '', 
          dob: '',
          age: '',
          mobileno: '',
          email: '',
          address: '',
          reportStatus: '',
         
        }}
          onSubmit={(values)=>postData(values)}
          // onSubmit={()=>navigation.navigate('Payment')}
          validationSchema={appValidationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("firstname")}
               
                />
              </View>
              <Text style={styles.err}>{errors.firstname}</Text>

              <Text >Last Name</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("lastname")}
                
                />
              </View>
              <Text style={styles.err}>{errors.lastname}</Text>

              <Text >collected Date</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="today-outline" 
                
                size={30} />
                <TextInput style={styles.inputbox} placeholder="yyyy-mm-dd"

                  onChangeText={handleChange("collectedDate")}
               
                />
              </View>
              <Text style={styles.err}>{errors.collectedDate}</Text>

              <Text >Date of Birth</Text>
              <View style={styles.inputboxcontainer}>
              <Ionicon name="today-outline" size={30} />
                <TextInput style={styles.inputbox} placeholder="yyyy-mm-dd"


                  onChangeText={handleChange("dob")}
                //value={charges}
                />
              </View>
              <Text style={styles.err}>{errors.dob}</Text>

              <Text >Age</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox} keyboardType='numeric'
                  onChangeText={handleChange("age")}

                
                />
              </View>
              <Text style={styles.err}>{errors.age}</Text>

              <Text >Mobile Number</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox} keyboardType='numeric'
                maxLength={10}
                  onChangeText={handleChange("mobileno")}

                />
              </View>
              <Text style={styles.err}>{errors.mobileno}</Text>

              <Text >Email Address</Text>
              <View style={styles.inputboxcontainer}>
                
                <TextInput style={styles.inputbox} placeholder="malshi@gmail.com"
                  keyboardType="email-address"

                  onChangeText={handleChange("email")}
               
                />
              </View>
              <Text style={styles.err}>{errors.email}</Text>

              <Text >Home Address</Text>
              <View style={styles.inputboxcontainer}>

                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("address")}
               
                />
              </View>
              <Text style={styles.err}>{errors.address}</Text>

              <Text >Report Status</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("reportStatus")}
                
                />
              </View>
              <Text style={styles.err}>{errors.reportStatus}</Text>

              <AppButton
                title="Submit Details" onPress={handleSubmit}
          

              />

            </>
          )}
        </Formik>
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
     
  export default Req_Lab_report;