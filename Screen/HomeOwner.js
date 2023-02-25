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
        flexDirection: 'row',
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
                    <View>
                        <Image source={require('../assets/Res1.jpg')} style={{
                            height: '50%',
                            width: '90%',
                            marginTop: 20,
                        }} />
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='ชื่อร้านอาหาร'
                            placeholderTextColor='#aaaaaa'
                            onChangeText={(NameFood) => setAddData(NameFood)}
                            value={addData}
                            multiline={true}
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                        />

                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => addField()}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default HomeScreenOwner