import React, { useContext } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import SearchBar from "../components/SearchBar";
import { Context as StockContext } from "../context/StockContext";
import SearchResults from "../components/SearchResults";
import { Chip } from "../components/form-components";
const TopSearchResults = ({ data }) => {
  if (data) {
    console.log(data);
    return (
      <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "flex-start"
          }}
          contentContainerStyle={{ marginHorizontal: 10 }}
          horizontal={false}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <Chip
                value={item}
                style={{ backgroundColor: "#E1EFFF" }}
                onPress={() => alert(`u pressed chip`)}
              />
            );
          }}
        />
      </View>
    );
  } else return null;
};
const SearchScreen = () => {
  const {
    updateSearchTerm,
    searchResults,
    clearSearch,
    state: { results, searchTerm, topSearchedStock }
  } = useContext(StockContext);

  return (
    <SafeAreaView>
      <>
        <NavigationEvents onWillBlur={clearSearch} />
        <SearchBar
          onTermSubmit={() => searchResults(searchTerm)}
          term={searchTerm}
          onTermChange={updateSearchTerm}
        />

        {results && searchTerm ? (
          <SearchResults data={results} />
        ) : (
          <TopSearchResults data={topSearchedStock} />
        )}
      </>
    </SafeAreaView>
  );
};
SearchScreen.navigationOptions = () => {
  return {
    header: () => null
  };
};
export default SearchScreen;
