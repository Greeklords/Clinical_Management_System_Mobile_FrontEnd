import React, { useState } from 'react';

import Welcome from './Screens/Welcome';
import Services from './Screens/Services';
import Home from './Screens/Home';
import Channel_a_Doctor from './Screens/Channel_a_Doctor';
import Req_medical_report from './Screens/Req_medical_report';
import Req_Lab_report from './Screens/Req_Lab_report';
import Ask_a_Doctor from './Screens/Ask_a_Doctor';
import Payment from './Screens/Payment';
import Pay from './Screens/Pay';
import Find_Doctor from './Screens/Find_Doctor';
import Details from './Screens/Details';
import AppButton from './Components/AppButton';
import History from './Screens/History';
import Test from './Screens/Test';
import Get_medical_report from './Screens/Get_medical_report';



import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native-web';



const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'RhodiumLibre-Regular': require('./assets/fonts/RhodiumLibre-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Services' component={Services} />
        <Stack.Screen name='Channel_a_Doctor' component={Channel_a_Doctor} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Req_medical_report' component={Req_medical_report} />
        <Stack.Screen name='Req_Lab_report' component={Req_Lab_report} />
        <Stack.Screen name='Ask_a_Doctor' component={Ask_a_Doctor} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='Pay' component={Pay} />
        <Stack.Screen name='Find_Doctor' component={Find_Doctor} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='AppButton' component={AppButton} />
        <Stack.Screen name='Test' component={Test} />
        <Stack.Screen name='History' component={History}/>
        <Stack.Screen name='Get_medical_report' component={Get_medical_report}/>
        
       
      </Stack.Navigator>



    </NavigationContainer>



  );
}