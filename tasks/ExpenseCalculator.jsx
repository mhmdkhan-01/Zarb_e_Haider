import React, { useState } from 'react';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Checkbox, RadioButton } from 'react-native-paper';
export default function ExpenseCalculator() {

    const [exname, setExname] = useState();
    const [amount, setAmount] = useState();
    const [paymentMethod, setPaymentMethod]=useState('Card');
    const [categories, setCa]=useState([
        {name:'Food'}, {name:'Transport'}, {name:'Util'}, {name:'Shopping'}
    ]);
    const [category, setCategory]=useState();
    const [isRecurring, setIsRecurring]=useState(false);
    const [sum, setSum] = useState();
    const [count, setCount] = useState();

    const [expenses, setExpenses] = useState([]);

    const AddExpense = () => {
        let expid = expenses.length + 1;
        setExpenses([...expenses, { id: expid, name: exname, amount: amount, category:category, paymentMethod:paymentMethod, isRecurring:isRecurring }]);
        setExname('');
        setAmount('');
        setCategory('');
        setPaymentMethod('Card');
        setIsRecurring(false);

    }

    function deleteItem(id)
    {
        let itms=expenses.filter(ex=>ex.id!=id);
        setExpenses(itms);
    }

    const ShowExpenses = ({ item }) => (
        <View style={style.litem}>
            <Text style={[style.litemtext, {flex:0.3}]}>{item.id}</Text>
            <Text style={[style.litemtext, {flex:1.2}]}>{item.name}</Text>
            <Text style={[style.litemtext, {flex:1}]}>{item.category}</Text>
            <Text style={[style.litemtext, {flex:0.7}]}>{item.paymentMethod}</Text>
            <Text style={[style.litemtext, {flex:0.5}]}>{item.isRecurring?'Yes':'No'}</Text>
            <Text style={[style.litemtext, {flex:0.7}]}>{item.amount}</Text>
            <View style={ [style.litemtext,{flex:0.7}]} >
                <Pressable style={style.delBtn} onPress={()=>deleteItem(item.id)} > 
                    <Text style={style.delText}>Delete</Text>
                </Pressable>
            </View>
        </View>
    )
    return (
        <View style={{ flex: 1 }}>
            <View style={style.topBar}></View>
            <View style={style.header}>
                <Text style={style.headingText}>Expense Tracker</Text>
            </View>
            <View style={style.body}>
                <Text style={style.inputlabel}>Expense Name</Text>
                <TextInput placeholder='Expense Name' style={style.input} onChangeText={setExname} value={exname} />
                <Text style={style.inputlabel}>Amount</Text>
                <TextInput placeholder='Amount' style={style.input} onChangeText={setAmount} value={amount} keyboardType='numeric' />
                <Text style={style.inputlabel}>Category</Text>
                {/* Category */}
                <Dropdown style={style.Dropdown} data={categories} placeholder='Select Category...' onChange={(item)=>{
                   setCategory(item.name)
                }} labelField='name' valueField='name' value={category} />
                <Text style={style.inputlabel}>
                    Payment Method
                </Text>
                <View style={style.radios}>
                    <View style={style.radioButton}>
                        <RadioButton status={paymentMethod=='Card'?'checked':'unchecked'} onPress={()=>setPaymentMethod('Card')} />
                        <Text>Card</Text>
                    </View>
                    <View style={style.radioButton}>
                        <RadioButton status={paymentMethod=='Cash'?'checked':'unchecked'} onPress={()=>setPaymentMethod('Cash')} />
                        <Text>Cash</Text>
                    </View>
                </View>
                <View style={style.Checkbox}>
                    <Checkbox status={isRecurring?'checked':'unchecked'} onPress={()=>setIsRecurring(!isRecurring)} />
                        <Text>Mark as Recurring (Monthly)</Text>
                </View>
                
                <View style={style.buttons}>
                        <Pressable onPress={AddExpense} style={style.button}>
                            <Text style={style.btntxt}>Add Expense</Text>
                        </Pressable>
                        <Pressable style={style.button}>
                            <Text style={style.btntxt}>Calculate Total</Text>
                        </Pressable>
                        
                </View>
                
                <Text style={{fontSize:20,color:'#35316e', fontWeight:'bold', marginTop:10 }}>Expense List</Text>
                {
                    <View style={style.tableHeader}>
                        <Text style={[style.th, {flex:0.3}]}>#</Text>
                        <Text style={[style.th, {flex:1.2}]}>Item Name</Text>
                        <Text style={[style.th, {flex:1}]}>Category</Text>
                        <Text style={[style.th, {flex:0.7}]}>Pay Mode</Text>
                        <Text style={[style.th, {flex:0.5}]}>Rec?</Text>
                        <Text style={[style.th, {flex:0.7}]}>Amount (Rs.)</Text>
                        <Text style={[style.th, {flex:0.7}]}>Del</Text>
                    </View>
                }
                <FlatList
                    data={expenses}
                    renderItem={ShowExpenses}
                />
                <View style={style.bottom}>
                    <View style={style.btmRow}>
                            <Text style={style.btmhd}>Total Expense:</Text>
                            <Text>Rs. {expenses.reduce((total, item) => total + parseFloat(item.amount || 0), 0)}</Text>  
                        </View>
                        <View style={style.btmRow}>
                            <Text style={style.btmhd}>Number of Expenses:</Text>
                            <Text>{expenses.length}</Text>
                        </View>
                        <View style={style.btmRow}>
                            <Text style={style.btmhd}>Average Expense:</Text>
                            <Text>Rs. {expenses.length > 0 ? (expenses.reduce((total, item) => total + parseFloat(item.amount || 0), 0) / expenses.length).toFixed(2) : 0}</Text>
                        </View>
                </View>
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
        backgroundColor: '#494495',
        justifyContent: 'center',

    },
    body: {
        flex: 1,
        backgroundColor: '#DEDDDDFC',
        paddingHorizontal: 10
    },
    headingText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    
    
    // button: {
    //     width: '45%'
    // },
    input: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 5,
        height: 40,
        backgroundColor: 'white',
    },
    
    inputlabel: {
        marginTop:5 ,
        fontSize: 15,
        color:'#35316e',
        fontWeight:'bold'
    },
    Dropdown:{
        backgroundColor:'white',
        padding:4,
        marginVertical:5,
    },
    Checkbox:{
        flexDirection:'row',
        alignItems:'center',
    },
    radios:{
        flexDirection:'row', gap:15
    }, 
    radioButton:{
        flexDirection:'row',
        alignItems:'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    button:{
        backgroundColor:'#494495',
        width:'45%',
        padding:10,
        borderRadius:8
    },
    btntxt:{
        color:'white',
        textAlign:'center'
    },
    tableHeader:{
        flexDirection:'row',
        backgroundColor:'#E9E3ff',
        paddingVertical:10,
        marginTop:10,
        borderRadius:4,
    },
    th:{
        fontSize:10,
        fontWeight:'bold',
        color:'#333',
        textAlign:'center',
    },
    litem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth:1, 
        borderBottomColor:'#eee',
        backgroundColor:'#fff',
    },
    litemtext: {
        fontSize: 10,
        textAlign:'center',
    },
    
    delBtn:{
        backgroundColor:'#E53935',
        paddingVertical:5,
        borderRadius:4
    },
    delText:{
        color:'#fff',
        fontSize:10,
        textAlign:'center',
        fontWeight:'bold'
    },
    bottom:{
        backgroundColor:'#E9E3ff',
        marginBottom:10,
        padding:15,
        borderRadius:8
    },
    btmRow:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    btmhd:{
        fontWeight:'bold',
        color:'#494495',
        fontSize:16

    }
});


