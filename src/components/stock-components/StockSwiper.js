import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
const StockSwiper = () => {
  return (
    <View
      style={{
        backgroundColor: "red",

        borderRadius: 20,
        marginHorizontal: 15,
        marginVertical: 10
      }}
    >
      <View style={{ backgroundColor: "white", margin: 5 }}>
        <View>
          <Text
            style={{
              margin: 5,
              paddingTop: 10,
              fontSize: 20,
              paddingHorizontal: 10
            }}
          >
            Hello Heading
          </Text>
          <Text
            style={{
              margin: 5,
              paddingHorizontal: 10,
              paddingBottom: 10,
              fontSize: 12,
              color: "grey"
            }}
          >
            sub heading
          </Text>
        </View>
        <View>
          <Swiper style={styles.wrapper} height={300} loop={false}>
            <View style={styles.slide}>
              <Text>Hello Swiper</Text>
            </View>
            <View style={styles.slide}>
              <Text>Beautiful</Text>
            </View>
            <View style={styles.slide}>
              <Text>And simple</Text>
            </View>
          </Swiper>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "blue"
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export { StockSwiper };
