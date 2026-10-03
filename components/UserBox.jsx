import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const UserBox = ({ name, age }) => {
    return (
        <View style={style.box}>
            <View style={style.text}>
                <Text style={style.name}>{name}</Text>
                <Text style={style.age}>{age}</Text>
            </View>
            <View style={style.buttons}>
                <Button title="Remove" />
                <Button title="Select" />
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        box: {
            padding: 10,
            marginVertical: 5,
            borderLeftWidth: 5,
            borderLeftColor: '#442c5b',
            backgroundColor: 'white',
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        text: {
            justifyContent: 'space-around'
        },
        name: {
            fontSize: 18,
            color: '#442c5b',
            fontWeight: '800'
        },
        age: {
            fontSize: 15,
            color: '#442c5b',
        },
        buttons: {
            gap: 2
        }
    }
);

export default UserBox