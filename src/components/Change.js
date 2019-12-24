import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const getBadgeStyles = value => [
  styles.badge,
  value < 0 ? styles.bad : value > 0 ? styles.good : styles.same
];
const Change = ({value}) => {
  

  return (
    <View style={getBadgeStyles(value)}>
    <AntDesign
        name={value < 0 ? "caretdown" : "caretup"}
        style={styles.icon}
      />
      <Text style={styles.value} numberOfLines={1}>
        {`${value} %`}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  badge: {
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 5,
    minHeight: 16,
    
  },
  good: { backgroundColor: "#4CAF50" },
  bad: { backgroundColor: "#FF5505" },
  same: { backgroundColor: "#F5A623" },
  value: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 14,
    marginTop: 0,
    paddingLeft : 5
  },
  icon: {
    fontSize: 18,
    lineHeight: 16,
    marginRight: 2,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    textAlign: "center"
  }
});
export default Change;
