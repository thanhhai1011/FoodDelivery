import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../contants/Colors';


const CategoriesList = ({ item, index, onPress, catetoryIndex }) => {
    return (
        <TouchableOpacity
            key={index}
            onPress={onPress}
            style={
                [styles.container, catetoryIndex == index && styles.categoryBoxSelected]
            }>
            <View style={styles.boxImage}>
                <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.boxText}>
                <Text
                    key={index}
                    style={[
                        styles.text,
                        catetoryIndex == index && styles.categorySelected]}>
                    {item.category}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoriesList

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 80,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        padding: 6,
        marginRight: 10,
        backgroundColor: Colors.WHITE
    },
    image: {
        width: 20,
        height: 20,
        backgroundColor: 'transparent'
    },
    boxImage: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        flex: 1,
        backgroundColor: Colors.WHITE,
        width: '100%',
        height: '100%'
    },
    boxText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 11
    },
    categorySelected: {
        color: Colors.WHITE
    },
    categoryBoxSelected: {
        backgroundColor: Colors.primary
    }
})