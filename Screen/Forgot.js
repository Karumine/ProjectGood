import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, ImageBackground, StyleSheet, TextInput, Dimensions, Image, Platfrom, SecureTextEntry, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, FontAwesome, AntDesign, MeterialCommunityIcons, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
//import Feather from 'react-native-vector-icons/Feather';
import AllScreen from "./AllScreen";
import { LinearGradient } from 'expo-linear-gradient';
//import { AutoContext } from "./component/context";

//const { signIn } = React.useContext(AutoContext);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
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
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
export default function ForgotScreen({ navigation }) {
    const Navigation = useNavigation()
    const [addID, setID] = useState("")
    const [addPassword, setPassword] = useState("")
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

    // console.log("setID=", addID);
    // console.log("setPassword=", addPassword);

    const [data, setData] = React.useState({
        email: '',
        addPassword: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
            console.log("กี่ตัว : ",val.lenght);
        if (val.lenght != 0 ) {
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

    console.log("data",data.check_textInputChange);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
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
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) =>{ textInputChange(val)}}
                    />
                    {data.check_textInputChange  ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                        </Animatable.View>
                        : null}
                </View>

                <View style={styles.button}>
                    <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.textSignin}>
                        <TouchableOpacity onPress={() => navigation.navigate('AllScreen')}>
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Submit</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                </View>
            </Animatable.View>
        </View>
    );
}