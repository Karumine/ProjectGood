import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RestaurantMediumCard = (name) => {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RestaurantMediumCard;