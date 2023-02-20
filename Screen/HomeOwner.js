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
    const todoRef = firebase.firestore().collection('Karumine');
    const [addData, setAddData] = useState('');

    // add new field
    const addField = () => {
        //Check if we have new field data
        if (addData && addData.length > 0) {
            // get the timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                NameFood: addData,
                createdAt: timestamp
            };
            todoRef
                .add(data)
                .then(() => {
                    // release the field state
                    setAddData('');
                    //release Keyboard
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    // show an alert in case of error
                    alert(error);
                })
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <StatusBar backgroundColor='#FF0000' barStyle="light-content" />

                <Animatable.View
                    animation="fadeInUpBig"

                >
                    <View style={{ alignItems: 'flex-end' }}>


                        <TouchableOpacity onPress={() => navigation.navigate('AccountOwnerScreen')}>
                            <MaterialIcons name="account-circle" size={60} color="red" />
                        </TouchableOpacity>
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

                    <TouchableOpacity style={styles.button} onPress={addField}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default HomeScreenOwner