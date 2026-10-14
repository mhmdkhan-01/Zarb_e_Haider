import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Checkbox, RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

const Students = () => {


    const [regNo, setRegNo]=useState();
    const [name, setName]=useState();
    const [gender, setGender]=useState('Male');
    const [isEmployee, setIsEmployee]=useState(false);
    const [city, setCity]=useState();
    const [students, setStudents]=useState([{regNo:'101', name:'Ali', gender:'Male', isEmployee:false, city:'ISB'}]);
    // const [filteredStds, setFilteredStds]=useState([]);
    const [query, setQuery]=useState('')
    const addStudent=()=>{
        let emp=isEmployee?'Yes':'No'
        setStudents([...students, {regNo, name, gender, isEmployee:emp, city }]);
        setName('');setCity('');setGender('Male');setIsEmployee(false);setRegNo('');
    }

    const deleteStudent=()=>{
        let stds=students.filter(s=>s.regNo!=regNo)
        setStudents(stds);
        setName('');setCity('');setGender('Male');setIsEmployee(false);setRegNo('');

    }
    const filteredStds= students.filter(s=>s.regNo.includes(query));
    // const searchStds=()=>{
    //     let ems=students.filter(s=>s.regNo==query);
    //     setFilteredStds(ems);
    // }
    
    const showStudents=({item})=>{
        return <View style={style.listTile}>
                <Text style={style.listFRow}>{item.regNo} - {item.name}</Text>
                <Text style={style.listSRow}>{item.gender} | {item.city} | {item.isEmployee?'Employee':'UnEmployed'}</Text>
        </View>
    }

  return (
    <SafeAreaView >
        <View>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18, marginTop:40}}>Add Student</Text>
        </View>
        <View style={style.body}>
            <TextInput placeholder='Reg no' style={style.input} value={regNo} onChangeText={setRegNo} />
            <TextInput placeholder='Name' style={style.input} value={name} onChangeText={setName} />
            <View style={{flexDirection:'row', gap:15}}>
                <View style={{flexDirection:'row', alignItems:"center"}}>
                    <RadioButton status={gender=='Male'?'checked':'unchecked'} onPress={()=>setGender('Male')} />
                    <Text>Male</Text>
                </View>
                <View  style={{flexDirection:'row', alignItems:"center"}}>
                    <RadioButton status={gender=='Female'?'checked':'unchecked'} onPress={()=>setGender('Female')} />
                    <Text>Female</Text>
                </View>
            </View>
            <View  style={{flexDirection:'row', alignItems:"center", marginVertical:10}}>
                <Checkbox status={isEmployee?'checked':'unchecked'} onPress={()=>setIsEmployee(!isEmployee)} />
                    <Text>Employee</Text>
            </View>
            <Dropdown style={{borderColor:'lightgray', borderWidth:1, padding:8, backgroundColor:'white'}} placeholder='Select City' data={[{city:'LHR'}, {city:'ISB'}, {city:'KHI'}]} labelField='city' valueField='city' value={city} onChange={(item)=>{
                setCity(item.city) 
            }} />

            <View style={{flexDirection:'row', justifyContent:'space-around', marginVertical:10}}>
                <Pressable onPress={addStudent} style={{padding:10, width:'49%', backgroundColor:'green', alignItems:'center', borderRadius:10}}>
                    <Text style={{fontWeight:'bold', color:'white'}}>Add</Text>
                </Pressable>
                <Pressable onPress={deleteStudent} style={{padding:10, width:'49%', backgroundColor:'red', alignItems:'center', borderRadius:10}}>
                    <Text style={{fontWeight:'bold', color:'white'}}>Delete</Text>
                </Pressable>
            </View>
            <TextInput placeholder='Search...' onChangeText={setQuery} style={[style.input, {marginBottom:10}]} />
                
          
            <FlatList data={filteredStds} renderItem={showStudents}  />
        </View>
    </SafeAreaView>
  )
}

export default Students

const style=StyleSheet.create({
    body:{
        padding:20
    },
    input:{
        borderWidth:1, borderColor:'lightgray', borderRadius:8, marginVertical:10, backgroundColor:'white', padding:8
    },
    listTile:{
        borderWidth:1,
        borderColor:'lightgray',
        padding:10,
        marginVertical:5
    },
    listFRow:{
        fontWeight:'bold',
        fontSize:16
    },
    listSRow:{
        color:'gray'
    }
}
);