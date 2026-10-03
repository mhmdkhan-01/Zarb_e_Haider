import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(null);
    const [custType, setCustType] = useState(null);
    var bill = 0;
    var discount = "0%";
    const calculateBill = () => {
        if (price < 1 || quantity < 1) { return }

        bill = price * quantity;
        if (custType == "premium") {
            bill -= bill * 5 / 100;
            discount = "5%";
        }
        else {
            bill -= bill * 10 / 100;
            discount = "10%";
        }
        setTotal(bill);
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={ss.topBar}>
                <Text style={ss.topBarText}>Shopping Bill Calculator</Text>
            </View>
            <View style={ss.body}>
                <Text style={ss.label}>Price</Text>
                <TextInput style={ss.input} onChangeText={setPrice} />
                <Text style={ss.label}>Quantity</Text>
                <TextInput style={ss.input} onChangeText={setQuantity} />
                <Text style={ss.label}>Customer Type</Text>
                <TextInput style={ss.input} onChangeText={setCustType} />
                <Button title="Calculate" onPress={calculateBill} />
                {total && <Text style={ss.result}>Subtotal: {bill}</Text>}
                {total && <Text style={ss.result}>Discount: {discount}</Text>}
                {total && <Text style={ss.result}>Total Bill: {total}</Text>}
            </View>
        </View>
    );
}

const ss = StyleSheet.create({
    topBar: {
        backgroundColor: 'blue',
        height: 90,
        justifyContent: 'flex-end',
        padding: 10
    },
    topBarText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    body: {
        flex: 1,
        margin: 20
    },
    label: {
        fontSize: 16,
        fontWeight: 600,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        height: 40,
        marginTop: 15,
        padding: 10,
        marginBottom: 20
    },
    result: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#dafff9',
        padding: 20,
    },
    resultmessage: {
        fontSize: 14,
        color: '#25752f'
    },
    resultBMI: {
        fontSize: 32,
        fontWeight: 600,
        color: '#25752f'
    },
    resultStatus: {
        fontSize: 14,
        color: '#25752f'
    },
});