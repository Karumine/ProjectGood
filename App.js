import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './Screen/First';
import SignInScreen from './Screen/SignIn';
import SignUpScreen from './Screen/SignUp';
import ForgotScreen from './Screen/Forgot';
import AllScreen from './Screen/AllScreen';
import { firebase } from './Screen/components/SignUp';
import React, { useEffect, useState } from "react";

import AllScreenUser from './Screen/AllScreenUser';
import AccountUserScreen from './Screen/AccountUser';
import AccountOwnerScreen from './Screen/AccountOwner';
import DetailsScreen from './Screen/DetailsScreen';
import DeliveryScreen from './Screen/Delivery';
import ReservationScreen from './Screen/ReservationScreen';
import success from './Screen/Success';
import AllScreenOwner from './Screen/AllScreenOwner'

const Stack = createNativeStackNavigator();

function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }
  useEffect(() => {
    const fechdata = async () => {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
      if (user) {
        console.log('ถ้ามีคน login');
      }
      else {
        console.log('ถ้าไม่มีคน login');
      }
      return subscriber
    }
    fechdata()
  })
  if (initializing)
    return null
  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="First" component={FirstScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Fotgot" component={ForgotScreen} />
          {/* <Stack.Screen name="AllScreen" component={AllScreen} /> */}
        </Stack.Navigator>

      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen name="AllScreenUser" component={AllScreenUser} />

        <Stack.Screen name="AllScreenOwner" component={AllScreenOwner} />
        <Stack.Screen name="AccountUserScreen" component={AccountUserScreen} />
        <Stack.Screen name="AccountOwnerScreen" component={AccountOwnerScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
        <Stack.Screen name="success" component={success} />
        <Stack.Screen name="ReservationScreen" component={ReservationScreen} />



      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;