import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
// import { enableLatestRenderer } from 'react-native-maps';
// import MapView from 'react-native-maps';

const GOOGLE_PLACES_API_KEY = 'AIzaSyAnpyF_9zG6qTLFV-xRj9USHQclQwUh31g';
// enableLatestRenderer();

const OrderDelivery = ({ route }) => {
    return (
        <View style={styles.container}>
            {/* <MapView style={styles.map} /> */}
        </View>
    )
}

export default OrderDelivery

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1
    },
})