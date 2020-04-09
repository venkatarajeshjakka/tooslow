import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Chip = ({ onPress, style, value, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.chip, style]} onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.textStyle, textStyle]}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderColor: "#848787",
    margin: 5,
    padding : 10,
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  textStyle: {
    fontFamily: "Avenir",
    paddingHorizontal: 10,
    fontSize: 14,
    color : '#0078ff',
    fontWeight : '500'
  }
});
export { Chip };
