import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import Change from "../Change";
import { getTopGainersOrLoser } from "../../helpers/StockHelper";
import { navigate } from "../../NavigationRef";

const StockList = ({ onPress, longPress, data }) => {
  const { stockName, change } = data;
  return (
    <TouchableOpacity onPress={onPress} onLongPress={longPress}>
      <View style={styles.stockContainer}>
        <View style={styles.row}>
          <Text style={[styles.text, styles.name]} numberOfLines={1}>
            {stockName}
          </Text>
          <View style={styles.right}>
            <Change value={(change * 100).toFixed(2)} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FirstRoute = ({ topGainer }) => {
  return <Route data={topGainer} />;
};

const Route = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, key) => {
        return (
          <StockList
            key={key}
            data={item}
            onPress={() => {
              navigate("StockResultHome", { stockCode: item.stockCode });
            }}
          />
        );
      })}
    </View>
  );
};
const SecondRoute = ({ topLoser }) => <Route data={topLoser} />;

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

const GainerLoser = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Top Gainers" },
    { key: "second", title: "Top Losers" }
  ]);
  var topGainerOrLoserData = getTopGainersOrLoser(data);
  const RenderScene = ({ route, jumpTo, data }) => {
    switch (route.key) {
      case "first":
        return <FirstRoute jumpTo={jumpTo} topGainer={data.topGainer} />;
      case "second":
        return <SecondRoute jumpTo={jumpTo} topLoser={data.topLoser} />;
    }
  };
  return (
    <View style={styles.box}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={props => (
          <RenderScene {...props} data={topGainerOrLoserData} />
        )}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={{ margin: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  box: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 15
  },
  stockContainer: {
    padding: 10,
    borderColor: "#ddd",

    backgroundColor: "#fff"
  },
  right: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end"
  },
  text: {
    fontFamily: "Avenir",
    fontSize: 16,
    fontWeight: "500"
  },
  name: {
    fontSize: 15,
    fontWeight: "500"
  },
  row: {
    flexDirection: "row",
    paddingBottom: 5
  }
});

export { GainerLoser };
