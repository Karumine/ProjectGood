import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './Screen/First';
import SignInScreen from './Screen/SignIn';
import SignUpScreen from './Screen/SignUp';
import ForgotScreen from './Screen/Forgot';
import AllScreen from './Screen/AllScreen';
const Stack = createNativeStackNavigator();

function App() {
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
        <Stack.Screen name="AllScreen" component={AllScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;