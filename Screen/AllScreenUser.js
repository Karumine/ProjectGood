import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons'; 
import HomeScreen from './home';
import DeliveryScreen from './Delivery';
import FavoriteScreen from './FavoriteScreen';

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#FF0000',
  secondary: '#fedac5',
  light: '#E5E5E5',
  grey: '#908e8c',
};

const Tab = createBottomTabNavigator();

const AlluserScreen = () => {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarStyle: {
      //     // backgroundColor: colors1.Text,
      //     height: 90
      //   }
      // }}
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.secondary,

      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} magin={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="delivery-dining" size={34} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AlluserScreen;