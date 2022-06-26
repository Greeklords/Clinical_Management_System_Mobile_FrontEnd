import React ,{useState,useEffect} from 'react'; 
import { View, TextInput, Button, Text, StyleSheet,LogBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicon from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AppButton from '../Components/AppButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-virtualized-view';
import DatePicker from 'react-native-datepicker';






//import {useNavigation} from 'react-router-dom'; 
import axios from 'axios'; 
// import { useState } from 'react/cjs/react.production.min';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Payment from './Payment';

const mobileRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

const appValidationSchema = Yup.object().shape({

  category: Yup.string().required().label("category"),
  doctorname: Yup.string().required().label("Doctorname"),
  doctorId:Yup.string().required().label("doctorId"),
  date: Yup.date().required().label("Date"),
  charges: Yup.number().required().label("Charges"),
  firstname: Yup.string().required().max(20).label("Firstname"),
  lastname: Yup.string().required().max(20).label(" Lastname"),
  dob: Yup.date().required().label(" Date of Birth"),
  mobileno: Yup.string().required().matches(mobileRegex,"Invalid Mobile Number").label("Mobile Number"),
  email: Yup.string().required().email().label("Email"),
  address: Yup.string().required().max(50).label("Address"),

});

const Channel_a_Doctor = ({ navigation }) => {

  //const navigation = useNavigation();




  //const [specialization, setSpecialization] = React.useState("");
  const [doctorname, setdoctorname] = React.useState("")
  const [doctorId, setdoctorId] = React.useState("")
  const [date, setDate] = useState('09-10-2020');
  const [charges, setcharges] = React.useState("")
  const [firstname, setfirstname] = React.useState("")
  const [lastname, setlastname] = React.useState("")
  const [dob, setdob] = React.useState("")
  const [mobileno, setmobileno] = React.useState("")
  const [email, setemail] = React.useState("")
  const [address, setaddress] = React.useState("")


  // useEffect(()=>{
  //   //setOpen(false)
  //   LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  //   LogBox.ignoreLogs(['componentWillReceiveProps has been renamed, and is not recommended for use.']);

  // })

  const [category, setcategory] = useState(null);
  const [categoryList, setcategoryList] = useState([
    {label: 'Apple', value: 'apple',name:'Apple'},
    {label: 'Banana', value: 'banana',name:'Banana'}
    

  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  

  const postData = (data) => {
    console.log(data);
    const payload={
      category:data.category,
      doctorname:data.doctorname,
      doctorId:data.doctorId,
      date:data.date,
      charges:data.charges,
      firstname:data.firstname,
      lastname:data.lastname,
      dob:data.dob,
      mobileno:data.mobileno,
      email:data.email,
      address:data.address
    }
    axios
      .post('http://192.168.43.68:4000/onlinePatient/addOnlinePatient', payload)
      .then(response => {
        console.log(JSON.stringify(response.data))

      }) 



      navigation.navigate("Payment")


      
  };


  return (
    <ScrollView>

      <View style={styles.container}>
        {/* <Button title='GET' onPress={getAllData}/>
        <Button title='POST' onPress={postData}/> */}

        <Text></Text>
        <Text >Category</Text>
        <Formik
          initialValues={{ category: '', doctorname: '', doctorId:'',date: '', firstname: '', lastname: '', dob: '', mobileno: '', email: '', address: '' }}
          onSubmit={(values) =>postData(values)}
          // onSubmit={()=>navigation.navigate('Payment')}
          validationSchema={appValidationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              {/*<View style={styles.inputboxcontainer}>
              </View>*/}
                
        

                {/* <Ionicon name="medkit-outline" size={30} />
                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("specialization")}
                // value={specialization}
                /> */}

                <DropDownPicker style={styles.dropdown}
                    open={open}
                    value={category}

                  
                    items={categoryList.map((categoryList, index) => ({
                      value: categoryList.value,
                      key: 'key-' + index,
                      label: categoryList.name,
                    }))}
  
                    setOpen={setOpen}
                    setValue={setcategory}
                    //setItems={setItems}
                    onChangeText={() => handleChange("category")}

                  />

    



                

              <Text style={styles.err}>{errors.category}</Text>

              <Text >Doctor Name</Text>
              <View style={styles.inputboxcontainer}>

                <FontAwesome name="user-md" size={30} />
                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("doctorname")}
                // value={doctorname}
                />
              </View>
              <Text style={styles.err}>{errors.doctorname}</Text>

              <Text >Doctor Id</Text>
              <View style={styles.inputboxcontainer}>

                <FontAwesome name="user-md" size={30} />
                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("doctorId")}
                // value={doctorname}
                />
              </View>
              <Text style={styles.err}>{errors.doctorId}</Text>

              <Text>Date</Text>

              <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
              borderColor:'white',
            },
          }}
          onDateChange={(dates) => {

            setDate(dates);
            console.log(date);

            handleChange("date")
            

          }}
        />

              {/* <View style={styles.inputboxcontainer}> 


                <Ionicon name="today-outline" size={30} />
                <TextInput style={styles.inputbox} placeholder="yyyy-mm-dd"

                  onChangeText={handleChange("date")}
                //value={date}
                />
              </View> */}
              <Text style={styles.err}>{errors.date}</Text>

              <Text >Charges</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="card-outline" size={30} />
                <TextInput style={styles.inputbox} placeholder="Rs.1500"
                  keyboardType="numeric"
                  onChangeText={handleChange("charges")}
                //value={charges}
                />
              </View>
              <Text style={styles.err}>{errors.charges}</Text>

              <Text >First Name</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="person-outline" size={30} />
                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("firstname")}
                  maxLength={40}
                //value={firstname}
                />
              </View>
              <Text style={styles.err}>{errors.firstname}</Text>

              <Text >Last Name</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="person-outline" size={30} />
                <TextInput style={styles.inputbox}
                  onChangeText={handleChange("lastname")}
                  maxLength={40}
                //value={lastname}
                />
              </View>
              <Text style={styles.err}>{errors.lastname}</Text>

              <Text >Date of Birth</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="today-outline" 
                
                size={30} />
                <TextInput style={styles.inputbox} placeholder="yyyy-mm-dd"

                  onChangeText={handleChange("dob")}
                //value={date}
                />
              </View>
              <Text style={styles.err}>{errors.dob}</Text>

              <Text >Mobile Number</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="call-outline" size={30} />
                <TextInput style={styles.inputbox}
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={handleChange("mobileno")}
                //value={mobileno}
                />
              </View>
              <Text style={styles.err}>{errors.mobileno}</Text>

              <Text >Email</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="mail-outline" size={30} />
                <TextInput style={styles.inputbox} placeholder="malshi@gmail.com"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                //value={email}
                />
              </View>
              <Text style={styles.err}>{errors.email}</Text>


              <Text >Address</Text>
              <View style={styles.inputboxcontainer}>

                <Ionicon name="location-outline" size={30} />
                <TextInput style={styles.inputbox}
                  maxLength={50}
                  onChangeText={handleChange("address")}
                //value={address}
                />
              </View>
              <Text style={styles.err}>{errors.address}</Text>
{/* 
              <DropDownPicker style={styles.dropdown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  /> */}


              <AppButton
                title="Continue" onPress={handleSubmit} 
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
    paddingTop: 6,
    backgroundColor :"#fff",

  },
  inputbox: {
    marginHorizontal: 10,
    paddingTop: 8,
    
  },

  err: {

    color: 'red',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: -4

  },
  dropdown:{

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
  datePickerStyle: {
    
    marginTop: 20,
    borderWidth: 2,
    backgroundColor:"#fff",
  
   
    textAlign: 'center',
    //backgroundColor: Colors.Appbackground,
    // flexDirection: "row",
    borderRadius: 13,
    width: '90%',
    borderColor: 'skyblue',
   

  },


});

export default Channel_a_Doctor;


