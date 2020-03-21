import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../components/form-components";
const AddRecommendation = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");
  const [targetPrice, setTargetPrice] = useState("");
  const [broker, setBroker] = useState("");
  return (
    <View style={styles.container}>
      <Text>Recomendation Page {stockCode}</Text>

      <Input
        label="Broker :"
        secureTextEntry={false}
        value={broker}
        onChangeText={input => {
          setBroker(input);
        }}
        placeholder="Broker Name .."
      />

      <Input
        label="Target :"
        secureTextEntry={false}
        value={targetPrice}
        onChangeText={input => {
          setTargetPrice(input);
        }}
        placeholder="Target Price .."
        keyboardType={"numeric"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default AddRecommendation;
