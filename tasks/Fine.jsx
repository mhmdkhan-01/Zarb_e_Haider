import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
export default function Fine() {


    const Violations = [
        {
            name: 'Speed',
            fine: 2000,
            isMarked: 0
        },
        {
            name: 'Seat Belt',
            fine: 2000,
            isMarked: 0
        },
        {
            name: 'No License',
            fine: 5000,
            isMarked: 0
        },
        {
            name: 'Phone Call',
            fine: 3000,
            isMarked: 0
        },
    ];

    const [totalFine, setTotalFine] = useState();
    const CalculateFine = () => {
        setTotalFine(10);

    }


    return (
        <View style={{ flex: 1 }}>

            <View style={style.topBar}></View>
            <View style={style.header}>
                <Text style={style.headingText}>Taffic Fine Calculator</Text>
            </View>
            <View style={style.body}>
                {/* <TextInput placeholder='Expense Name' style={style.input} onChangeText={setExname} />
                <TextInput placeholder='Amount' style={style.input} onChangeText={setAmount} /> */}

                <View style={style.heading}>
                    <Text style={style.htext}>Select Violation</Text>
                    <Text style={style.htext}>Fine (RS)</Text>
                </View>

                <View style={style.violations}>
                    {Violations.map(v => {
                        return (<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text>{v.isMarked}</Text>
                                <Text>{v.name}</Text>
                            </View>
                            <Text>{v.fine}</Text>
                        </View>)
                    })}
                </View>
                <View style={style.button}>
                    <Button title='Calculate Fine' onPress={CalculateFine} />
                </View>

                {totalFine && <View style={{ marginTop: 40 }}>
                    <Text style={{ color: 'crimson', fontWeight: '600', fontSize: 16, textAlign: 'center' }}>Total Fine</Text>
                    <Text style={{ color: 'crimson', fontWeight: '800', fontSize: 30, textAlign: 'center' }}>RS. {totalFine}</Text>
                </View>
                }
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    topBar: {
        height: 40,
        backgroundColor: 'black',
    },
    header: {
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',

    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    headingText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '45%',
        marginTop: 21,
        alignSelf: 'center'
    },
    input: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 5,
        height: 35
    },
    litem: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    litemtext: {
        fontSize: 17
    },
    violations: {
        paddingTop: 20,
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    htext: {
        fontWeight: 'bold'
    },

});


