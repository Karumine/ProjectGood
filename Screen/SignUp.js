import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, ImageBackground, StyleSheet, TextInput, Dimensions, Image, Platfrom, SecureTextEntry, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, FontAwesome, AntDesign, MeterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
//import Feather from 'react-native-vector-icons/Feather';
import AllScreen from "./AllScreen";
import LoginScreen from "./SignIn";
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from './components/SignUp'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

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
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
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
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
export default function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const gotoSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
            console.log(credentials);
            console.log(credentials.user);
        }).catch((err) => {
            console.error(err);
        })

    }
    const Navigation = useNavigation()

    const { height } = Dimensions.get("screen");
    const height_logo = height * 0.28;
    const gotoAllScreen = () => {
        navigation.navigate("AllScreen")
    }

    const gotoRegister = () => {
        navigation.navigate("Register")
    }

    const gotoForgotPassword = () => {
        navigation.navigate("Forgot Password")
    }


    const [data, setData] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.lenght !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FF0000' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(text) => setEmail(text)}
                        maxLength={30}
                    />

                </View>

                <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(text) => setPassword(text)}
                        maxLength={14}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <LinearGradient colors={['#FF0066', '#FF0000']} style={styles.textSignin}>
                        <TouchableOpacity onPress={() => gotoSignUp()}
                            style={[styles.textSignin, {}]}>
                            <Text style={[styles.textSign, {
                                color: '#fff',
                            }]}>Register</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TouchableOpacity onPress={() => navigation.goBack()}
                        style={[styles.textSignin, {
                            borderColor: '#FF0000',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#FF0000'
                        }]}>Sign In</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
    );
}