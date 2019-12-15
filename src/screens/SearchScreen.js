import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { NavigationEvents } from "react-navigation";
import SearchBar from "../components/SearchBar";
import { Context as StockContext } from "../context/StockContext";
import SearchResults from "../components/SearchResults";

const SearchScreen = () => {
  const {
    updateSearchTerm,
    searchResults,
    clearSearch,
    state: { results, searchTerm }
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

        {results ? <SearchResults data={results} /> : null}
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
