import React from "react";
import { View, StyleSheet } from "react-native";

const Panel = ({ children }) => {
  return <View style={styles.panel}>{children}</View>;
};
const styles = StyleSheet.create({
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: "#f7f5eee8"
  }
});
export { Panel };
