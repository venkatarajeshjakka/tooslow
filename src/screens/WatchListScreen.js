import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Coin from "../components/Coin";
const WatchListScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Coin
          onPress={() => {}}
          onSwipeFromLeft={() => alert("swiped from left")}
          onRightPress ={() => alert('press on right')}
          symbol="Reliance"
          name="reliance Industries"
          price="1546"
          change={-2.1}
        />

        <Coin
          onPress={() => {}}
          symbol="SBI"
          name="SBIN"
          price="334"
          change={-0.3}
        />

        <Coin
          onPress={() => {}}
          symbol="Yes Bank"
          name="Yes Bank"
          price="51"
          change={3.3}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
WatchListScreen.navigationOptions = {
  title: "Watchlist",
  tabBarIcon: ({ tintColor }) => (
    <Feather name="bookmark" size={20} color={tintColor} />
  )
};

export default WatchListScreen;
