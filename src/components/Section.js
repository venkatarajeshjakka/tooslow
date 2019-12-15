import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Section = (props) => {
    return (
        <View style={styles.container}>
             {props.children}    
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        padding : 10,
        backgroundColor : '#fff',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        position :'relative'
    }   
})
export default Section
