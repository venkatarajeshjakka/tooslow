import React, { useEffect, useContext, useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from "react-native";
import { Context as StockContext } from "../context/StockContext";
import { Context as WatchListContext } from "../context/WatchListContext";
import { NavigationEvents } from "react-navigation";
import TargetPriceCard from "../components/TargetPriceCard";
import { AntDesign } from "@expo/vector-icons";
import { targetData, statisticsData } from "../mapper/StockResultsMapper";
import SafeAreaView from "react-native-safe-area-view";
import { PriceSummary } from "../components/stock-components";

const SearchResultScreen = ({ navigation }) => {
  const stockCode = navigation.getParam("stockCode");
  const {
    checkBookmark,
    updateBookmark,
    state: { isBookmarked }
  } = useContext(WatchListContext);
  useEffect(() => {
    get(stockCode);
    checkBookmark(stockCode);
  }, []);

  handleOnPressLike = () => {
    updateBookmark(stockCode);
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

    return (
      <ScrollView style={styles.container}>
        <NavigationEvents onWillBlur={clearSearchStockData} />

        <PriceSummary
          longName={longName}
          regularMarketPrice={regularMarketPrice}
          regularMarketChange={regularMarketChange}
          regularMarketChangePercent={regularMarketChangePercent}
          regularMarketTime={regularMarketTime}
          handleOnPressLike={handleOnPressLike}
          isBookmarked={isBookmarked}
          onPressAdd={() => {}}
        />

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
