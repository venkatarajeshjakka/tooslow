import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'

import Change from './Change'
const Coin = ({onPress,symbol,price,name,change}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
          <Text style={styles.text} numberOfLines={1}>
            {symbol}
          </Text>
          <View style={styles.right}>
            <Text style={styles.text} numberOfLines={1}>
              {price}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={[styles.text, styles.name]} numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.right}>
            <Change value={change} />
          </View>
        </View>
        </TouchableOpacity>
       
    )
}
const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      padding: 10,
      flex : 1
    },
   
    row: {
      flexDirection: 'row',
      paddingBottom: 5,
      
    },
    right: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'flex-end',
    },
    text: {
      fontFamily: 'Avenir',
      fontSize: 18,
      fontWeight: '500',
    },
    name: {
        fontSize: 16,
      fontWeight: '300',
    },
  });
export default Coin
