import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/NavigationRef";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SearchResultScreen from "./src/screens/SearchResultScreen";
import AccountScreen from "./src/screens/AccountScreen";
import WatchListScreen from "./src/screens/WatchListScreen";
import { Provider as StockProvider } from "./src/context/StockContext";
import { Provider as WatchListProvider } from "./src/context/WatchListContext";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
const searchFlow = createStackNavigator({
  Search: SearchScreen,
  SearchResult: SearchResultScreen
});

searchFlow.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    title: "Search",
    tabBarVisible,
    tabBarIcon: ({ tintColor }) => (
      <Feather name="search" size={20} color={tintColor} />
    )
  };
};

const watchListFlow = createStackNavigator({
  WatchList: WatchListScreen,
  StockResult: SearchResultScreen
});

watchListFlow.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    title: "Watchlist",
    tabBarVisible,
    tabBarIcon: ({ tintColor }) => (
      <Feather name="bookmark" size={20} color={tintColor} />
    )
  };
};

const home = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      title: "tooslow",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

home.navigationOptions = {
  title: "Home",
  tabBarIcon: ({ tintColor }) => (
    <Feather name="home" size={20} color={tintColor} />
  )
};

var bottomTabNavigator = createBottomTabNavigator(
  {
    home,
    searchFlow,
    watchListFlow,
    Account: AccountScreen
  },
  {
    navigationOptions: {
      header: {
        visible: true
      }
    }
  }
);

const App = createAppContainer(bottomTabNavigator);

export default () => {
  return (
    <ActionSheetProvider>
      <StockProvider>
        <WatchListProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </WatchListProvider>
      </StockProvider>
    </ActionSheetProvider>
  );
};
