import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 10,
    paddingHorizontal: 5,
    paddingTop: 5
  }
});
export default Card;
