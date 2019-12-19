import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Context as StockContext } from "../context/StockContext";
import { NavigationEvents } from "react-navigation";
import { trimValue } from "../extension/Formatter";
import TargetPriceCard from "../components/TargetPriceCard";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import { targetData, statisticsData } from "../mapper/StockResultsMapper";
const SearchResultScreen = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");
  const [liked, setLiked] = useState(false);
  const AnimatedIcon = Animatable.createAnimatableComponent(AntDesign);

  handleSmallAnimatedIconRef = ref => {
    this.smallAnimatedIcon = ref;
  };

  handleOnPressLike = () => {
    this.smallAnimatedIcon.bounceIn();
    setLiked(!liked);
  };

  const {
    state: { searchStockData },
    get,
    clearSearchStockData
  } = useContext(StockContext);
  console.log(searchStockData);
  useEffect(() => {
    get(stockCode);
  }, []);

  if (!searchStockData) {
    return <ActivityIndicator size="large" tyle={{ marginTop: 200 }} />;
  }
  if (searchStockData) {
    const {
      longName,
      regularMarketPrice,
      regularMarketChange,
      regularMarketChangePercent
    } = searchStockData.price;
    const { targetMeanPrice } = searchStockData.financialData;
    return (
      <ScrollView>
        <View style={styles.container}>
          <NavigationEvents onWillBlur={clearSearchStockData} />

          <View style={styles.priceContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent: "space-around"
              }}
            >
              <Text style={styles.heading}>{longName}</Text>
            </View>
            <Text style={{ padding: 5 }}>{regularMarketPrice}</Text>
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Text style={{ padding: 5, flex: 3 }}>
                {`${trimValue(regularMarketChange)}(${trimValue(
                  regularMarketChangePercent * 100
                )}%)`}
              </Text>
              <TouchableOpacity onPress={handleOnPressLike}>
                <AnimatedIcon
                  ref={handleSmallAnimatedIconRef}
                  name={liked ? "heart" : "hearto"}
                  color={liked ? "#e92f3c" : "#515151"}
                  size={25}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TargetPriceCard
            data={statisticsData(searchStockData)}
            heading="Key Statistics"
          />

          {targetMeanPrice ? (
            <TargetPriceCard
              data={targetData(searchStockData)}
              heading="Target Price"
            />
          ) : null}
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1
  },
  heading: {
    padding: 5,
    fontSize: 18,
    marginHorizontal: 5
  },
  priceContainer: {
    flexDirection: "column",
    position: "relative",
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 15,
    alignContent: "stretch"
  },
  icon: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    flex: 1
  }
});

SearchResultScreen.navigationOptions = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");
  return {
    title: stockCode
  };
};
export default SearchResultScreen;
