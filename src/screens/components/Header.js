import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../contants/Colors';

const Header = (props) => {
    const { onPress1 } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress1}>
                <Icon name={props.nameIcon1} style={styles.icon} size={15} />
            </TouchableOpacity>
            <View style={styles.area}>
                <Text style={styles.textArea}>{props.text}</Text>
            </View>
            <TouchableOpacity>
                <Icon name={props.nameIcon2} style={styles.icon} size={15} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    area: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.COLOR_AREA,
        width: 140,
        height: 30,
        borderRadius: 30
    },
    textArea: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.BLACK
    }
})