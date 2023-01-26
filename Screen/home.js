import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, TextInput, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { firebase } from './components/SignUp'
import { useFocusEffect } from '@react-navigation/native';
import banner from '../../ProjectGood/assets/banner.jpg'

const Tab = createMaterialBottomTabNavigator();
const { height } = Dimensions.get("screen");
const height_logo = height * 0.6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,

        borderTopRightRadius: 30,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    textSignin: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    logo: {
        width: height_logo,
        height: height_logo
    }
});

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FF0000' barStyle="light-content" />
            <View style={styles.header}>
                <Image source={banner} style={styles.logo}
                /> 

            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >

            </Animatable.View>
        </View>
    );
}
