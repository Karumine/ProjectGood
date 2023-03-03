import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    btnContainer: {
        backgroundColor: COLOR.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

const success = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.header}>
                        <View style={{alignItems:'center',}}>
                            <Image source={require('../assets/Images/success.png')}
                                style={{ height: 200, width: 200 }}
                            />
                            <Text style={{fontSize:20,marginTop:20}}>ขอขอบคุณที่ท่านไว้วางใจเลือกใช้บริการร้านเรา Thank you</Text>
                        </View>
                        <View>
                            <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center',color:'white',paddingHorizontal:20 }}>
                            หมายเหตุ : ทางร้านเราขอให้คุณลูกค้ามาก่อน 30 นาที เพื่อเป็นการยืนยันการจอง
                                หลัง 30 นาที ทางร้านขอยกเลิกการจอง Thank you
                            </Text>
                            <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center', color: 'white' }}>

                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
                            activeOpacity={0.5}>
                            <View style={{ alignItems: 'center', marginTop: 50 }}>
                                <Text style={{ fontSize: 30, backgroundColor: 'green', }}> หน้าหลัก </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </>
    );
};

export default success;