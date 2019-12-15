import React ,{useEffect,useContext} from 'react'
import { View, Text, ActivityIndicator, StyleSheet} from 'react-native'
import {Context as StockContext } from '../context/StockContext'
import { NavigationEvents } from 'react-navigation'
import Section from '../components/Section'
import Card from '../components/Card'

const SearchResultScreen = ({navigation}) => {

    const stockCode = navigation.getParam('stockCode')

    const { state :{searchStockData},get,clearSearchStockData} = useContext(StockContext);
console.log(searchStockData);
    useEffect(()=>{
             get(stockCode)
            },[]);

    const formatCurrency = (input,currentFormatter) =>{
        return `${currentFormatter} ${input}`
    }        

            if(!searchStockData)
            {
                return(<ActivityIndicator 
                size='large'
                style={{marginTop : 200}}
                 />)
            }
            if(searchStockData)
            {
                var summaryDetails = searchStockData.summaryDetail;
                const {
                fiftyTwoWeekHigh,
                fiftyTwoWeekLow
                 } = summaryDetails;
            var price = searchStockData.price;
            const {regularMarketPrice,
                regularMarketOpen,
                regularMarketDayLow,
                regularMarketDayHigh,
                regularMarketPreviousClose,
                longName,
                regularMarketChange,
                regularMarketChangePercent,
                currency,
                currencySymbol,
                exchangeName} = price;

                return (
                    <View style={styles.container}>
                    <NavigationEvents
                        onWillBlur ={clearSearchStockData}
                       />
                   
                    
                        <Text style={styles.heading}>{longName}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={{padding :5}}>{regularMarketPrice}</Text>
                            <Text style={{padding :5}}>
                                {`${regularMarketChange}(${regularMarketChangePercent*100}%)`} 
                             </Text>
                        </View>
                        <Card>
                         <Section>
                            <Text style={styles.label}>Day Low /Day High</Text>
                            <Text style={styles.value}>{`${formatCurrency(regularMarketDayLow,currencySymbol)} - ${formatCurrency(regularMarketDayHigh,currencySymbol)}`}</Text>
                        </Section>
                        <Section>
                            <Text style={styles.label}>Day Low /Day High</Text>
                            <Text style={styles.value}>{`${formatCurrency(regularMarketDayLow,currencySymbol)} - ${formatCurrency(regularMarketDayHigh,currencySymbol)}`}</Text>
                        </Section>

                        <Section>
                            <Text style={styles.label}>Day Low /Day High</Text>
                            <Text style={styles.value}>{`${formatCurrency(regularMarketDayLow,currencySymbol)} - ${formatCurrency(regularMarketDayHigh,currencySymbol)}`}</Text>
                        </Section>
                        <Section>
                            <Text style={styles.label}>Day Low /Day High</Text>
                            <Text style={styles.value}>{`${formatCurrency(regularMarketDayLow,currencySymbol)} - ${formatCurrency(regularMarketDayHigh,currencySymbol)}`}</Text>
                        </Section>
                        </Card>
                    
                    
                    </View>
                    
                    
                )
            }
        
    
    
}

const styles = StyleSheet.create({
    container :{
        marginTop : 10,
        flex : 1
    },
    heading :{
        padding : 10,
        fontSize : 18,
        marginHorizontal : 5
    },
    label :{
        flex : 1,
        fontSize : 14,
        fontWeight: "bold"
    },
    value :{
        flex : 1,
        fontSize : 14,
    },
    priceContainer :{
        flexDirection : 'column',
        position : 'relative',
        marginTop : 5,
        marginBottom: 5,
        marginHorizontal : 15,
        alignContent: 'stretch'
    }
    
})

SearchResultScreen.navigationOptions = ({navigation}) =>{
    const stockCode = navigation.getParam('stockCode') 
    return{
       title : stockCode
    }
}
export default SearchResultScreen
