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


const appValidationSchema = Yup.object().shape({
  User_id:Yup.string().required().label("User_id"),
  Doc_id: Yup.string().required().label("Doc_id"),
  appoinment_id: Yup.string().required().label("appoinment_id"),
  workingplace: Yup.string().required().label("workingplace"),
  medical_status: Yup.string().required().label("medical_status"),
  first_name: Yup.string().required().label("first_name"),
  last_name: Yup.string().required().label("last_name"),
  address: Yup.string().required().label("address"),
  reqestedDate: Yup.date().required().label("reqestedDate"),
  Effected_Date: Yup.date().required().label("Effected_Date"),
  Imageurl: Yup.string().required().label("Imageurl")

});

const Req_medical_report = ({ navigation }) => {

  //const navigation = useNavigation();

  const [User_id, setUser_id] = React.useState("");
  const [Doc_id, setDoc_id] = React.useState("");
  const [appoinment_id, setappoinment_id] = React.useState("")
  const [workingplace, setworkingplace] = React.useState("")
  const [medical_status, setmedical_status] = React.useState("")
  const [first_name, setfirst_name] = React.useState("")
  const [last_name, setlast_name] = React.useState("")
  const [address, setaddress] = React.useState("")
  const [reqestedDate, setreqestedDate] = React.useState("")
  const [Effected_Date, setEffected_Date] = React.useState("")
  const [Imageurl, setImageurl] = React.useState("")



  const postData = (data) => {
    console.log(data);
    const payload = {
      User_id:data.User_id,
      Doc_id: data.Doc_id,
      appoinment_id: data.appoinment_id,
      workingplace: data.workingplace,
      medical_status: data.medical_status,
      workingplace: data.workingplace,
      first_name: data.first_name,
      last_name: data.last_name,
      address: data.address,
      reqestedDate: data.reqestedDate,
      Effected_Date: data.Effected_Date,
      Imageurl: data.Imageurl,

    }
    axios
      .post('http://192.168.43.68:4000/MedicalRequest/add', payload)
      .then(response => {
        console.log(JSON.stringify(response.data))
      })
      .catch(err => console.log(err))


    navigation.navigate("Payment")
  };


  return (
    <ScrollView>

      <View style={styles.container}>
        {/* <Button title='GET' onPress={getAllData}/>
        <Button title='POST' onPress={postData}/> */}

        <Text></Text>
        <Text >User ID</Text>
        <Formik
          initialValues={{ 
            User_id:'',
            Doc_id: '', 
            appoinment_id: '', 
            workingplace: '', 
            medical_status: '', 
            first_name: '', 
            last_name: '', 
            address: '', 
            reqestedDate: '', 
            Effected_Date: '', 
            Imageurl:'' 
          }}
          onSubmit={(values) => postData(values)}
          validationSchema={appValidationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("User_id")}

                />
              </View>
              <Text style={styles.err}>{errors.User_id}</Text>

              <Text >Doctor ID</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("Doc_id")}

                />
              </View>
              <Text style={styles.err}>{errors.Doc_id}</Text>

              <Text >Appoinment ID</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("appoinment_id")}

                />
              </View>
              <Text style={styles.err}>{errors.appoinment_id}</Text>

              <Text>Working Place</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("workingplace")}
                
                />
              </View>
              <Text style={styles.err}>{errors.workingplace}</Text>

              <Text >Medical Status</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("medical_status")}

                />
              </View>
              <Text style={styles.err}>{errors.medical_status}</Text>

              <Text >First Name</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("first_name")}


                />
              </View>
              <Text style={styles.err}>{errors.first_name}</Text>

              <Text >Last Name</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("last_name")}


                />
              </View>
              <Text style={styles.err}>{errors.last_name}</Text>

              <Text >Address</Text>
              <View style={styles.inputboxcontainer}>

                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("address")}

                />
              </View>
              <Text style={styles.err}>{errors.address}</Text>

              <Text >Reqested Date</Text>
              <View style={styles.inputboxcontainer}>


                <Ionicon name="today-outline" size={30} />
                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("reqestedDate")}

                />
              </View>
              <Text style={styles.err}>{errors.reqestedDate}</Text>

              <Text >Effected Date</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="today-outline" size={30} />
                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("Effected_Date")}

                />
              </View>
              <Text style={styles.err}>{errors.Effected_Date}</Text>

              <Text >Imageurl</Text>
              <View style={styles.inputboxcontainer}>

               
                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("Imageurl")}

                />
              </View>
              <Text style={styles.err}>{errors.Imageurl}</Text>

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

export default Req_medical_report;


