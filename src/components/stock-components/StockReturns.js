import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../Card";
import { stockReturns } from "../../helpers/StockHelper";
import { Icon } from "../common";

const StockReturnCard = ({ item }) => {
  let iconName = item.value > 0 ? "arrowup" : "arrowdown";
  var color = item.value > 0 ? "#008000" : "#ff0000";
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Card>
        <Text style={styles.label}>{item.label}</Text>
        <View style={styles.priceChangeContainer}>
          <Icon name={iconName} style={{ color: "white", fontSize: 18 }} />
          <Text style={styles.text}>{item.value}%</Text>
        </View>
      </Card>
    </View>
  );
};
const StockReturns = ({ data }) => {
  var formattedData = stockReturns(data);
  let array = [
    {
      label: "1 Week",
      value: formattedData.weeklyPriceChange
    },
    {
      label: "1 Month",
      value: formattedData.monthPriceChange
    },
    {
      label: "3 Months",
      value: formattedData.threeMonthPriceChange
    },
    {
      label: "6 Months",
      value: formattedData.sixMonthPriceChange
    },
    {
      label: "YTD",
      value: formattedData.ytdPriceChange
    }
  ];
  return (
    <View>
      <FlatList
        data={array}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.label}
        renderItem={({ item }) => {
          return <StockReturnCard item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    borderRadius: 15,
    paddingVertical: 5,
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: "center"
  },
  label: {
    fontWeight: "500",
    fontSize: 22,
    color: "white",
    paddingBottom: 10,
    alignSelf: "center"
  },
  priceChangeContainer: {
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    color: "white",
    paddingBottom: 25,
    fontWeight: "500"
  }
});

export default StockReturns;

export { StockReturns };
