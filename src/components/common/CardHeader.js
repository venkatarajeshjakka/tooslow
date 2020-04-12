import React from "react";
import { Text, StyleSheet } from "react-native";
import { Section } from "./Section";
const CardHeader = ({ heading }) => {
  return (
    <Section>
      <Text style={styles.heading}>{heading}</Text>
    </Section>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: "Avenir"
  }
});
export { CardHeader };
