import { Animated, FlatList, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigation } from "@react-navigation/native";
import { Colors } from '../../contants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { increment } from '../../redux/foodSlice';

const icon1 = 'angle-left';
const icon2 = 'bars';

const { width, height } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_SIZE = width * 0.72

const OrderScreen = ({ navigation, route }) => {

    const [data, setData] = useState(null);
    const [food, setFood] = useState(null);
    const [payment, setPayment] = useState(0);
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        const { currentLocation, topping, food } = route.params;
        setFood(food)
        setData(topping)
        setCurrentLocation(currentLocation)
    }, [])

    const Deincrement = (item, action) => {
        let totalCurrentcy = payment;
        const newItem = { ...item }
        const newData = [...data]
        if (action === 'minus') {
            if (newItem.quantity === 0) {
                return;
            }
            newItem.quantity = newItem.quantity - 1;
            newItem.currency = newItem.quantity * newItem.priceTopping;
            if (totalCurrentcy === 0) {
                return
            }
            totalCurrentcy -= newItem.currency
        } else {
            newItem.quantity = newItem.quantity + 1;
            newItem.currency = newItem.quantity * newItem.priceTopping;
            totalCurrentcy += newItem.currency
        }
        const Index = data.findIndex((item) => item.idTopping === newItem.idTopping)
        newData[Index] = newItem;
        setData(newData)
        setPayment(totalCurrentcy);
    }

    const renderItemTopping = (item, index) => {

        return (
            <View style={styles.topping}>
                <View style={styles.main}>
                    <Image source={item.image} style={styles.image} resizeMode='contain' />
                    <View style={styles.boxCount}>
                        <TouchableOpacity onPress={() => Deincrement(item, "minus")}>
                            <Text style={styles.textCount}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.textCount}>{item.quantity}</Text>
                        <TouchableOpacity onPress={() => Deincrement(item, "plus")}>
                            <Text style={styles.textCount}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.namePrice}>
                        <Text style={styles.textNamePrice}>{item.nameTopping}</Text>
                        <Text style={styles.textNamePrice}> - ${item.priceTopping}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.Font13}>Italian pasta width tomatoes, provencal</Text>
                        <View style={styles.center}>
                            <Text style={styles.Font13}> herbs and basil</Text>
                        </View>
                    </View>
                    <View style={styles.calo}>
                        <Icon name='flame' size={15} color={Colors.primary} />
                        <Text style={{ color: Colors.lightGray1 }}>  {item.calories} cal</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Header
                    nameIcon1={icon1}
                    onPress1={() => navigation.goBack()}
                    text={route.params?.title}
                    nameIcon2={icon2}
                />
            </View>
            <View style={styles.footer}>
                <View style={{ flex: 8 }}>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.idTopping}
                        horizontal
                        pagingEnabled
                        snapToInterval={ITEM_SIZE}
                        decelerationRate={0}
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => renderItemTopping(item, index)}
                    />
                </View>
                <View style={styles.order}>
                    <View style={styles.items}>
                        <Text style={styles.textItem}>Item in Cart</Text>
                        <Text style={styles.textItem}>{payment} Total Price</Text>
                    </View>
                    <View style={styles.location}>
                        <Icon name='location' size={15} color={Colors.darkGray2} />
                        <Text style={styles.textLocation}> 745Lincoln PI</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.boxOrder}
                        onPress={() => navigation.navigate("OrderDelivery", { food: food, currentLocation: currentLocation })}
                    >
                        <Text style={styles.textOrder}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGray2,
        // padding: SPACING * 2,
        flex: 1
    },
    footer: {
        marginTop: 20,
        flex: 1
    },
    topping: {
        width,
    },
    image: {
        width: 250,
        height: 250,
    },
    boxCount: {
        width: 100,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 40,
        backgroundColor: Colors.WHITE,
        position: 'absolute',
        bottom: 90,
        left: 78,
        alignItems: 'center'
    },
    textCount: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    main: {
        alignItems: 'center',
        // padding: SPACING * 2,
        marginHorizontal: SPACING
    },
    textNamePrice: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    namePrice: {
        flexDirection: 'row',
    },
    details: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    calo: {
        flexDirection: 'row',
        marginTop: 5
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Font13: {
        fontSize: 13
    },
    order: {
        flex: 4,
        backgroundColor: Colors.WHITE,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textItem: {
        fontWeight: 'bold',
        fontSize: 17
    },
    location: {
        flexDirection: 'row',
        marginTop: 40
    },
    textLocation: {
        fontWeight: 'bold',
        fontSize: 15
    },
    boxOrder: {
        width: '85%',
        height: 50,
        backgroundColor: Colors.ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        // marginHorizontal: 20,
        position: 'absolute',
        bottom: 25
    },
    textOrder: {
        fontSize: 18,
        color: Colors.WHITE,
    }
})