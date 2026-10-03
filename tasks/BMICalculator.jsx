import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function BMICalculator() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [status, setStatus] = useState(null);
    const calculateBMI = () => {
        if (weight < 1 || height < 1) { return }
        let inches = (height / 100);
        let b = weight / (inches * inches);
        // b = Math.round(b);
        let message = "";
        if (b < 18.5)
            message = "Underweight";
        else if (b < 25)
            message = "Normal weight";
        else if (b < 30)
            message = "Overweight";
        else if (b < 35)
            message = "Obese (Class I)";
        else if (b < 40)
            message = "Obese (Class II)";
        else
            message = "Severely Obese (Class III)";
        setStatus(message);
        setBmi(b);
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={ss.topBar}>
                <Text style={ss.topBarText}>BMI Calculator</Text>
            </View>
            <View style={ss.body}>
                <Text style={ss.label}>Weight (KG)</Text>
                <TextInput style={ss.input} onChangeText={setWeight} />
                <Text style={ss.label}>Height (CM)</Text>
                <TextInput style={ss.input} onChangeText={setHeight} />
                <Button title="Calculate" onPress={calculateBMI} />
                {status && <View style={ss.result}>
                    <Text style={ss.resultmessage}>Your BMI</Text>
                    <Text style={ss.resultBMI}>{bmi.toFixed(1)}</Text>
                    <Text style={ss.resultStatus}>{status}</Text>
                </View>
                }
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