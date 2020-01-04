import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from "react-native";
import { Context as StockContext } from "../context/StockContext";
import { Context as WatchListContext } from '../context/WatchListContext'
import { NavigationEvents } from "react-navigation";
import { trimValue, formatDate } from "../extension/Formatter";
import TargetPriceCard from "../components/TargetPriceCard";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";
import { targetData, statisticsData } from "../mapper/StockResultsMapper";
import SafeAreaView from "react-native-safe-area-view";


const SearchResultScreen = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");
  const {checkBookmark, updateBookmark ,state : {isBookmarked,watchListArray}} = useContext(WatchListContext)
  useEffect(() => {
    get(stockCode);
    checkBookmark(stockCode)
  }, []);
  console.log('stockCode',stockCode)
  console.log('isBookmarked',isBookmarked);
  console.log('watchListArray',watchListArray)
  
  const AnimatedIcon = Animatable.createAnimatableComponent(AntDesign);

  handleSmallAnimatedIconRef = ref => {
    this.smallAnimatedIcon = ref;
  };

  handleOnPressLike = () => {
    this.smallAnimatedIcon.bounceIn();
    
    updateBookmark(stockCode)
  };

  const {
    state: { searchStockData },
    get,
    clearSearchStockData
  } = useContext(StockContext); 

  const [modalVisible, setModalVisible] = useState(false);

  if (!searchStockData) {
    return <ActivityIndicator size="large" tyle={{ marginTop: 200 }} />;
  }
  if (searchStockData) {
    const {
      longName,
      regularMarketPrice,
      regularMarketChange,
      regularMarketChangePercent,
      regularMarketTime
    } = searchStockData.price;
    const { targetMeanPrice } = searchStockData.financialData;
    var fontColor = regularMarketChange > 0 ? "#008000" : "#ff0000";
    return (
      <ScrollView style={styles.container}>
        <NavigationEvents onWillBlur={clearSearchStockData} />

        <View style={styles.priceContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>{longName}</Text>
          </View>

          <Text style={[styles.marketPrice, { color: fontColor }]}>
            {regularMarketPrice}
          </Text>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <Text style={[styles.marketPriceChange, { color: fontColor }]}>
              {`${trimValue(regularMarketChange)}(${trimValue(
                regularMarketChangePercent * 100
              )}%)`}
            </Text>
            <Text style={{ paddingHorizontal: 25 }}>
              {formatDate(regularMarketTime)}
            </Text>
            <TouchableOpacity onPress={handleOnPressLike}>
              <AnimatedIcon
                ref={handleSmallAnimatedIconRef}
                name={isBookmarked ? "heart" : "hearto"}
                color={isBookmarked ? "#e92f3c" : "#515151"}
                size={30}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {}}
        >
          <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 5 }}>
              <View style={styles.close}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <AntDesign name="close" size={25} />
                </TouchableHighlight>
              </View>

              <TargetPriceCard
                data={statisticsData(searchStockData)}
                heading="Key Statistics"
              />
            </View>
          </SafeAreaView>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <TargetPriceCard
            data={statisticsData(searchStockData)}
            heading="Key Statistics"
          />
        </TouchableOpacity>

        {targetMeanPrice ? (
          <TargetPriceCard
            data={targetData(searchStockData)}
            heading="Target Price"
          />
        ) : null}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EEEE"
  },
  heading: {
    paddingTop: 5,
    fontSize: 19,
    marginHorizontal: 5,
    fontFamily: "Avenir"
  },
  priceContainer: {
    flexDirection: "column",
    position: "relative",
    paddingHorizontal: 15,
    alignContent: "stretch",
    backgroundColor: "#fff",
    paddingBottom: 5
  },
  icon: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    flex: 1
  },
  marketPrice: {
    padding: 5,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Avenir"
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around"
  },
  marketPriceChange: {
    padding: 5,
    flex: 2,
    fontSize: 16,
    fontFamily: "Avenir"
  },
  close: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginRight: 5,
    paddingRight: 10
  }
});

SearchResultScreen.navigationOptions = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");
  return {
    title: stockCode
  };
};
export default SearchResultScreen;
