import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableWithoutFeedback, Keyboard, Dimensions, SafeAreaView, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { firebase } from './components/SignUp';
import { useFocusEffect } from '@react-navigation/native';
import banner from '../../ProjectGood/assets/banner.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
const COLOR = {
    white: '#FFF',
    dark: '#000',
    primary: '#FF0000',
    secondary: '#fedac5',
    light: '#E5E5E5',
    grey: '#908e8c',
};

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
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLOR.light,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sortBth: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: COLOR.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesListContainer: {
        paddingVertical:30,
        alignItems:'center',
        paddingHorizontal:20,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
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

export default function HomeScreen({ navigation }) {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const ListCategaries = () => {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contextContainerStyle={styles.categoriesListContainer}>
                    
                </ScrollView>
        );
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.white }}>
                <StatusBar backgroundColor='#FF0000' barStyle="light-content" />
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>

                    <View style={styles.header}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 28 }}>Hello,</Text>
                                <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>
                                    Karumine
                                </Text>
                            </View>
                            <Text style={{ marginTop: 5, fontSize: 22, color: COLOR.grey }}>
                                What do you want today
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('AccountUserScreen')}>
                            <MaterialIcons name="account-circle" size={60} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 40,
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                    }}>
                        <View style={styles.inputContainer}>
                            <Icon name="search" size={28} />
                            <TextInput
                                style={{ flex: 1, fontSize: 18 }}
                                placeholder="Search for Restaurant"
                            />
                        </View>
                        <View style={styles.sortBth}>
                            <Icon name="tune" size={28} color={COLOR.white} />
                        </View>
                    </View>

                </Animatable.View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}
