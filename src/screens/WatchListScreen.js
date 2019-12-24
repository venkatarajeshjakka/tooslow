import React from "react";
import { View, Text, SafeAreaView, StyleSheet ,ScrollView} from "react-native";
import { Feather } from "@expo/vector-icons";
import Coin from "../components/Coin";
const WatchListScreen = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
        <Coin
          onPress={() => {}}
          symbol="Reliance"
          name="reliance Industries"
          price="1546"
          change= {-2.1}
        />
      </View>
      <View style={styles.container}>
        <Coin
          onPress={() => {}}
          symbol="SBI"
          name="SBIN"
          price="334"
          change= {-0.3}
        />
      </View>
      <View style={styles.container}>
        <Coin
          onPress={() => {}}
          symbol="Yes Bank"
          name="Yes Bank"
          price="51"
          change= {3.3}
        />
      </View>
    
    </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderColor: "#ddd",
    borderBottomWidth: 1
  }
});
WatchListScreen.navigationOptions = {
  title: "Watchlist",
  tabBarIcon: ({ tintColor }) => (
    <Feather name="bookmark" size={20} color={tintColor} />
  )
};

export default WatchListScreen;
