import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, title, textStyle, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2AC062",
    margin: 5,
    paddingHorizontal: 10
  },

  text: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  }
});
export { Button };
