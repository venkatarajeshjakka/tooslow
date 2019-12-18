import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import Section from "./Section";

const TargetPriceCard = ({ data,heading }) => {
 
  
  return (
    <Card>
      <Section>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{heading}</Text>
      </Section>
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
  );
};
const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: 14
  },
  value: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right"
  }
});
export default TargetPriceCard;
