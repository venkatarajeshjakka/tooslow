import createDataContext from "./createDataContext";

import _ from "underscore";
import Stock from "../api/Stock";

const watchListReducer = (state, action) => {
  switch (action.type) {
    case "bookmark_check":
      return {
        ...state,
        isBookmarked: _.contains(state.watchListArray, action.payload)
      };
    case "bookmark_update":
      if (_.contains(state.watchListArray, action.payload)) {
        return {
          ...state,
          isBookmarked: false,
          watchListArray: state.watchListArray.filter(
            item => item !== action.payload
          )
        };
      }
      return {
        ...state,
        isBookmarked: true,
        watchListArray: [...state.watchListArray, action.payload]
      };

    default:
      return state;
  }
};

const checkBookmark = dispatch => async stockCode => {
  dispatch({ type: "bookmark_check", payload: stockCode });
};

const updateBookmark = dispatch => async stockCode => {
  dispatch({ type: "bookmark_update", payload: stockCode });
};
export const { Provider, Context } = createDataContext(
  watchListReducer,
  { checkBookmark, updateBookmark },
  { isBookmarked: false, watchListArray: ["SBIN", "RELIANCE"] }
);
