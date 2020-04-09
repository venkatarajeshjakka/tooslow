import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { navigate } from "../../NavigationRef";
import { Icon } from '../common'

const IndividualSlide = ({ name, change }) => {
  let iconName = change > 0 ? "arrowup" : "arrowdown";
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.stockCode}>{name}</Text>

        <View style={styles.right}>
          <Icon
            name={iconName}
            
          />

          <Text style={styles.value}>{change}%</Text>
        </View>
      </View>
    </View>
  );
};
const Slide = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.stockCode}
      scrollEnabled={false}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigate("SearchResult", { stockCode: item.stockCode });
            }}
          >
            <IndividualSlide name={item.stockName} change={item.change} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#ddd"
  },
  section: {
    paddingTop: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
    paddingHorizontal: 20
  },
  stockCode: {
    flex: 2,
    fontSize: 18,
    fontWeight: "400",
    color: "#0078ff"
  },
  value: {
    fontSize: 16
  },
  right: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row"
  }
});
export default Slide;

export { Slide };
