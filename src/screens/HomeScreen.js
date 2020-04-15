import React, { useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Context as StockContext } from "../context/StockContext";
import { StockSwiper } from "../components/stock-components";
import _ from "underscore";

const HomeScreen = () => {
  const {
    getTopGainer,
    getEquityList,
    getTopLosser,
    state: { topGainers, equityList, topLosers }
  } = useContext(StockContext);

  useEffect(() => {
    getTopGainer();
    getEquityList();
    getTopLosser();
  }, []);

  var stockName = (data, stockCode) => {
    var response = _.findWhere(data, { symbol: stockCode });
    return response ? response.symbolName : null;
  };

  var topGainerData = data => {
    var response = _.map(data, item => {
      return {
        stockCode: item.symbol,
        change: item.netPrice,
        stockName: stockName(equityList, item.symbol)
      };
    });
    return response;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0EEEE" }}>
      <ScrollView>
        <StockSwiper
          data={
            topGainers && equityList ? topGainerData(topGainers.data) : null
          }
          heading="Biggest Daily Movers"
          subHeading="These companies gained the most value today of any stock."
        />
        <StockSwiper
          data={topLosers && equityList ? topGainerData(topLosers.data) : null}
          heading="Biggest Daily Losers"
          subHeading="These companies lost the most value today of any stock."
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
