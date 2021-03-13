import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import *as SQLite from 'expo-sqlite';
import { TextInput } from 'react-native-gesture-handler'
import colors from '../utils/colors'  

const db = SQLite.openDatabase('real_state_advisor.db');
export default function AddHome({navigation}){
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [district, setDistrict] = useState('');
    const addHome = (address, price, district) => {
        db.transaction(tx => {
            tx.executeSql('insert into home(address, price, district) values(?, ?, ?);',
            [address, price, district], () =>navigation.navigate('Home'));
        })
    }
    return (
        <View style={styles.formContainer}>
            <TextInput placeholder="Address" style={styles.input} value={address} onChangeText={(address)=> setAddress(address)}/>
            <TextInput placeholder="Price" style={styles.input} value={price} onChangeText={(price)=> setPrice(price)}/>
            <TextInput placeholder="district" keyboardType="numeric" style={styles.input} value={district} onChangeText={(district)=> setDistrict(district)}/>
            
            <TouchableOpacity style={[styles.button,{backgroundColor:'chartreuse'}]}>
                <Text style={styles.buttonText} onPress={()=>addHome(address, price, district)}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'orange'}]}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    formContainer: {
        borderRadius:30,
        marginTop:60,
        paddingVertical:20,
        paddingHorizontal:40,
        backgroundColor: colors.white
    },
    input: {
     paddingBottom:10,
     marginBottom:10,
     borderBottomColor: colors.secondry,
     borderBottomWidth:1
    },
    button: {
        padding:20,
        marginTop:20,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
       color: colors.black ,
       fontWeight: 'bold' 
    
    }
})