import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {


    const [users, setUsers] = useState([
        { id: 1, name: 'Ali', age: 18 },
        { id: 2, name: 'Umer', age: 28 },
        { id: 3, name: 'Usman', age: 24 },
        { id: 4, name: 'Haider', age: 19 },
        { id: 5, name: 'Nouman', age: 21 },
        { id: 6, name: 'Abu Bakar', age: 20 },
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const fliteredUsers = users.filter(u => u.name.toLowerCase().includes(searchQuery.toString().toLowerCase()));
    const [selectedUser, seSelectedUser] = useState(false);
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const RenderItem = ({ item }) =>
        <UserBox user={item} />

    const AddUser = () => {
        let max = users[0].id;
        for (let u of users) {
            if (u.id > max) {
                max = u.id;
            }
        }
        max = max + 1;
        setUsers([...users, { id: max, name, age }]);
        setName('')
        setAge('')
    }
    const UserBox = ({ user }) => {

        return (
            <View style={[style.box, { borderWidth: user.selected == 1 ? 3 : null }]}>
                <View style={style.text}>
                    <Text style={style.name}>{user.name}</Text>
                    <Text style={style.age}>{user.age}</Text>
                </View>
                <View style={style.tbuttons}>
                    <Button title="Remove" onPress={() => RemoveUser(user.id)} />
                    <Button title="Select" onPress={() => SelectUser(user.id)} />
                </View>
            </View>
        )
    }

    const RemoveUser = (id) => {
        let nusers = users.filter(u => u.id != id);
        setUsers(nusers);
    }

    const SelectUser = (id) => {
        users.map((val, ind, arr) => {
            if (val.id == id) {
                if (!arr[ind].selected) arr[ind].selected = 0
                arr[ind].selected = arr[ind].selected == 0 ? '1' : '0'
                seSelectedUser(!selectedUser)
            }
        });
    }

    const RemoveChecked = () => {
        let nusers = users.filter(u => u.selected != 1);
        setUsers(nusers);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={style.topBar} />
            <View style={style.body}>
                <TextInput onChangeText={setSearchQuery} placeholder='Search' style={[style.input, style.searchInput,]} />

                <TextInput onChangeText={setName} placeholder='Enter name' style={style.input} placeholderTextColor={'#442c5b9d'} value={name} />
                <TextInput onChangeText={setAge} placeholder='Enter age' style={style.input} placeholderTextColor={'#442c5b9d'} value={age} />
                <View style={style.buttons}>
                    <Button title="Add" onPress={AddUser} />
                    <Button title="Check" onPress={RemoveChecked} />
                </View>
                <FlatList
                    data={fliteredUsers}
                    renderItem={RenderItem}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={style.list}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create(
    {
        topBar: {
            height: 40,
            backgroundColor: 'black'
        },
        body: {
            margin: 10,
            backgroundColor: '#f7f4f4',
            flex: 1
        },
        input: {
            borderWidth: 2,
            marginHorizontal: 12,
            marginVertical: 10,
            borderRadius: 12,
            padding: 12,
            borderColor: '#442c5b9d'
        },
        searchInput: {
            borderRadius: 24,
            borderColor: 'lightgray'
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: "flex-end", gap: 15
        },
        list: {
            padding: 14,
            marginVertical: 14,
            backgroundColor: '#dbd2e342',
            borderWidth: 1,
            borderRadius: 8,
            borderColor: 'lightgray'
        },
        box: {
            padding: 10,
            marginVertical: 5,
            borderLeftWidth: 5,
            borderLeftColor: '#442c5b',
            backgroundColor: 'white',
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: '#442c5b'
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
        tbuttons: {
            gap: 2
        }
    }
);

