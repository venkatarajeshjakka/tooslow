import React from 'react'
import { View, TextInput , StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Feather name="search"  style={styles.iconStyle} />
            <TextInput 
            value ={term}
            onChangeText ={onTermChange}
            style ={styles.inputStyle}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Search"
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
       marginTop: 10,
       backgroundColor : '#F0EEEE',
       height : 40,
       borderRadius :5,
       marginHorizontal: 10,
       flexDirection: 'row',
       marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize : 17
    },
    iconStyle :{
        fontSize: 20,
        alignSelf :'center',
        marginHorizontal : 10
    }
})
export default SearchBar
