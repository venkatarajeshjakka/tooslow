import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={styles.container}>
    <View>
      <Text>First</Text>
    </View>
  </View>
);

const SecondRoute = () => (
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
        <Text style={{ color: colorFocus, fontFamily: "Avenir" , fontWeight : '500' }}>
          {route.title}
        </Text>
      );
    }}
  />
);
const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Top Gainers" },
    { key: "second", title: "Top Losers" }
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0EEEE" }}>
      <ScrollView>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
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
  }
});
export default HomeScreen;
