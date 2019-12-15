import React ,{useEffect,useContext} from 'react'
import { View, Text, ActivityIndicator, StyleSheet,ScrollView} from 'react-native'
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
    
    const trimValue = (input) =>{
        return input.toFixed(2)
    }

        if(!searchStockData)
        {
            return(<ActivityIndicator 
            size='large'
            tyle={{marginTop : 200}}
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
                    <ScrollView>
                    <View style={styles.container}>
                    <NavigationEvents
                        onWillBlur ={clearSearchStockData}
                       />
                   
                    
                    <Text style={styles.heading}>{longName}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={{padding :5}}>{regularMarketPrice}</Text>
                        <Text style={{padding :5}}>
                                {`${trimValue(regularMarketChange)}(${trimValue(regularMarketChangePercent*100)}%)`} 
                        </Text>
                    </View>
                    <Card>
                        <Section>
                            <Text style={ {fontSize: 20,fontWeight: "bold"}}>
                                Details
                            </Text>
                        </Section>
                         <Section>
                            <Text style={styles.label}>Day Low </Text>
                            <Text style={styles.value}>{formatCurrency(regularMarketDayLow,currencySymbol)}</Text>
                        </Section>
                        <Section>
                            <Text style={styles.label}>Day High</Text>
                            <Text style={styles.value}>{formatCurrency(regularMarketDayHigh,currencySymbol)}</Text>
                        </Section>
                        <Section>
                            <Text style={styles.label}>Previous Close </Text>
                            <Text style={styles.value}>{formatCurrency(regularMarketPreviousClose,currencySymbol)}</Text>
                        </Section>
                        <Section>
                            <Text style={styles.label}>Day Open</Text>
                            <Text style={styles.value}>{formatCurrency(regularMarketOpen,currencySymbol)}</Text>
                        </Section>

                        <Section>
                            <Text style={styles.label}>52 week Low</Text>
                            <Text style={styles.value}>{formatCurrency(fiftyTwoWeekLow,currencySymbol)}</Text>
                        </Section>

                        <Section>
                            <Text style={styles.label}>52 week High</Text>
                            <Text style={styles.value}>{formatCurrency(fiftyTwoWeekHigh,currencySymbol)}</Text>
                        </Section>
                
                        </Card>
                    
                    </View>
                 </ScrollView>
                   
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
        fontSize : 16,
        
    },
    value :{
        flex : 1,
        fontSize : 16,
        fontWeight: "bold",
        textAlign: 'right'
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
