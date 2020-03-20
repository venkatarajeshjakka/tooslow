import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Chip = ({ onPress, style, value, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.chip, style]} onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.textStyle,textStyle]}>{value}</Text>
        <View style={styles.chipCloseBtn}>
          <Text style={styles.chipCloseBtnTxt}>x</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderColor: "#848787",
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 15,
    backgroundColor : '#F0EEEE'
  },
  chipCloseBtn: {
    borderRadius: 8,
    width: 16,
    height: 16,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  chipCloseBtnTxt: {
    color: "#555",
    paddingBottom: 3
  },
  textStyle :{
    fontFamily: 'Avenir',
    paddingHorizontal : 5,
    fontSize: 14,
  }
});
export { Chip };
