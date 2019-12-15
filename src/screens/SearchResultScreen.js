import React, { useEffect, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView
} from "react-native";
import { Context as StockContext } from "../context/StockContext";
import { NavigationEvents } from "react-navigation";
import Section from "../components/Section";
import Card from "../components/Card";
import { formatCurrency, trimValue } from "../extension/Formatter";
import TargetPriceCard from "../components/TargetPriceCard";

const SearchResultScreen = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");

  const {
    state: { searchStockData },
    get,
    clearSearchStockData
  } = useContext(StockContext);
  console.log(searchStockData);
  useEffect(() => {
    get(stockCode);
  }, []);

  if (!searchStockData) {
    return <ActivityIndicator size="large" tyle={{ marginTop: 200 }} />;
  }
  if (searchStockData) {
    var summaryDetails = searchStockData.summaryDetail;
    const { fiftyTwoWeekHigh, fiftyTwoWeekLow } = summaryDetails;
    var price = searchStockData.price;
    const {
      regularMarketPrice,
      regularMarketOpen,
      regularMarketDayLow,
      regularMarketDayHigh,
      regularMarketPreviousClose,
      longName,
      regularMarketChange,
      regularMarketChangePercent,
      currency,
      currencySymbol,
      exchangeName
    } = price;
    var finanicalData = searchStockData.financialData;

    return (
      <ScrollView>
        <View style={styles.container}>
          <NavigationEvents onWillBlur={clearSearchStockData} />

          <View style={styles.priceContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent: "space-around"
              }}
            >
              <Text style={styles.heading}>{longName}</Text>
            </View>
            <Text style={{ padding: 5 }}>{regularMarketPrice}</Text>
            <Text style={{ padding: 5 }}>
              {`${trimValue(regularMarketChange)}(${trimValue(
                regularMarketChangePercent * 100
              )}%)`}
            </Text>
          </View>
          <Card>
            <Section>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
            </Section>
            <Section>
              <Text style={styles.label}>Day Low </Text>
              <Text style={styles.value}>
                {formatCurrency(regularMarketDayLow, currencySymbol)}
              </Text>
            </Section>
            <Section>
              <Text style={styles.label}>Day High</Text>
              <Text style={styles.value}>
                {formatCurrency(regularMarketDayHigh, currencySymbol)}
              </Text>
            </Section>
            <Section>
              <Text style={styles.label}>Previous Close </Text>
              <Text style={styles.value}>
                {formatCurrency(regularMarketPreviousClose, currencySymbol)}
              </Text>
            </Section>
            <Section>
              <Text style={styles.label}>Day Open</Text>
              <Text style={styles.value}>
                {formatCurrency(regularMarketOpen, currencySymbol)}
              </Text>
            </Section>

            <Section>
              <Text style={styles.label}>52 week Low</Text>
              <Text style={styles.value}>
                {formatCurrency(fiftyTwoWeekLow, currencySymbol)}
              </Text>
            </Section>

            <Section>
              <Text style={styles.label}>52 week High</Text>
              <Text style={styles.value}>
                {formatCurrency(fiftyTwoWeekHigh, currencySymbol)}
              </Text>
            </Section>
          </Card>
          <TargetPriceCard
            data={finanicalData}
            currencySymbol={currencySymbol}
          />
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1
  },
  heading: {
    padding: 5,
    fontSize: 18,
    marginHorizontal: 5
  },
  label: {
    flex: 1,
    fontSize: 16
  },
  value: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right"
  },
  priceContainer: {
    flexDirection: "column",
    position: "relative",
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 15,
    alignContent: "stretch"
  }
});

SearchResultScreen.navigationOptions = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");
  return {
    title: stockCode
  };
};
export default SearchResultScreen;
