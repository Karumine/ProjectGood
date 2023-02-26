import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableHighlight, Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mock from './constants/Mock';
import CategoryMenuItem from './components/CategoryMenuItem';
import { COLOR } from './constants/color';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { RestaurantMediumCard } from './components';
import { SafeAreaView } from 'react-native-safe-area-context';


const sortStyle = isActive =>
    isActive
        ? styles.sortListItem
        : { ...styles.sortListItem, boederBottomColor: COLOR.white }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLOR.white,
        borderRadius: 10,
    },
    backgroundCurvedContainer: {
        backgroundColor: COLOR.primary,
        height: 2000,
        position: 'absolute',
        top: -1 * (2000 - 230),
        width: 2000,
        borderRadius: 2000,
        alignSelf: 'center',
        zIndex: -1,
    },
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,

    },
    header: {
        justifyContent: 'space-evenly',
    },
    headerBottom: {
        justifyContent: 'space-evenly',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    locationText: {
        color: COLOR.back,
        marginLeft: 5,
        fontSize: 18,
        lineHeight: 13 * 1.4,

    },
    selectedLocationText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 19,
        lineHeight: 14 * 1.4,
    },
    alertBadge: {
        borderRadius: 32,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 18,
        width: 18,
        position: 'absolute',
        right: -2,
        top: -10,
    },
    alertBadgeText: {
        color: 'black',
        fontSize: 10,
        lineHeight: 10 * 1.4,

    },
    searchContainer: {

        height: 45,
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    listContainer: {
        paddingVertical: 5,
        zIndex: -5,
    },
    horizontalListContainer: {
        marginTop: 30,
    },
    listHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 5,
    },
    listHeaderTitle: {
        color: COLOR.back,
        fontSize: 18,
        lineHeight: 16 * 1.4,

    },
    listHeaderSubtitle: {
        color: COLOR.primary,
        fontSize: 13,
        lineHeight: 13 * 1.4,

    },
    sortBth: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: COLOR.white,
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
        marginTop: 20,
        height: 150,
        width: cardWidth,
        marginHorizontal: 20,
        marginBottom: 20,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: COLOR.primary,
    },

    titleText: {
        marginLeft: 8,
        fontSize: 15,
        lineHeight: 15 * 1.4,

        color: COLOR.back
    },
    tagText: {
        marginLeft: 8,
        fontSize: 11,
        lineHeight: 11 * 1.4,

        color: COLOR.grey,
        marginBottom: 5,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 6,
        justifyContent: 'space-between',
    },
    rowAndCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeAndDistanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: COLOR.primary,
        borderRadius: 12,
        marginHorizontal: 3,
    },
    timeAndDistanceText: {
        fontSize: 10,
        lineHeight: 10 * 1.4,

        color: COLOR.primary,
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 10,
        lineHeight: 10 * 1.4,

        color: COLOR.black,
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
    posterStyle: {
        width: 1980 * 0.15,
        height: 1080 * 0.15,
        borderRadius: 10,
        margin: 5,
    },
    sortListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: COLOR.white,
        marginTop: 8,
        elevation: 1,
    },
    sortListItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLOR.primary,
        height: 40,
    },
    sortListItemText: {
        color: COLOR.primary,
        fontSize: 13,
        lineHeight: 13 * 1.4,

    },
});

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const DeliveryScreen = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState();
    const [activeSortItem, setActiveSortItem] = useState('recent');

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.backgroundCurvedContainer} />
                    <View style={styles.header}>
                        <View style={styles.locationContainer}>
                            <Ionicons
                                name="location-outline"
                                size={28} color="black"
                            />
                            <Text style={styles.locationText}>Deliverd to</Text>
                            <Text style={styles.selectedLocationText}>Home</Text>
                            <MaterialIcons
                                name="keyboard-arrow-down"
                                size={28} color="white"
                            />
                            <Feather
                                name="bell"
                                size={28}
                                color="black"
                                style={{ position: 'absolute', right: 0 }}
                            />
                            <View style={styles.alertBadge}>
                                <Text style={styles.alertBadgeText}>12</Text>
                            </View>
                        </View>
                        <View style={styles.searchContainer}>
                            <View style={styles.inputContainer}>
                                <Icon
                                    name="search"
                                    size={28}
                                    color="red"
                                />
                                <TextInput
                                    style={{
                                        flex: 1,
                                        fontSize: 18,
                                        paddingHorizontal: 10,
                                    }}
                                    placeholder="Search for Restaurant"
                                />
                            </View>
                            <View style={styles.sortBth}>
                                <Icon
                                    name="tune"
                                    size={28}
                                    color={COLOR.primary}
                                />
                            </View>
                        </View>
                        <View style={styles.categoriesContainer}>
                            {Mock.CATEGORIES.map(({ name, logo }) => (
                                <CategoryMenuItem
                                    key={name}
                                    name={name}
                                    logo={logo}
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            ))}
                        </View>
                    </View>
                    <ScrollView style={styles.listContainer}>
                        <View style={styles.horizontalListContainer}>
                            <View style={styles.listHeader}>
                                <Text style={styles.listHeaderTitle}>Top Rated</Text>
                                <Text style={styles.listHeaderSubtitle}>See All</Text>
                            </View>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                numColumns={2}
                                data={foods}
                                renderItem={({ item }) => <RestaurantCard restaurant={item} />}
                            />
                        </View>
                        <View style={styles.sortListContainer}>
                            <TouchableOpacity
                                style={sortStyle(activeSortItem === 'recent')}
                                activeOpacity={0.5}
                                onPress={() => setActiveSortItem('recent')}>
                                <Text style={styles.sortListItemText}>Recent</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={sortStyle(activeSortItem === 'favorite')}
                                activeOpacity={0.5}
                                onPress={() => setActiveSortItem('favorite')}>
                                <Text style={styles.sortListItemText}>Favorite</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={sortStyle(activeSortItem === 'rating')}
                                activeOpacity={0.5}
                                onPress={() => setActiveSortItem('rating')}>
                                <Text style={styles.sortListItemText}>Rating</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={sortStyle(activeSortItem === 'popular')}
                                activeOpacity={0.5}
                                onPress={() => setActiveSortItem('popular')}>
                                <Text style={styles.sortListItemText}>Popular</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={sortStyle(activeSortItem === 'trending')}
                                activeOpacity={0.5}
                                onPress={() => setActiveSortItem('trending')}>
                                <Text style={styles.sortListItemText}>Trending</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: COLOR.white, flex: 1 }}>
                            <FlatList
                                showsVerticalScrollIndicator={true}

                                data={foodss}
                                renderItem={({ item }) => <Card food={item} />}
                            />
                        </View>
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const Card = ({ food }) => {
    return (
        <TouchableHighlight
            underlayColor={COLOR.white}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('DetailsScreen', food)}>
            <View style={styles.card}>
                <View style={{ marginBottom: 10 }}>
                    <Image source={food.image} style={{ height: 130, width: 130, marginLeft: 10, marginTop: 10, borderRadius: 65 }} />
                </View>
                <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>{food.name}</Text>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 14, color: COLOR.black, marginTop: 2 }}>
                            {food.price}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>

                </View>
            </View>
        </TouchableHighlight>
    );
};

const foods = [
    {
        id: '1',
        name: 'Vogue Beauty',
        city: 'นนทบุรี',
        price: '10$',
        image: require('../assets/food5.jpg'),
    },
    {
        id: '2',
        name: 'Vogue Beauty',
        city: 'นนทบุรี',
        price: '5$',
        image: require('../assets/food6.jpg'),
    },

];

const foodss = [
    {
        id: '1',
        name: 'Vogue Beauty',
        city: 'นนทบุรี',
        price: '10$',
        image: require('../assets/food7.jpg'),
    },
    {
        id: '2',
        name: 'Vogue Beauty',
        city: 'นนทบุรี',
        price: '5$',
        image: require('../assets/food3.jpg'),
    },

];



const RestaurantCard = ({ restaurant, name }) => {
    return (
        <>
            <TouchableOpacity style={styles.container1}>
                <Image source={restaurant.image} style={styles.posterStyle}
                />

            </TouchableOpacity>

        </>
    );
};

export default DeliveryScreen;