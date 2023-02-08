import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions, TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { firebase } from './components/SignUp'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import SignInScreen from './SignIn';


const Tab = createMaterialBottomTabNavigator();
const { height } = Dimensions.get("screen");
const height_logo = height * 1;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        color: '#000',
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

export default function AccountScreen({ navigation }) {
    const Navigation = useNavigation()
    const gotoAllScreen = () => {
        navigation.navigate("AllScreen")
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FF0000' barStyle="light-content" />
            <View style={styles.header}>
                <Text>เลือก Rule</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('AllScreenOwner')}
                        style={[styles.textSignin,]}>
                        <LinearGradient colors={['#FF0066', '#FF0000']} style={styles.textSignin}>

                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>เจ้าของร้าน</Text>

                        </LinearGradient>
                    </TouchableOpacity>

                </View>
                
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('AllScreenUser')}
                        style={[styles.textSignin,]}>
                        <LinearGradient colors={['#FF0066', '#FF0000']} style={styles.textSignin}>

                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>ผู้ใช้</Text>

                        </LinearGradient>
                    </TouchableOpacity>

                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => firebase.auth().signOut()}
                        style={[styles.textSignin,]}>
                        <LinearGradient colors={['#FF0066', '#FF0000']} style={styles.textSignin}>

                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Log out</Text>

                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
    );
}
