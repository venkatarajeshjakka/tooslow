import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const GradientButton = ({ onPress, text }) => {
  return (
    <View style={{ margin: 5, flex: 1 }}>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={["#EFBB35", "#4AAE9B"]}
        style={{ borderRadius: 5 }}
      >
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 5,
    height: 40
  },
  buttonText: {
    marginTop: 4,
    marginBottom : 5,
    padding: 10,
    textAlign: "center",
    backgroundColor: "transparent",
    color: "#008f68",
    fontSize: 16,
  }
});
export { GradientButton };
