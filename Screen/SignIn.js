import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity, View, ImageBackground, StyleSheet, TextInput, Dimensions, Image, Platfrom, SecureTextEntry, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, FontAwesome, AntDesign, MeterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
//import Feather from 'react-native-vector-icons/Feather';
import AllScreen from "./AllScreen";
import { LinearGradient } from 'expo-linear-gradient';
//import { AutoContext } from "./component/context";
import { firebase } from './components/SignUp';
//const { signIn } = React.useContext(AutoContext);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#FF0000',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
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
    }
});
export default function SignInScreen({ navigation }) {
    const Navigation = useNavigation()
    const { height } = Dimensions.get("screen");
    const height_logo = height * 0.28;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const gotologin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log(error);
        }
    }


    const [data, setData] = React.useState({

        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        console.log("กี่ตัว : ", val.lenght);
        if (val.lenght != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    console.log("data", data.check_textInputChange);

    return (
        <>
            <StatusBar backgroundColor='#FF0000' barStyle="light-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Welcome!</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer}
                    >
                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#FF0000"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setEmail(val)}
                            />
                            {data.check_textInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}
                                    />
                                </Animatable.View>
                                : null}
                        </View>

                        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="#FF0000"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => setPassword(val)}
                            />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="red"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="red"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Fotgot')}>
                            <Text style={{ color: '#FF0000', marginTop: 15 }}>Forgot password</Text>
                        </TouchableOpacity>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => gotologin()}
                                style={[styles.textSignin,]}>
                                <LinearGradient colors={['#FF0066', '#FF0000']} style={styles.textSignin}>

                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]}>Sign In</Text>

                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
                                style={[styles.textSignin, {
                                    borderColor: '#FF0000',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#FF0000'
                                }]}>Register</Text>
                            </TouchableOpacity>

                        </View>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}
