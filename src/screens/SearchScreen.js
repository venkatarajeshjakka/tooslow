import React, { useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import SearchBar from "../components/SearchBar";
import { Context as StockContext } from "../context/StockContext";
import SearchResults from "../components/SearchResults";
import { Chip } from "../components/form-components";
const TopSearchResults = ({ data }) => {
  if (data) {
    return (
      <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {data.map((item, key) => {
            return (
              <Chip
                key={key}
                value={item}
                style={{ backgroundColor: "#E1EFFF" }}
                onPress={() => alert(`u pressed chip`)}
              />
            );
          })}
        </View>
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
