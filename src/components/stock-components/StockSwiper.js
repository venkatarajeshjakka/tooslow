import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Swiper from "react-native-swiper";
import { CardHeader } from "../common";
import Slide from "./Slide";
import _ from "underscore";

const Spinner = () => {
  return (
    <View style={{ minHeight: 200, justifyContent: "center" }}>
      <ActivityIndicator size="large" animating={true} color="#007AFF" />
    </View>
  );
};
const DynamicSwiper = ({ slideData }) => {
  return (
    <Swiper style={styles.wrapper} height={250} loop={false}>
      {slideData.map((item, key) => {
        return <Slide key={key} data={item} />;
      })}
    </Swiper>
  );
};
const slidesArray = data => {
  return data && data.length > 0 ? _.chunk(data, 3) : null;
};
const StockSwiper = ({ data, heading, subHeading }) => {
  var slidesData = slidesArray(data);
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", margin: 5 }}>
        <View>
          <CardHeader heading={heading} />
          <Text style={styles.subheading}>{subHeading}</Text>
        </View>
        <View>
          {slidesData ? <DynamicSwiper slideData={slidesData} /> : <Spinner />}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    margin: 5
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 10
  },
  subheading: {
    margin: 5,
    paddingHorizontal: 10,

    fontSize: 16,
    color: "grey"
  }
});

export { StockSwiper };
