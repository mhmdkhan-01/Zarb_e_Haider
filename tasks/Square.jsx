import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
    const [val, setVal] = useState();
    const [square, setSquare] = useState();

    function calculate() {
        setSquare(val * val)
    }

    return (
        <View style={{ paddingTop: 40, padding: 4 }}>
            <TextInput style={{ borderWidth: 2, margin: 10, fontSize: 30 }}
                onChangeText={setVal}
            />

            <Button onPress={calculate} title='Square' />

            <Text style={{ fontSize: 30, textAlign: 'center' }}>Ans: {square}</Text>
        </View>
    );
}

