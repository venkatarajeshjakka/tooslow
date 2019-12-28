import React from "react";
import { View, StyleSheet } from "react-native";

const Section = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  }
});
export default Section;
