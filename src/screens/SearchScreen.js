import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { NavigationEvents } from "react-navigation";
import SearchBar from "../components/SearchBar";
import { Context as StockContext } from "../context/StockContext";
import SearchResults from "../components/stock-components/SearchResults";
import { TopSearchResults } from "../components/stock-components";

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
