import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, StatusBar, Dimensions, TextInput, Image, TouchableOpacity, Keyboard } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { firebase, firebaseConfig } from './components/SignUp'
import { useFocusEffect } from '@react-navigation/native';
import banner from '../../ProjectGood/assets/banner.jpg'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import uuid from 'uuid-random';
import { FlatList } from "react-native-gesture-handler";

const Tab = createMaterialBottomTabNavigator();
const { height } = Dimensions.get("screen");
const height_logo = height * 0.6;
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
        backgroundColor: '#FF0000'
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 50,
        paddingHorizontal: 30,

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
    formContainer: {

        height: 80,
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'FF0000',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#FF0000',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'FF0000',
        fontSize: 20
    }
});

const HomeScreenOwner = ({ navigation }) => {
    const isuser = firebase.auth().currentUser
    console.log('isuser', isuser);
    const [addData, setAddData] = useState('');
    const [item, setItem] = useState([
        { id: uuid(), text: 'คุณ not TimeReservation 16.19' },
        { id: uuid(), text: 'คุณ 1 TimeReservation 17.19' },
        { id: uuid(), text: 'คุณ 2 TimeReservation 11.19' },
        { id: uuid(), text: 'คุณ 3 TimeReservation 12.19' },

    ])

    // add new field
    const addField = async () => {
        try {
            await firebase.firestore().collection('users').doc(isuser.uid)
                .update({
                    "foods": firebase.firestore.FieldValue.arrayUnion({
                        id: '1',
                        name: addData,
                        city: 'นนทบุรี',
                        price: 'สถานะ ว่าง',
                    })
                })
        }
        catch (error) {
            console.log('asdwe', error);
        }
    }

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor='#FF0000' barStyle="light-content" />

                    <Animatable.View
                        animation="fadeInUpBig"
                    >
                        <View style={styles.header}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 28 }}>Hello,</Text>
                                    <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>
                                        Vogue Beauty
                                    </Text>
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 22, color: COLOR.grey }}>
                                    นนทบุรี
                                </Text>
                            </View>


                            <TouchableOpacity onPress={() => navigation.navigate('AccountOwnerScreen')}>
                                <MaterialIcons name="account-circle" size={60} color="red" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../assets/Res1.jpg')} style={{
                                height: '50%',
                                width: '100%',
                                marginTop: 20,
                            }} />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>รายชื่อคนจองร้าน</Text>
                            <View style={{ flex: 1, marginTop: 20, borderWidth: 2, borderColor: 'red' }}>

                                <Text style={{ fontSize: 20 }}>
                                    ชื่อผู้ใช้ : Not
                                </Text>
                                <Text style={{ fontSize: 20 }}>
                                    จำนวนคน : 2 คน จำนวนเด็ก : 1 คน
                                </Text>
                                <Text style={{ fontSize: 20 }}>
                                    วัน : Day = Wed Mar 15 2023
                                </Text>
                                <Text style={{ fontSize: 20 }}>
                                    เวลา :Time 06.34.29 PM
                                </Text>
                            </View>

                        </View>

                    </Animatable.View>



                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

export default HomeScreenOwner