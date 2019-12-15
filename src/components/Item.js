import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Item = ({stockCode,stockName}) => {
    
    return (
        <View style={styles.container}>
           
           <View style={styles.section}>
               <Text style={styles.stockCode}>{stockCode}</Text>
               <Text style={styles.stockName}>{stockName}</Text>

           </View>
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor : '#ddd',
        borderBottomWidth : 1,
        marginLeft : 5,
        marginRight : 5
    },
    section :{
        borderBottomWidth : 1,
        padding : 20,
        backgroundColor : '#fff',
        flexDirection : 'row',
        borderColor :'#ddd',
        position :'relative',
        
    },
    stockCode :{
        flex : 1,
        fontSize : 14,
        fontWeight: "bold"
    },
    stockName :{
        flex : 2,
        fontSize : 14,
    }
})
export default Item
