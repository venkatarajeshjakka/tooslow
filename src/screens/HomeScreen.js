import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  ActivityIndicator,
  FlatList
} from "react-native";
import { Context as WatchListContext } from "../context/WatchListContext";
import { TabView, TabBar } from "react-native-tab-view";
import _ from "underscore";
import { getTopGainersOrLoser } from "../helpers/StockHelper";
const FirstRoute = ({ topGainer }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={topGainer}
        scrollEnabled
        keyExtractor={(item, index) => item.stockCode}
        renderItem={({ item }) => {
          return <Text>{item.stockCode}</Text>;
        }}
      />
    </View>
  );
};

const SecondRoute = ({ topLoser }) => (
  <View style={styles.container}>
    <View>
      <Text>Second</Text>
    </View>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#0078ff" }}
    style={{ backgroundColor: "white" }}
    renderLabel={({ route, focused, color }) => {
      let colorFocus = focused ? "#FF375F" : "black";
      return (
        <Text
          style={{ color: colorFocus, fontFamily: "Avenir", fontWeight: "500" }}
        >
          {route.title}
        </Text>
      );
    }}
  />
);

const HomeScreen = ({ navigation }) => {
  const {
    getStockInfo,
    state: { watchListArray, watchListStockData }
  } = useContext(WatchListContext);

  useEffect(() => {
    getStockInfo(watchListArray);
  }, [watchListArray]);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Top Gainers" },
    { key: "second", title: "Top Losers" }
  ]);

  const RenderScene = ({ route, jumpTo, data }) => {
    switch (route.key) {
      case "first":
        return <FirstRoute jumpTo={jumpTo} topGainer={data.topGainer} />;
      case "second":
        return <SecondRoute jumpTo={jumpTo} topLoser={data.topLoser} />;
    }
  };

  if (!watchListStockData) {
    return (
      <SafeAreaView style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" animating={true} color="#007AFF" />
      </SafeAreaView>
    );
  }

  var topGainerOrLoserData = getTopGainersOrLoser(watchListStockData);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0EEEE" }}>
      <ScrollView>
        <TabView
          navigationState={{ index, routes }}
          renderScene={props => (
            <RenderScene {...props} data={topGainerOrLoserData} />
          )}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
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
