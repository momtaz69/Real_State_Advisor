import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../utils/colors'  
export default function HomeList({address,price, district, image, onDeleteHome}){
    return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.contacInfo}>
            <View style={styles.details}>
                <Image source={{uri: image}} style={{height: 200}} />
                <Text style={styles.title}>{address}</Text>
                <Text style={styles.subTitle}>{price}</Text>
                <Text style={styles.subTitle}>{district}</Text>
                <Button title="Delete" color="red" onPress={onDeleteHome} />
            </View>
            {/* <View> */}
                {/* <MaterialCommunityIcons name="trash-can" color="red" size={24} onPress={onDeletHome} /> */}
            {/* </View> */}
        </View>

    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
       paddingLeft:24 
    },
    contacInfo: {
        flex:1,
        flexDirection: "row",
        paddingVertical:16,
        paddingHorizontal:24,
        borderBottomColor: colors.secondry,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    
    },
    details: {
        flex:2,
        marginLeft:20
    },
    title:{
        color: colors.black,
        fontSize:16,
        fontWeight: 'bold',
        textAlign: "center"
    },
    subTitle: {
        color: colors.primary,
        textAlign: "center"
    }
})