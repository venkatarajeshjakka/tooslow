import createDataContext from "./createDataContext";
import { getStocks } from "../api/_MockData";
import _ from "underscore";
import Stock from "../api/Stock";
import { AsyncStorage } from "react-native";
const stockReducer = (state, action) => {
  switch (action.type) {
    case "search_resuls":
      return { ...state, results: action.payload };

    case "update_search_term":
      return { ...state, searchTerm: action.payload };

    case "clear_search":
      return { ...state, searchTerm: "", results: null };

    case "get_stock_data":
      return { ...state, searchStockData: action.payload };

    case "clear_search_Data":
      return { ...state, searchStockData: null };

    case "add_searched_stock":
      if (
        state.topSearchedStock &&
        _.contains(state.topSearchedStock, action.payload)
      ) {
        return state;
      }
      return {
        ...state,
        topSearchedStock: [...state.topSearchedStock, action.payload]
      };

    case "get_top_gainer":
      return { ...state, topGainers: action.payload };

    case "get_top_losser":
      return { ...state, topLosers: action.payload };

    case "get_yearly_high":
      return { ...state, yearlyHigh: action.payload };

    case "get_yearly_low":
      return { ...state, yearlyLow: action.payload };

    case "get_monthly_active":
      return { ...state, monthlyActive: action.payload };

    case "get_equity_list":
      return { ...state, equityList: action.payload };

    default:
      return state;
  }
};

const limit = 20;
const contains = (stock, query) => {
  const { stockCode, stockName } = stock;
  if (stockCode.toLowerCase() === query) {
    return true;
  } else if (stockCode.toLowerCase().includes(query)) {
    return true;
  } else if (stockName.toLowerCase().includes(query)) {
    return true;
  }

  return false;
};

const getFilteredStocks = (query, stocks) => {
  if (query.length) {
    const formattedQuery = query.toLowerCase();
    return _.filter(stocks, stock => {
      return contains(stock, formattedQuery);
    });
  }
};
const searchResults = dispatch => async searchTerm => {
  const stockData = getStocks();

  var filteredResults = getFilteredStocks(searchTerm, stockData);
  dispatch({ type: "search_resuls", payload: filteredResults.slice(0, limit) });
};

const updateSearchTerm = dispatch => async searchTerm => {
  if (searchTerm) {
    const stockData = getStocks();

    var filteredResults = getFilteredStocks(searchTerm, stockData);
    dispatch({
      type: "search_resuls",
      payload: filteredResults.slice(0, limit)
    });
  }

  dispatch({ type: "update_search_term", payload: searchTerm });
};
const clearSearch = dispatch => async () => {
  dispatch({ type: "clear_search" });
};

const clearSearchStockData = dispatch => async () => {
  dispatch({ type: "clear_search_Data" });
};

const get = dispatch => async stockCode => {
  dispatch({ type: "add_searched_stock", payload: stockCode });
  stockCode = stockCode + ".NS";

  const baseUrl = `/get-nse-stocks?stockCode=${stockCode}`;

  try {
    var response = await Stock.get(baseUrl);
    var payload = response.data[stockCode];
    dispatch({ type: "get_stock_data", payload: payload });
  } catch (err) {}
};

const getTopGainer = dispatch => async () => {
  const baseUrl = "/top-gainers";

  try {
    var response = await Stock.get(baseUrl);
    var payload = response.data;

    dispatch({ type: "get_top_gainer", payload: payload });
  } catch (err) {}
};

const getTopLosser = dispatch => async () => {
  const baseUrl = "/top-losers";

  try {
    var response = await Stock.get(baseUrl);
    var payload = response.data;
    dispatch({ type: "get_top_losser", payload: payload });
  } catch (err) {}
};

const getYearlyHigh = dispatch => async () => {
  const baseUrl = "/year-high";

  try {
    var response = await Stock.get(baseUrl);
    var payload = response.data;
    dispatch({ type: "get_yearly_high", payload: payload });
  } catch (err) {}
};

const getYearlyLow = dispatch => async () => {
  const baseUrl = "/year-low";

  try {
    var response = await Stock.get(baseUrl);
    var payload = response.data;
    dispatch({ type: "get_yearly_low", payload: payload });
  } catch (err) {}
};

const getMonthlyActive = dispatch => async () => {
  const baseUrl = "/monthly-active";

  try {
    var response = await Stock.get(baseUrl);
    var payload = response.data;
    dispatch({ type: "get_monthly_active", payload: payload });
  } catch (err) {}
};

const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return value;
    }
    return null;
  } catch (error) {
    // Error retrieving data
  }
};
const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    // Error saving data
  }
};
const getEquityList = dispatch => async () => {
  const baseUrl = "/equity-list";
  try {
    var response = await Stock.get(baseUrl);
    var payload = response.data;

    dispatch({ type: "get_equity_list", payload: payload });
  } catch (err) {}
};

export const { Provider, Context } = createDataContext(
  stockReducer,
  {
    searchResults,
    updateSearchTerm,
    clearSearch,
    get,
    clearSearchStockData,
    getTopGainer,
    getTopLosser,
    getYearlyHigh,
    getYearlyLow,
    getMonthlyActive,
    getEquityList
  },
  {
    results: null,
    errorMessage: "",
    searchTerm: null,
    searchStockData: null,
    topSearchedStock: ["TCS", "SBIN", "INFY", "BAJFINANCE", "RELAXO"],
    topGainers: null,
    topLosers: null,
    yearlyHigh: null,
    yearlyLow: null,
    monthlyActive: null,
    equityList: null
  }
);
