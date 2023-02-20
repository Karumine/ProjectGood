import React from "react";
import {SafeAreaView, StyleSheet,TouchableOpacity, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';



const PrimaryButton = ({title, onPress = () => {}}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.btnContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const SecondaryButton = ({title, onPress = () => {}}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={{...styles.btnContainer, backgroundColor: COLOR.white}}>
          <Text style={{...styles.title, color: COLOR.primary}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
 

const COLOR = {
    white: '#FFF',
    dark: '#000',
    primary: '#FF0000',
    secondary: '#fedac5',
    light: '#E5E5E5',
    grey: '#908e8c',
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
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
        lineHeight: 22,
        fontSize: 20,
        color: COLOR.white,
    },
    title: {color: COLOR.white, fontWeight: 'bold', fontSize: 18},
    btnContainer: {
      backgroundColor: COLOR.primary,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
});


const DetailsScreen = ({navigation, route}) => {
    const item = route.params;

    return (
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries.
                    </Text>
                    <View style={{ marginTop: 40, marginBottom: 40 }}>
                        <SecondaryButton title="จอง" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailsScreen;