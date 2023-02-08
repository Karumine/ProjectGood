import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreenOwner from './HomeOwner';
import AccountOwnerScreen from './AccountOwner';
import Feather from 'react-native-vector-icons/Feather';
import HomeOwner from './HomeOwner';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const COLOR = {
  red: '#E81514',
  white: '#ffffff',
  lightGray: {
    1: 'rgb(250,250,250)',
    2: 'rgb(247,247,247)',
  },
  gray: 'rgb(200,202,205)',
  black: 'rgb(46,46,46)',
  yellow: 'rgb(253,238,208)',
  darkYellow: '#e4b056',
};


const TabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.shadow]} onPress={onPress}>
      <View style={styles.buttonView}>{children}</View>
    </TouchableOpacity>
  );
};

const Tab = createMaterialBottomTabNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItem: 'center',
    justifyContent: 'center',
  },
  button: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLOR.red,
  },
  shadow: {
    shadowColor: COLOR.gray,
    shadowOffset: {
      width: 0,
      height: 7.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
})

const AppNavigation = ({ navigation }) => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#FF0000' }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreenOwner}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={HomeScreenOwner}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountOwnerScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default AppNavigation;