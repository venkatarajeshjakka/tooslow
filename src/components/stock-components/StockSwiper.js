import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { CardHeader } from "../common";
import Slide from "./Slide";

let data = [
  {
    stockCode: "Reliance",
    stockName: "Reliance Industries",
    value: '1200.65',
    change: 2
  },
  {
    stockCode: "TCS",
    stockName: "Tata Consulatancy service",
    value: '1700.65',
    change: -1.0
  },
  {
    stockCode: "INFY",
    stockName: "INFOSYS",
    value: '653',
    change: 2
  }
];

const StockSwiper = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", margin: 5 }}>
        <View>
          <CardHeader heading="Daily Top Gainer" />
          <Text style={styles.subheading}>
            These stocks were bought more over the last trading session than any
            other stocks available.
          </Text>
        </View>
        <View>
          <Swiper style={styles.wrapper} height={250} loop={false}>
            <Slide data={data} />
            <Slide data={data} />
            <Slide data={data} />
          </Swiper>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    margin: 5
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 10
  },
  subheading: {
    margin: 5,
    paddingHorizontal: 10,

    fontSize: 16,
    color: "grey"
  }
});

export { StockSwiper };
