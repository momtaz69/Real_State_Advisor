import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import {Feather} from '@expo/vector-icons'
import *as SQLite from 'expo-sqlite';
import colors from '../utils/colors'
import HomeList from '../components/HomeList'
const db =SQLite.openDatabase('real_state_advisor.db');

export default function Contacts({navigation}){
    const [homes, setHomes] = useState([]);
    useEffect(()=>{
        db.transaction((tx)=>{
           tx.executeSql('select * from home', [], (tx,{rows})=>{
            var data = [];
            for(var i = 0; i< rows.length; i++){
                data.push(rows[i]);
            }
            setHomes(data);
           })
        })
    })
    const deleteHome = (id) => {
        db.transaction(tx => {
            tx.executeSql('delete from home where id = ?', [id])
        })
    }

    const images = [
        require("../assets/home 1.jpg"),
        require("../assets/home2.jpg"),
        require("../assets/home3.jpg"),
        require("../assets/home4.jpg"),
        require("../assets/home5.jpg"),
        require("../assets/home6.jpg"),
        require("../assets/home7.jpg"),
        require("../assets/home8.jpg"),
    ]
   return (
       <View>
        {homes.length > 0 ? <FlatList
        data={homes}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => {
            return <HomeList image={images[item.id]} address={item.address} price={item.price} district={item.district}  onDeleteHome={()=> deleteHome(item.id)} />
        }}
        />: <View>
                <Text>No home to display</Text>
            </View>}
    <TouchableOpacity style={styles.floatButton} onPress={()=> navigation.navigate('AddHome')}> 
        <Text>
        <Feather name="plus" size={28} color="white" />
        </Text>
    </TouchableOpacity>
    </View>
   )

}
const styles = StyleSheet.create({
    floatButton: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: '50%',
        position: 'absolute',
        bottom: 40,
        right: 40
    }
})