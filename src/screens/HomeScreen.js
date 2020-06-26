import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { Context as WatchListContext } from "../context/WatchListContext";

import { GainerLoser } from "../components/stock-components";

const HomeScreen = ({ navigation }) => {
  const {
    getStockInfo,
    state: { watchListArray, watchListStockData }
  } = useContext(WatchListContext);

  useEffect(() => {
    getStockInfo(watchListArray);
  }, [watchListArray]);

  if (!watchListStockData) {
    return (
      <SafeAreaView style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" animating={true} color="#007AFF" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0EEEE" }}>
      <ScrollView>
        <GainerLoser data={watchListStockData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default HomeScreen;
