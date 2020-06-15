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
import {
  targetData,
  statisticsData,
  companyEssentials
} from "../mapper/StockResultsMapper";
import SafeAreaView from "react-native-safe-area-view";
import { PriceSummary, StockReturns } from "../components/stock-components";

const ModalSection = ({ staticalData, onPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 5 }}>
        <View style={styles.close}>
          <TouchableHighlight onPress={onPress}>
            <AntDesign name="close" size={25} />
          </TouchableHighlight>
        </View>

        <TargetPriceCard data={staticalData} heading="Key Statistics" />
      </View>
    </SafeAreaView>
  );
};

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
    getStockHistory(stockCode);
  }, []);

  handleOnPressLike = () => {
    updateBookmark(stockCode);
  };

  const {
    state: { searchStockData, stockHistoryArray },
    get,
    clearSearchStockData,
    getStockHistory
  } = useContext(StockContext);

  const [modalVisible, setModalVisible] = useState(false);

  if (!searchStockData) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
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
          <ModalSection
            staticalData={statisticsData(searchStockData)}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
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

        <TargetPriceCard
          data={companyEssentials(searchStockData)}
          heading="Company Essentials"
        />
        <View style={{ marginBottom : 30}}>
          {stockHistoryArray && stockHistoryArray.length > 0 ? (
            <StockReturns data={stockHistoryArray} />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
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
    title: stockCode,
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#0078ff",
    headerTitleStyle: {
      fontWeight: "500",
      fontFamily: "Avenir"
    }
  };
};
export default SearchResultScreen;
