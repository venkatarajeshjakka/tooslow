import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType
}) => {
  const { labelStyle, inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCorrect={false}
        keyboardType={keyboardType ? keyboardType : "default"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
    flex: 1
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 23,
    flex: 2,
    height: 25,
    width: 100
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
export { Input };
