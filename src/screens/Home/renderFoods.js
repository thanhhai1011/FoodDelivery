import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFoodFavourite } from '../../redux/foodSlice';
import { Colors } from '../../contants/Colors';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

const FoodList = ({ item, currentLocation, food, isSelected, handleFavourite }) => {

    const dispatch = useDispatch()

    const navigation = useNavigation();
    console.log(item);
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Order', { title: item.name, topping: item.topping, currentLocation, food })}
        >
            <View style={styles.box}>
                <View style={styles.flexImage}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.boxTime}>
                        <Text>25-30 min</Text>
                    </View>
                </View>
                <View style={styles.nameFood}>
                    <View style={styles.flexColumn}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.details}>
                            <Icon name='star' size={15} color={Colors.primary} />
                            <Text style={styles.horizontal}>4.7</Text>
                            <View style={styles.category}>
                                <Text>{item.category}</Text>
                            </View>
                            <Text>$$$</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleFavourite.bind(this, item)} style={[styles.inconHeart]}>
                        <Icon name='heart-circle' size={25} color={isSelected ? Colors.primary : Colors.BLACK} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodList

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 30,
        width: '100%',
        height: 190,
    },
    box: {
        flex: 1
    },
    flexImage: {
        flex: 4,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '80%',
        borderRadius: 25
    },
    nameFood: {
        flex: 1,
    },
    boxTime: {
        position: 'absolute',
        bottom: 0,
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderTopEndRadius: 20
    },
    flexColumn: {
        flexDirection: 'column'
    },
    details: {
        flexDirection: 'row',
        marginTop: 5,
    },
    category: {
        marginHorizontal: 10
    },
    horizontal: {
        marginHorizontal: 10
    },
    name: {
        marginVertical: 5,
        fontSize: 18,
        fontWeight: '600'
    },
    inconHeart: {
        position: 'absolute',
        right: 35,
        bottom: -10
    }
})