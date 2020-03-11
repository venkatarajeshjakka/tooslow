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
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2AC062",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    margin: 5,
    paddingHorizontal: 10
  },

  text: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#FFFFFF"
  }
});
export default Button;
