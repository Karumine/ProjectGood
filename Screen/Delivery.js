import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fonts } from './constants/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mock from './constants/Mock';
import CategoryMenuItem from './components/CategoryMenuItem';
import { COLOR } from './constants/color';
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    selectedLocationText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 19,
        lineHeight: 14 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,

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
        fontFamily: Fonts.POPPINS_BOLD,
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

const DeliveryScreen = () => {
    const [activeCategory, setActiveCategory] = useState()
    return (
        <>
            <StatusBar barStyle='dark-content' />
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
            </View>

        </>
    );
};

export default DeliveryScreen;