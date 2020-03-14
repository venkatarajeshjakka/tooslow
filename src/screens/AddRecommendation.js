import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Input} from "../components/form-components";
const AddRecommendation = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");
  const [targetPrice, setTargetPrice] = useState("");
  const [broker, setBroker] = useState("");
  return (
    <View style={styles.container}>
      <Text>Recomendation Page {stockCode}</Text>
      <View style={styles.field}>
        <Input
          label="Broker :"
          secureTextEntry={false}
          value={broker}
          onChangeText={input => {
            setBroker(input);
          }}
          placeholder="Broker Name .."
        />
      </View>
      <View style={styles.field}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  field: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#6a0dad",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    marginHorizontal: 15,
    marginTop: 20
  },
  container: {
    flex: 1
  }
});
export default AddRecommendation;
