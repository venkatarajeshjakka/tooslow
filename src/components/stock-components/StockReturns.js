import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import Card from '../Card'
import { stockReturns } from '../../helpers/StockHelper'
const StockReturns = ({data}) => {
    var formattedData = stockReturns(data);
    return (
       <View style={styles.container}>
      <Card>
        <Text>{formattedData.weeklyPriceChange}</Text>
      </Card>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingVertical: 5,
        marginTop: 20,
        marginHorizontal: 10
      }
})

export default StockReturns

export { StockReturns };
