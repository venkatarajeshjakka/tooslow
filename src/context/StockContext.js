import createDataContext from "./createDataContext";
import { getStocks } from "../api/_MockData";
import _ from "underscore";
import Stock from "../api/Stock";

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
  dispatch({ type: "update_search_term", payload: searchTerm });
};
const clearSearch = dispatch => async () => {
  dispatch({ type: "clear_search" });
};

const clearSearchStockData = dispatch => async () => {
  dispatch({ type: "clear_search_Data" });
};

const get = dispatch => async stockCode => {
  stockCode = stockCode + ".NS";

  const baseUrl = `/get-nse-stocks?stockCode=${stockCode}`;

  try {
    var response = await Stock.get(baseUrl);
    var payload = response.data[stockCode];
    dispatch({ type: "get_stock_data", payload: payload });
  } catch (err) {}
};

export const { Provider, Context } = createDataContext(
  stockReducer,
  { searchResults, updateSearchTerm, clearSearch, get, clearSearchStockData },
  { results: null, errorMessage: "", searchTerm: "", searchStockData: null }
);