import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const FavouriteScreen = () => {
    const food = useSelector(state => state.foods);
    console.log(food);

    return (
        <View>
            <Text>FavouriteScreen</Text>
        </View>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({})