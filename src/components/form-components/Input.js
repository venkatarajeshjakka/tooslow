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
    <View style={styles.field}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
    flex: 1,
    paddingLeft :5,
    fontFamily: 'Avenir',
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    lineHeight: 23,
    flex: 2,
    height: 25,
    width: 100
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    
  },
  field: {
    padding :10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0A84FF",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    margin: 15,
  }
});
export { Input };
