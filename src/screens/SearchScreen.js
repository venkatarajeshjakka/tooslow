import React ,{ useContext }from 'react'
import { View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import SearchBar from '../components/SearchBar'
import { Context as StockContext } from '../context/StockContext'
import SearchResults from '../components/SearchResults'

const SearchScreen = () => {

   
    const {updateSearchTerm,searchResults,clearSearch,state:{results,searchTerm}} = useContext(StockContext)
    
    return (
        <View>
        <NavigationEvents
            onWillBlur ={clearSearch}
           />
            <SearchBar onTermSubmit={() => searchResults(searchTerm)}
            term={searchTerm} 
             onTermChange={updateSearchTerm}/>

             {results?<SearchResults data={results} /> : null}

        </View>
    )
}

export default SearchScreen
