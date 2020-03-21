import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import Coin from "../components/Coin";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Context as WatchListContext } from "../context/WatchListContext";
import { formatCurrency } from "../extension/Formatter";
const WatchListScreen = ({ navigation }) => {
  const {
    getStockInfo,
    state: { watchListArray, watchListStockData }
  } = useContext(WatchListContext);
  const { showActionSheetWithOptions } = useActionSheet();
  useEffect(() => {
    getStockInfo(watchListArray);
  }, [watchListArray]);

  const onOpenActionSheet = stockCode => {
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = [
      "Remove",
      "Add to Portfolio",
      "Add Recommendation",
      "Cancel"
    ];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 3;

    const title = "Action sheet test";
    const message = "you seleted";

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        title,
        message
      },
      buttonIndex => {
        // Do something here depending on the button index selected
        if (buttonIndex == 2) {
          navigation.navigate("AddRecommendation", { stockCode: stockCode });
        }
      }
    );
  };

  if (!watchListStockData) {
    return (
      <SafeAreaView
        style={styles.activityIndicatorContainer}
      >
        <ActivityIndicator size="large" animating={true} color="#007AFF" />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={watchListStockData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            var keys = Object.keys(item);
            var data = item[keys[0]];
            const {
              longName,
              symbol,
              regularMarketPrice,
              regularMarketChangePercent
            } = data.price;
            let stockCode = symbol.replace(".NS", "");
            return (
              <Coin
                onPress={() => {
                  navigation.navigate("StockResult", { stockCode: stockCode });
                }}
                longPress={() => {
                  onOpenActionSheet(stockCode);
                }}
                onSwipeFromLeft={() => alert("swiped from left")}
                onRightPress={() => alert("press on right")}
                symbol={stockCode}
                name={longName}
                price={formatCurrency(regularMarketPrice)}
                change={(regularMarketChangePercent * 100).toFixed(2)}
              />
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

WatchListScreen.navigationOptions = () => {
  return {
    header: () => null
  };
};

export default WatchListScreen;
