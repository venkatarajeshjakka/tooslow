import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { trimValue, formatDate } from "../../extension/Formatter";
import { Button } from "../form-components";
const PriceSummary = ({
  longName,
  regularMarketPrice,
  regularMarketChange,
  regularMarketChangePercent,
  regularMarketTime,
  handleOnPressLike,
  isBookmarked,
  onPressAdd
}) => {
  var fontColor = regularMarketChange > 0 ? "#008000" : "#ff0000";
  return (
    <View style={styles.priceContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{longName}</Text>
      </View>

      <Text style={[styles.marketPrice, { color: fontColor }]}>
        {regularMarketPrice}
      </Text>
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <Text style={[styles.marketPriceChange, { color: fontColor }]}>
          {`${trimValue(regularMarketChange)}(${trimValue(
            regularMarketChangePercent * 100
          )}%)`}
        </Text>
        <Text style={{ paddingHorizontal: 25 }}>
          {formatDate(regularMarketTime)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPressAdd}
          buttonStyle={{
            borderRadius: 20,
            backgroundColor: "black"
          }}
          title="Add"
        />

        <Button
          onPress={handleOnPressLike}
          buttonStyle={{
            borderRadius: 20,
            backgroundColor: "black"
          }}
          title={isBookmarked ? "Unfollow" : "Follow"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingTop: 5,
    fontSize: 19,
    marginHorizontal: 5,
    fontFamily: "Avenir"
  },
  priceContainer: {
    flexDirection: "column",
    position: "relative",
    paddingHorizontal: 15,
    alignContent: "stretch",
    backgroundColor: "#fff",
    paddingBottom: 5
  },
  icon: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    flex: 1
  },
  marketPrice: {
    padding: 5,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Avenir"
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around"
  },
  marketPriceChange: {
    padding: 5,
    flex: 2,
    fontSize: 16,
    fontFamily: "Avenir"
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 5,
    paddingVertical: 10
  }
});

export { PriceSummary };
