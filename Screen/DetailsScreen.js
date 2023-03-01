import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Button, FlatList, Modal, TextInput, Dimensions, TouchableOpacity, TouchableHighlight, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'
// const PrimaryButton = ({ title, onPress = () => { } }) => {
//     return (
//         <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
//             <View style={styles.btnContainer}>
//                 <Text style={styles.title}>{title}</Text>
//             </View>
//         </TouchableOpacity>
//     );
// };
// const SecondaryButton = ({ title, onPress = () => { } }) => {
//     return (
//         <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
//             <View style={{ ...styles.btnContainer, backgroundColor: COLOR.white }}>
//                 <Text style={{ ...styles.title, color: COLOR.primary }}>{title}</Text>
//             </View>
//         </TouchableOpacity>
//     );
// };


const COLOR = {
    white: '#FFF',
    dark: '#000',
    primary: '#FF0000',
    secondary: '#fedac5',
    light: '#E5E5E5',
    grey: '#908e8c',
};

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 40;

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLOR.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    iconContainer: {
        backgroundColor: COLOR.white,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    detailsText: {
        marginTop: 10,
        marginBottom: 30,
        lineHeight: 22,
        fontSize: 20,
        color: COLOR.white,
    },
    title: {
        color: COLOR.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    btnContainer: {
        backgroundColor: COLOR.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        marginTop: 50,
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
    modalBackGround: {
        flex: 1,
        backgroundColor: "rgb(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "80%",
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    tabmodal: {
        width: '80%',
        height: "80%",
        zIndex: 999,
        backgroundColor: COLOR.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    text: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        width: '80%',
    },

    // Style for iOS ONLY...
    datePicker: {
        width: 200,
        height: 50,
        display: 'flex',

    },
});

const foods = [
    {
        id: '1',
        name: 'น้ำพริกหนุ่ม ผักต้ม และไข่ต้มยางมะตูม',
        //ingredients: 'เมนูน้ำพริกหนุ่ม ผักต้ม และไข่ต้มยางมะตูมจานนี้ได้ทั้งโปรตีนจากไข่ วิตามินและสารอาหารต่างๆ จากผักต้มหลากชนิด ส่วนน้ำพริกหนุ่มปรุงน้อย เน้นรสชาติจากธรรมชาติของวัตถุดิบที่ดีต่อร่างกาย',
        price: '10 บาท',
        image: require('../assets/food1.jpg'),
    },
    {
        id: '2',
        name: 'สุกี้แห้งทะเล',
        //ingredients: 'Cheese Pizza',
        price: '20 บาท',
        image: require('../assets/food2.jpg'),
    },
    {
        id: '3',
        name: 'ผัดผักรวมมิตรกุ้ง',
        //ingredients: 'Fried Chicken',
        price: '30 บาท',
        image: require('../assets/food3.jpg'),
    },
    {
        id: '4',
        name: 'ข้าวผัดไข่ ซาบะย่าง และผักสลัด',
        //ingredients: 'Salmon Meat',
        price: '40 บาท',
        image: require('../assets/food4.jpg'),
    },
    {
        id: '5',
        name: 'ผัดถั่วงอกใส่เต้าหู้',
        //ingredients: 'Salmon Meat',
        price: '50 บาท',
        image: require('../assets/food5.jpg'),
    },
    {
        id: '6',
        name: 'เมี่ยงปลาดอลลี่ + น้ำจิ้มซีฟู้ด',
        //ingredients: 'Salmon Meat',
        price: '60 บาท',
        image: require('../assets/food6.jpg'),
    },
];

const Card = ({ food }) => {
    return (
        <TouchableHighlight
            underlayColor={COLOR.white}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('DetailsScreen', food)}>
            <View style={styles.card}>
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Image source={food.image} style={{ height: 150, width: 150 }} />
                </View>
                <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{food.name}</Text>
                </View>
                {/* <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 14, color: COLOR.primary, marginTop: 2}}>
                        {food.price}
                    </Text>
                </View> */}
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

const selectDay = [
    { key: '1', value: 'เลือกจำนวนคน', disabled: true },
    { key: '2', value: '1 คน' },
    { key: '3', value: '2 คน' },
    { key: '4', value: '3 คน' },
    { key: '5', value: '4 คน' },
    { key: '6', value: '5 คน' },
    { key: '7', value: '6 คน' },
    { key: '7', value: '7 คน' },
]

const selectTime = [
    { key: '1', value: 'เลือกจำนวนคน', disabled: true },
    { key: '2', value: '1 คน' },
    { key: '3', value: '2 คน' },
    { key: '4', value: '3 คน' },
    { key: '5', value: '4 คน' },
    { key: '6', value: '5 คน' },
    { key: '7', value: '6 คน' },
    { key: '8', value: '7 คน' },
]

const DetailsScreen = ({ navigation, route }) => {
    const item = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [ShowStartTime, setShowStartTime] = useState(false);
    const [IsSubject, setIsSubject] = useState("");
    const [Day, setDay] = useState("");
    const [selectTimeLate, SetSelectTime] = useState("");
    const [datePicker, setDatePicker] = useState(false);

    const [date, setDate] = useState(new Date());

    const [timePicker, setTimePicker] = useState(false);

    const [time, setTime] = useState(new Date(Date.now()));

    function showDatePicker() {
        setDatePicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };

    const openmodal = () => {
        return (
            <>
                <StatusBar barStyle='dark-content' />
                <Animatable.View
                    animation="fadeInUpBig"
                >
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>


                            <TouchableOpacity onPress={() => setModalVisible(false)}
                                style={{
                                    height: "100%",
                                    backgroundColor: 'rgba(83, 88, 97, 0.7)',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>


                                <TouchableOpacity activeOpacity={1} style={styles.tabmodal}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginLeft: 20,
                                        marginTop: 20,

                                    }}>
                                    </View>

                                    <ScrollView>
                                        <View style={{ marginTop: 20, paddingHorizontal: 40 }}>
                                            <Text style={{ color: COLOR.black, fontSize: 15, marginBottom: 10 }}>
                                                ชื่อคนจอง
                                            </Text>
                                            <View style={{ height: 50, backgroundColor: 'white', borderRadius: 25 }}>
                                                <TextInput
                                                    style={{ fontSize: 15, flex: 1, marginLeft: 20 }}
                                                    onChangeText={(text) => setIsSubject(text)}
                                                >
                                                </TextInput>
                                            </View>
                                        </View>

                                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ alignItems: 'center' }}>
                                                <Text style={{ color: COLOR.black, fontSize: 15 }}>
                                                    จำนวนคน
                                                </Text>

                                                <View style={{ flex: 1, marginTop: 10 }}>
                                                    <SelectList
                                                        data={selectDay}
                                                        setSelected={setDay}
                                                        boxStyles={{ alignItems: "center", backgroundColor: 'white' }}
                                                        dropdownStyles={{ marginRight: 30, width: "100%", backgroundColor: 'white' }}
                                                        inputStyles={[styles.h4, { alignItems: 'center', fontSize: 15, height: 40, width: 80, paddingVertical: 10, paddingHorizontal: 10 }]}
                                                        placeholder="⠀"
                                                        style={{ width: "100%" }}
                                                    // maxHeight={100}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'center', }}>
                                                <Text style={{ color: COLOR.black, fontSize: 15 }}>
                                                    จำนวนเด็ก
                                                </Text>
                                                <View style={{ flex: 1, marginTop: 10 }}>
                                                    <SelectList
                                                        data={selectTime}
                                                        setSelected={SetSelectTime}
                                                        boxStyles={[styles.boxInputCreateRoom, { alignItems: "center", backgroundColor: 'white' }]}
                                                        dropdownStyles={{ marginRight: 30, width: "100%", backgroundColor: 'white' }}
                                                        inputStyles={[styles.h4, { alignItems: 'center', fontSize: 15, height: 40, width: 80, paddingVertical: 10, paddingHorizontal: 10, }]}
                                                        placeholder="⠀"
                                                        style={{ width: "100%" }}
                                                    // maxHeight={100}
                                                    />
                                                </View>
                                            </View>

                                        </View>

                                        <View style={{ backgroundColor: COLOR.primary }}>
                                            <View style={{ marginTop: 9, marginTop: 25, marginHorizontal: 20, alignItems: 'center' }}>
                                                <Text style={[styles.h4, { color: COLOR.black, fontSize: 15 }]}>
                                                    วันที่จอง
                                                </Text>
                                            </View>
                                            <View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TouchableOpacity onPress={showDatePicker}>
                                                        <Text style={styles.text}>
                                                            Date = {date.toDateString()}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ marginLeft: 50 }}>
                                                    {datePicker && (
                                                        <DateTimePicker
                                                            value={date}
                                                            mode={'date'}
                                                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                                            is24Hour={true}
                                                            onChange={onDateSelected}
                                                            style={[styles.datePicker]}
                                                        />
                                                    )}
                                                </View>
                                                <View style={{ marginTop: 9, marginTop: 25, marginHorizontal: 20, alignItems: 'center' }}>
                                                    <Text style={{ color: COLOR.black, fontSize: 15 }}>
                                                        เวลาที่จอง
                                                    </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <TouchableOpacity onPress={showTimePicker}>
                                                        <Text style={styles.text}>
                                                            Time = {time.toLocaleTimeString('en-US')}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ marginLeft: 10 }}>
                                                    {timePicker && (
                                                        <DateTimePicker
                                                            value={time}
                                                            mode={'time'}
                                                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                                            is24Hour={true}
                                                            onChange={onTimeSelected}
                                                            style={[styles.datePicker, { flex: 1 }]}
                                                        />
                                                    )}
                                                </View>
                                            </View>

                                        </View>

                                        <View style={{ marginTop: 40, marginBottom: 40, width: '80%', marginHorizontal: 35 }}>
                                            <TouchableOpacity activeOpacity={0.9}>
                                                <View style={{ ...styles.btnContainer, backgroundColor: COLOR.white }}>
                                                    <Text style={{ ...styles.title, color: COLOR.primary }}>ยืนยันการจอง</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </ScrollView>
                                </TouchableOpacity>
                            </TouchableOpacity>


                        </Modal>

                    </View>
                </Animatable.View>
            </>
        );
    };
    return (
        <>
            <Animatable.View
                animation="fadeInUpBig"
            >
                <SafeAreaView style={{ backgroundColor: COLOR.white }}>
                    <View style={styles.header}>
                        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 280,
                            }}>
                            <Image source={item.image} style={{ height: "100%", width: "100%" }} />
                        </View>
                        {openmodal()}
                        <View style={styles.details}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{ fontSize: 25, fontWeight: 'bold', color: COLOR.white }}>
                                    {item.name}
                                </Text>
                                <View style={styles.iconContainer}>
                                    <Icon name="favorite-border" color={COLOR.primary} size={25} />
                                </View>
                            </View>
                            <Text style={styles.detailsText}>
                                เมื่อพูดถึง “อาหารเพื่อสุขภาพ” หลายคนอาจนึกถึงเมนูจืดชืด ไร้รสชาติ ไม่ชวนเจริญอาหาร
                                แต่ถ้าได้เห็นเมนูเหล่านี้รับรองว่าจะต้องเปลี่ยนความคิด
                                เพราะแต่ละจานมาพร้อมทั้งความอร่อยและประโยชน์เต็มมื้อ
                                โดยโว้กบิวตี้เอามาฝากกันถึง 30 เมนูดีต่อใจ ดีต่อร่างกาย
                                เป็นไอเดียให้ทุกคนได้อิ่มอร่อยกับอาหารเพื่อสุขภาพวันละอย่างไม่ซ้ำกันตลอดทั้งเดือน
                            </Text>
                            <FlatList
                                showsVerticalScrollIndicator={true}
                                numColumns={2}
                                data={foods}
                                renderItem={({ item }) => <Card food={item} />}
                            />

                            <View style={{ marginTop: 40, marginBottom: 40 }}>

                                <TouchableOpacity activeOpacity={0.9} onPress={() => setModalVisible(true)}>
                                    <View style={{ ...styles.btnContainer, backgroundColor: COLOR.white }}>
                                        <Text style={{ ...styles.title, color: COLOR.primary }}> จอง </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Animatable.View>
        </>
    );
};
export default DetailsScreen;