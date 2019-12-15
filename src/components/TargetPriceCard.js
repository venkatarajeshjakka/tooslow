import React from "react";
import { Text,StyleSheet } from "react-native";
import Card from "./Card";
import Section from "./Section";
import {formatCurrency} from '../extension/Formatter'

const TargetPriceCard = ({ data,currencySymbol }) => {
  const { targetHighPrice, targetLowPrice, targetMeanPrice } = data;
  if(!targetMeanPrice)
  {
      return null;
  }
  return (
    <Card>
      <Section>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Target Price</Text>
      </Section>
      <Section>
        <Text style={styles.label}>Target High</Text>
        <Text style={styles.value}>
          {formatCurrency(targetHighPrice, currencySymbol)}
        </Text>
      </Section>

      <Section>
        <Text style={styles.label}>Target Low</Text>
        <Text style={styles.value}>
          {formatCurrency(targetLowPrice, currencySymbol)}
        </Text>
      </Section>

      <Section>
        <Text style={styles.label}>Target Mean</Text>
        <Text style={styles.value}>
          {formatCurrency(targetMeanPrice, currencySymbol)}
        </Text>
      </Section>
    </Card>
  );
};
const styles = StyleSheet.create({
    label :{
        flex : 1,
        fontSize : 16,
        
    },
    value :{
        flex : 1,
        fontSize : 16,
        fontWeight: "bold",
        textAlign: 'right'
    }
})
export default TargetPriceCard;
