import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import Item from "../Item";
import { navigate } from "../../NavigationRef";
const SearchResults = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.stockCode}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigate("SearchResult", { stockCode: item.stockCode });
              }}
            >
              <Item stockCode={item.stockCode} stockName={item.stockName} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SearchResults;

export { SearchResults };
