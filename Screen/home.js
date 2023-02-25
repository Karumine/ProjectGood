import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Dimensions, SafeAreaView, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { firebase } from './components/SignUp';
import { useFocusEffect } from '@react-navigation/native';
import banner from '../../ProjectGood/assets/banner.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';


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

const categories = [
    { id: '1', name: 'สุขภาพ', image: require('../assets/sandwich-burger.png') },
    { id: '2', name: 'บุฟเฟ่ต์', image: require('../assets/sandwich-burger.png') },
    { id: '3', name: 'อาหารจีน', image: require('../assets/sandwich-burger.png') },
    { id: '4', name: 'อาหารไทย', image: require('../assets/sandwich-burger.png') },
    { id: '5', name: 'สเต็ก', image: require('../assets/sandwich-burger.png') },


];

const foods = [
    {
        id: '1',
        name: 'Vogue Beauty',
        city: 'นนทบุรี',
        price: 'สถานะ ว่าง',
        image: require('../assets/Res1.jpg'),
    },
    {
        id: '2',
        name: 'ร้านชายสอง',
        city: 'Cheese Pizza',
        price: 'สถานะ ว่าง',
        image: require('../assets/Res2.jpg'),
    },
    {
        id: '3',
        name: 'ร้านชายสาม',
        city: 'Fried Chicken',
        price1: 'สถานะ ไม่ว่าง',
        image: require('../assets/Res3.jpg'),
    },
    {
        id: '4',
        name: 'ร้านชายสี่',
        city: 'Salmon Meat',
        price: 'สถานะ ว่าง',
        image: require('../assets/Res4.jpg'),
    },
];



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
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    categoryBtn: {
        height: 45,
        width: 140,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLOR.white,
        borderRadius: 30,
    },
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,

        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLOR.secondary,
    },
    addtoCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLOR.primary,
        justifyContent: 'center',
        alignItems: 'center',
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

    const ListCategories = () => {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesListContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setSelectedCategoryIndex(index)}>
                        <View
                            style={{
                                backgroundColor:
                                    selectedCategoryIndex == index
                                        ? COLOR.primary
                                        : COLOR.secondary,
                                ...styles.categoryBtn,
                            }}>
                            <View style={styles.categoryBtnImgCon}>
                                <Image
                                    source={category.image}
                                    style={{ height: 34, width: 34, resizeMode: 'cover' }}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    marginLeft: 10,
                                    color:
                                        selectedCategoryIndex == index
                                            ? COLOR.white
                                            : COLOR.primary,
                                }}>
                                {category.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };

    const Card = ({ restaurant }) => {
        return (
            <>
            <StatusBar barStyle='dark-content' />
                <TouchableHighlight
                    underlayColor={COLOR.white}
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('DetailsScreen', restaurant)}>

                    <View style={styles.card}>
                        <View style={{ alignItems: 'center', }}>
                            <Image source={restaurant.image} style={{ height: 120, width: '100%' }} />
                        </View>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{restaurant.name}</Text>
                            <Text style={{ fontSize: 14, color: COLOR.grey, marginTop: 2 }}>
                                {restaurant.city}
                            </Text>
                        </View>
                        <View
                            style={{
                                marginTop: 10,
                                marginHorizontal: 20,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>

                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "green" }}>
                                {restaurant.price}

                            </Text>

                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "red", justifyContent: 'flex-start' }}>
                                {restaurant.price1}
                            </Text>

                        </View>
                    </View>
                </TouchableHighlight>
            </>
        );
    };

    return (
        <>
            <StatusBar barStyle='dark-content' />
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
                        <View>
                            <ListCategories />
                        </View>

                        <Text style={{
                            marginBottom: 30,
                            fontSize: 22,
                            color: COLOR.back,
                            paddingHorizontal: 20,
                        }}>
                            Restaurant
                        </Text>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={foods}
                            renderItem={({ item }) => <Card restaurant={item} />}
                        />
                    </Animatable.View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </>
    );
}
