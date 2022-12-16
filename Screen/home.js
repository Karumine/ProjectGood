import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const { height } = Dimensions.get("screen");
const height_logo = height * 0.53;




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
        flex: 5,
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
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="15000"
                    source={require('./../assets/aaa.jpg')}
                    //style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                
                
                <View style={styles.action}>
                    <FontAwesome
                        name="search"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Search Restaurants"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />

                </View>
            </Animatable.View>
        </View>
    );
}
