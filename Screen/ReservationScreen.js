import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const COLOR = {
    white: '#FFF',
    dark: '#000',
    primary: '#FF0000',
    secondary: '#fedac5',
    light: '#E5E5E5',
    grey: '#908e8c',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

});

const ReservationScreen = () => {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.header}>
                       <Text> </Text>
                    </View>
                </View>
            </View>

        </>
    );
};

export default ReservationScreen;