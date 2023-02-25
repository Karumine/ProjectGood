import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Fonts } from '../constants/Typography';

const COLOR = {
  white: '#FFF',
  dark: '#000',
  primary: '#FF0000',
  secondary: '#fedac5',
  light: '#E5E5E5',
  grey: '#908e8c',
};

export const Images = {
  
  FRIEDCHICKEN: require('../../assets/Images/fried_chicken.png'),
  BURGER: require('../../assets/Images/burger.png'),
  PIZZA: require('../../assets/Images/pizza.png'),
  DESSERT: require('../../assets/Images/dessert.png'),
  DRINKS: require('../../assets/Images/drinks.png'),
  NOODLES: require('../../assets/Images/noodles.png')
};
const CategoryMenuItem = ({name, logo, activeCategory, setActiveCategory}) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveCategory(name)}
      style={styles.category()}>
      <Image
        source={Images[logo]} style={styles.categoryIcon(activeCategory === name)}
      />
      <Text style={styles.categoryText(activeCategory === name)}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: (marginTop = 0) => ({
    alignItems: 'center',
    marginTop,
    
  }),
  categoryIcon: isActive => ({
    height: 40,
    width: 40,
    opacity: isActive ? 1 : 0.6,
    
  }),
  categoryText: isActive => ({
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: COLOR.white,
    marginTop: 5,
    opacity: isActive ? 1 : 0.6,
  }),
});
export default CategoryMenuItem;