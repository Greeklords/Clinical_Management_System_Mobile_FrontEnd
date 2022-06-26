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

  firstname: Yup.string().required().label("Firstname"),
  lastname: Yup.string().required().label("Lastname"),
  OPD_no: Yup.string().required().label("Opd_no"),
  reciep_no: Yup.string().required().label("Reciep_no"),
  workingplace: Yup.string().required().label("Working_place"),
  address: Yup.string().required().label("Address"),
  requestedDate: Yup.date().required().label("Requested_date"),
  EffectedDate: Yup.date().required().label("Effected_date"),
  doctorDescription: Yup.string().required().label("Doctor_description"),
  other_recomendation: Yup.string().required().label("Other_recomendation"),
  recemendedDateDuration: Yup.number().required().label("Duration"),
  DoctorName: Yup.string().required().label("Doctor_Name"),
  Designation: Yup.string().required().label("Designation"),
  isseedDate: Yup.date().required().label("Date"),
});

const Req_medical_report = ({ navigation }) => {

  //const navigation = useNavigation();

  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("")
  const [OPD_no, setOPD_no] = React.useState("")
  const [reciep_no, setreciep_no] = React.useState("")
  const [workingplace, setworkingplace] = React.useState("")
  const [address, setaddress] = React.useState("")
  const [requestedDate, setrequestedDate] = React.useState("")
  const [EffectedDate, setEffectedDate] = React.useState("")
  const [doctorDescription, setdoctorDescription] = React.useState("")
  const [other_recomendation, setother_recomendation] = React.useState("")
  const [recemendedDateDuration, setrecemendedDateDuration] = React.useState("")
  const [DoctorName, setDoctorName] = React.useState("")
  const [Designation, setDesignation] = React.useState("")
  const [isseedDate, setisseedDate] = React.useState("")

  
  const postData = (data) => {
    console.log(data);
    const payload = {
      firstname: data.firstname,
      lastname: data.lastname,
      OPD_no: data.OPD_no,
      reciep_no: data.reciep_no,
      workingplace: data.workingplace,
      address: data.address,
      reqestedDate: data.requestedDate,
      EffectedDate: data.EffectedDate,
      doctorDescription: data.doctorDescription,
      other_recomendation: data.other_recomendation,
      recemendedDateDuration: data.recemendedDateDuration,
      DoctorName: data.DoctorName,
      Designation: data.Designation,
      isseedDate: data.isseedDate
    }
    axios
      .post('http://192.168.43.68:4004/MedicalReports/add', payload)
      .then(response => {
        console.log(JSON.stringify(response.data))
      })
      .catch(err=>console.log(err))


      navigation.navigate("Get_medical_report")
  };


  return (
    <ScrollView>

      <View style={styles.container}>
        {/* <Button title='GET' onPress={getAllData}/>
        <Button title='POST' onPress={postData}/> */}

        <Text></Text>
        <Text >First Name</Text>
        <Formik
          initialValues={{ firstname: '', lastname: '', OPD_no: '', reciep_no: '', workingplace: '', address: '', requestedDate: '', EffectedDate: '', doctorDescription: '', other_recomendation: '', recemendedDateDuration: '', DoctorName: '', Designation: '', isseedDate: '' }}
          onSubmit={(values)=>postData(values)}
          // onSubmit={()=>navigation.navigate('Payment')}
          validationSchema={appValidationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("firstname")}
                // value={specialization}
                />
              </View>
              <Text style={styles.err}>{errors.firstname}</Text>

              <Text >Last Name</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("lastname")}
                // value={doctorname}
                />
              </View>
              <Text style={styles.err}>{errors.lastname}</Text>

              <Text>OPD Number</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("OPD_no")}
                //value={date}
                />
              </View>
              <Text style={styles.err}>{errors.OPD_no}</Text>

              <Text >Recieption Number</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("reciep_no")}
                //value={charges}
                />
              </View>
              <Text style={styles.err}>{errors.reciep_no}</Text>

              <Text >Working_place</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("workingplace")}

                //value={firstname}
                />
              </View>
              <Text style={styles.err}>{errors.workingplace}</Text>

              <Text >Address</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("address")}

                //value={lastname}
                />
              </View>
              <Text style={styles.err}>{errors.address}</Text>

              <Text >Requested date</Text>
              <View style={styles.inputboxcontainer}>
                <Ionicon name="today-outline" size={30} />
                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("requestedDate")}
                //value={date}
                />
              </View>
              <Text style={styles.err}>{errors.requestedDate}</Text>

              <Text >Effected Date</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="today-outline" size={30} />
                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("EffectedDate")}
                //value={mobileno}
                />
              </View>
              <Text style={styles.err}>{errors.EffectedDate}</Text>

              <Text >Doctor Description</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("doctorDescription")}
                //value={email}
                />
              </View>
              <Text style={styles.err}>{errors.doctorDescription}</Text>


              <Text >Other Recomendation</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("other_recomendation")}
                //value={address}
                />
              </View>
              <Text style={styles.err}>{errors.other_recomendation}</Text>



              <Text >Duration</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("recemendedDateDuration")}
                //value={address}
                />
              </View>
              <Text style={styles.err}>{errors.recemendedDateDuration}</Text>

              <Text >Doctor Name</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("DoctorName")}
                //value={email
                />
              </View>
              <Text style={styles.err}>{errors.DoctorName}</Text>


              <Text >Designation</Text>
              <View style={styles.inputboxcontainer}>


                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("Designation")}
                //value={address}
                />
              </View>
              <Text style={styles.err}>{errors.Designation}</Text>
              <Text >Date</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="today-outline" size={30} />
                <TextInput style={styles.inputbox}

                  onChangeText={handleChange("isseedDate")}

                />
              </View>
              <Text style={styles.err}>{errors.isseedDate}</Text>


              <AppButton
                title="Submit Details" onPress={handleSubmit}
              // onPress={() => navigation.navigate('Payment')}

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


