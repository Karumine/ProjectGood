import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, StatusBar, ImageBackground, StyleSheet, TextInput, Dimensions, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {firebase} from './components/SignUp'
import { doc, getDoc } from "firebase/firestore";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    image: {
        flex: 1,
        padding: 24,
    },
    text: {
        paddingHorizontal: 50,
        marginTop: 16,
        paddingVertical: 10,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 40,
        backgroundColor: "#CC00FF",
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    text1: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },
    text2: {
        marginTop: 20,
        textAlign: "right",
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    text_header: {
        color: '#CC00FF',
        fontWeight: 'bold',
        fontSize: 30
    }

});


export default function FirstScreen({ navigation }) {

//     const db=firebase.firestore()
//     const dataRestuarant= async()=>{
//         const docRef = doc(db, "Restuarant", "Loading");
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           console.log("Document data:", docSnap.data());
//         } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//         }
// }
    
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

    const gotoLogin = () => {
        navigation.navigate("SignIn")
    }
  
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('./../assets/bbb.png')}
                    style={styles.logo}
                    resizeMode="center"
                />
            </View>
            <Animatable.View
            style={styles.footer}>
                <Text style={styles.text_header}>WELCOME</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={() => gotoLogin()}>
                        <Text style={styles.text}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            {/* <ImageBackground source={BackGround} resizeMode="cover" style={styles.image}>
                <View style={{ alignItems: "center" }}>
                    <MaterialIcons name="account-circle" color="black" size={200} />
                </View>
                <View> */}
            {/* <View style={{ alignItems: "flex-start" }}>

                    </View> */}


            {/* <TextInput style={[styles.text1, { width: "100%", paddingVertical: 15, borderRadius: 100, borderWidth: 4 }]}
                        placeholder="ID"
                        onChangeText={(text) => setID(text)}
                        maxLength={20}
                    >
                    </TextInput>


                </View>

                <View>
                    <View style={{ alignItems: "flex-start" }}>

                    </View>

                    <TextInput secureTextEntry={true} style={[styles.text1, { width: "100%", paddingVertical: 15, borderRadius: 100, borderWidth: 4 }]}
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        maxLength={14}
                    >
                    </TextInput>
                </View>

                <View>
                    <TouchableOpacity onPress={() => gotoForgotPassword()}>
                        <Text style={styles.text2}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={() => gotoAllScreen()}>
                        <Text style={styles.text}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={() => gotoRegister()}>
                        <Text style={{ fontSize: 20, marginTop: 10, color: "#FFFFFF", }}>Don't have on account ?
                            <Text style={styles.text1}>Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground > */}

            </View >
            );
}