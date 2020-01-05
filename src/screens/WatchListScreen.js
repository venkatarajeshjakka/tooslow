import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Coin from "../components/Coin";
import { useActionSheet } from "@expo/react-native-action-sheet";

const WatchListScreen = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const onOpenActionSheet = () => {
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = [
      "Remove",
      "Add to Portfolio",
      "Add to Recommendation",
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
      }
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Coin
          onPress={() => {
            Alert.alert("action on press");
          }}
          longPress={() => {
            onOpenActionSheet();
          }}
          onSwipeFromLeft={() => alert("swiped from left")}
          onRightPress={() => alert("press on right")}
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
