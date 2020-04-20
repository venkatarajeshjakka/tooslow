import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Card from "./Card";
import { CardHeader, Section } from "./common";
const RenderList = ({ data }) => {
  if (data && data.length > 1) {
    return (
      <View>
        {data.map((item, key) => {
          return (
            <Section key={key}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </Section>
          );
        })}
      </View>
    );
  }
};
const TargetPriceCard = ({ data, heading }) => {
  return (
    <View style={styles.container}>
      <Card>
        <CardHeader heading={heading} />

        <RenderList data={data} />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Avenir"
  },
  value: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
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
