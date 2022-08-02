import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/TabsBottom/SearchScreen';
import FavouriteScreen from '../screens/TabsBottom/FavouriteScreen';
import UserScreen from '../screens/TabsBottom/UserScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../contants/Colors';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    // const renderIconBottom = () => {
    //     <View style={styles.center}>
    //         <FontAwesomeIcon icon="fa-solid fa-utensils" size={25} style={{ color: 'red' }} />
    //     </View>
    // }
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            // tabBarInactiveTintColor: Colors.ORANGE,
            tabBarActiveTintColor: Colors.ORANGE,
        }}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<Icon name="home-outline" color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<Icon name="restaurant-outline" color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name='Favourite'
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<Icon name="heart-outline" color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name='User'
                component={UserScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<Icon name="person-outline" color={color} size={size} />)
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})