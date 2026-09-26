import React from 'react';
import { Text, TextInput, View } from 'react-native';
export default function App() {
    const borderColor = 'lightgray';
    let quickAccess = [
        { num: '06', text: 'Courses' },
        { num: '03', text: 'Tasks' },
        { num: '02', text: 'Alerts' }
    ]
    let classes = [
        {
            name: 'React Native', time: '10:00 AM', location: 'Lab',
        },
        {
            name: 'Database Systems', time: '12:00 PM', location: 'Room 204'
        }

    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'black' }}></View>
            <View style={{ flex: 1, borderWidth: 1, borderColor: borderColor, borderRadius: 20, margin: 10 }}>
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 20, margin: 10, borderWidth: 1, borderColor: borderColor }}>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 1, height: 100, width: '100%', borderColor: borderColor, }}>
                        <View style={{
                            height: 100, justifyContent: 'center', alignItems: 'center',
                            width: '50%'
                        }}>
                            <View style={{ alignItems: 'start' }}>
                                <View>
                                    <Text style={{ fontSize: 14, color: 'gray' }}>Good Morning</Text>
                                </View>
                                <View style={{ height: 10 }}></View>
                                <View >
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Student </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 100, width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, borderRadius: '50%', borderColor: borderColor, height: '40', width: '40', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>S</Text>
                            </View>

                        </View>
                    </View>
                /* Mid Screen */
                    <View style={{ flex: 1, padding: 30 }}>
                        {/**Attendance Summary */}
                        <View style={{ borderWidth: 1, borderColor: borderColor, borderRadius: 20, height: 100, padding: 15, justifyContent: 'space-between' }}>

                            <View>
                                <Text style={{ color: 'gray', fontSize: 12 }}>Attendance</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>84%</Text>
                                <Text style={{ color: 'gray', fontSize: 12 }}>This Semester</Text>
                            </View>
                        </View>
                        {// Quick access wala

                        }

                        <View style={{ marginTop: 30, width: "100%", }}>
                            <Text style={{ fontWeight: 600 }}>Quick Access</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                {
                                    //display quick boxes 
                                    quickAccess.map((item, index) => {
                                        return (
                                            <View key={index} style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 10, borderWidth: 1, borderColor: borderColor, padding: 10, borderRadius: 10, width: '30%', height: 75 }}>
                                                <View>
                                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.num}</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ color: 'gray', fontSize: 12 }}>{item.text}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>

                        <View style={{ marginTop: 30, width: "100%" }}>
                            <Text style={{ fontWeight: 600 }}>Today's Classes</Text>
                            <View>
                                {
                                    //display quick boxes 
                                    classes.map((item, index) => {
                                        return (
                                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, borderWidth: 1, borderColor: borderColor, borderRadius: 10, padding: 12, height: 75 }}>
                                                <View style={{ justifyContent: 'space-around', height: '100%' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.name}</Text>

                                                    <Text style={{ color: 'gray', fontSize: 12 }}>{item.time}</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ color: 'gray', fontSize: 12 }}>{item.location}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>


                    </View>
                    {/**Bottomsheet */}
                    <View style={{ alignSelf: 'flex-end', borderTopWidth: 1, height: 50, width: '100%', borderColor: borderColor, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 600 }}>Home</Text>
                        <Text style={{ color: 'gray' }}>Courses</Text>
                        <Text style={{ color: 'gray' }}>Attendance</Text>
                        <Text style={{ color: 'gray' }}>Profile</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}