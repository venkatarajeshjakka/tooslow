import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import Card from "./Card";

import { CardHeader ,Section } from "./common";
const TargetPriceCard = ({ data, heading }) => {
  return (
    <View style={styles.container}>
      <Card>
        <CardHeader heading={heading} />
        <FlatList
          data={data}
          keyExtractor={item => item.label}
          renderItem={({ item }) => {
            return (
              <Section>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </Section>
            );
          }}
        />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Avenir"
  },
  value: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
    fontFamily: "Avenir"
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 5,
    marginTop: 20,
    marginHorizontal: 10
  }
});
export default TargetPriceCard;
