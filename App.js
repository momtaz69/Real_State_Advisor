import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import * as SQLite from 'expo-sqlite';
const Stack = createStackNavigator();
const db = SQLite.openDatabase('real_state_advisor.db')

import Home from './screen/Home'
import AddHome from './screen/AddHome'
export default function App() {
  useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql('create table if not exists home(id integer primary key autoincrement, address text, price text, district int);'
      ,[], ()=> console.log('Table created successfully'));
    })
  })
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddHome" component={AddHome} />
        
        
        
        
        
        
         
          
        </Stack.Navigator>
      </NavigationContainer>
    </View>    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4'
  },
});
