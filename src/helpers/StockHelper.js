import underscore from "underscore";
import moment from "moment";

const stockReturns = historyArray => {
  var current = underscore.first(historyArray);

  var closePrice = current.close;

  var weeklyDate = weeklyTradeDay();

  var weeklyArray = tradableArray(historyArray, weeklyDate);

  var weekly = underscore.last(weeklyArray);

  var weeklyPrice = weekly.close;

  var weeklyPriceChange = changePercentage(closePrice, weeklyPrice);

  var monthPriceChange = getMonthlyPriceChange(historyArray, 1, closePrice);

  var threeMonthPriceChange = getMonthlyPriceChange(
    historyArray,
    3,
    closePrice
  );

  var sixMonthPriceChange = getMonthlyPriceChange(historyArray, 6, closePrice);
  var ytdPriceChange = getMonthlyPriceChange(historyArray, 12, closePrice);

  return {
    weeklyPriceChange,
    monthPriceChange,
    threeMonthPriceChange,
    sixMonthPriceChange,
    ytdPriceChange
  };
};

const getMonthlyPriceChange = (historyArray, number, closePrice) => {
  var monthlyDate = monthlyTradeDay(number);

  var montlyPriceArray = tradableArray(historyArray, monthlyDate);
  var monthly = underscore.last(montlyPriceArray);
  var monthlyPrice = monthly.close;

  return changePercentage(closePrice, monthlyPrice);
};
const weeklyTradeDay = () => {
  var date = new Date();

  var currentDay = date.getDay();
  var difference = 7;
  if (currentDay === 0) {
    difference = difference + 2;
  }
  if (currentDay === 6) {
    difference = difference + 1;
  }

  return new moment().subtract(difference, "d");
};

const monthlyTradeDay = number => {
  var monthDay = moment().subtract(number, "M");

  var day = monthDay.day();

  var difference = 0;
  if (day === 0) {
    difference = difference + 2;
  }
  if (day === 6) {
    difference = difference + 1;
  }

  if (difference != 0) {
    return moment(monthDay).subtract(difference, "d");
  }

  return monthDay;
};

const changePercentage = (current, previous) => {
  var change = parseFloat(current) - parseFloat(previous);
  var changePercentage = (change / previous) * 100;

  return changePercentage.toFixed(2);
};

const tradableArray = (arrayValues, date) => {
  var array = underscore.filter(arrayValues, function(item) {
    return (
      moment(item.date).format("YYYY-MM-DD") >=
      moment(date).format("YYYY-MM-DD")
    );
  });

  return array;
};

const getTopGainersOrLoser = data => {
  var mappedData = underscore.map(data, function(item) {
    var keys = Object.keys(item);
    var itemData = item[keys[0]];
    const { longName, symbol, regularMarketChangePercent } = itemData.price;
    let stockCode = symbol.replace(".NS", "");
    return {
      stockCode,
      stockName: longName,
      change: regularMarketChangePercent
    };
  });

  var topGainer = underscore.filter(mappedData, function(item) {
    return item.change > 0;
  });

  topGainer = underscore
    .sortBy(topGainer, "change")
    .reverse()
    .slice(0, 5);
  var topLoser = underscore.filter(mappedData, function(item) {
    return item.change < 0;
  });

  topLoser = underscore.sortBy(topLoser, "change").slice(0, 5);
  return { topGainer, topLoser };
};

export { stockReturns, changePercentage, getTopGainersOrLoser };
