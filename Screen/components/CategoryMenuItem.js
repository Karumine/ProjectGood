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
  DELIVER: require('../../assets/Images/burger.png'),
  BURGER: require('../../assets/Images/deliver.png'),
  DELIVERY_CHARGE: require('../../assets/Images/delivery_charge.png'),
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
    height: 30,
    width: 30,
    opacity: isActive ? 1 : 0.5,
  }),
  categoryText: isActive => ({
    fontSize: 13,
    lineHeight: 10 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: COLOR.white,
    marginTop: 10,
    opacity: isActive ? 1 : 0.5,
  }),
});
export default CategoryMenuItem;