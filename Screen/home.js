import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { firebase } from './components/SignUp'
import { useFocusEffect } from '@react-navigation/native';
import banner from '../../ProjectGood/assets/banner.jpg'


const Tab = createMaterialBottomTabNavigator();
const { height } = Dimensions.get("screen");
const height_logo = height * 0.6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000'
    },

    tinyLogo: {
        width: 400,
        height: 100,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingBottom: 50,

        borderTopRightRadius: 30,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal:30
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

});

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
console.log('เท่าไหร่', WIDTH);

const App = () => (
    <RainbowBackground style={{ flex: 1 }} />
  );

export default function HomeScreen() {
    return (
        
        <View style={styles.container}>
           
            <StatusBar backgroundColor='#FF0000' barStyle="light-content" />

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <View style={{alignItems:'flex-end'}}>
                  
                
                <TouchableOpacity>
                    <MaterialIcons name="account-circle" size={60} color="red" />
                </TouchableOpacity>
 </View> 



                {/* <Image
                    style={{  margin:20,borderWidth: 1, borderRadius: 25,width:560, height:150 }}
                    source={banner}
                /> */}



                <Text style={{ marginTop: 60, fontSize: 30 }}>Restaurant</Text>

                <View style={{ flexDirection: 'row' }}>
                    <ScrollView
                        horizontal={true}
                    >
                        <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#FF0000', marginVertical: 50, padding: 20, marginRight: 40, borderRadius: 100 }}>
                            <MaterialCommunityIcons name="table-chair" size={40} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#FF0000', marginVertical: 50, marginRight: 40, padding: 20, borderRadius: 100 }}>
                            <MaterialIcons name="delivery-dining" size={40} color="black" />
                        </TouchableOpacity>
                    </ScrollView>
                </View>


            </Animatable.View>
            
        </View>
        
    );
}
