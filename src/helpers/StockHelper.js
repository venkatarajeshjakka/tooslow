import underscore from "underscore";

const stockReturns = historyArray => {
  var current = underscore.first(historyArray);

  var closePrice = current.close;

  var weeklyArray = underscore.first(historyArray, 5);
  var weekly = underscore.last(weeklyArray);

  var weeklyPrice = weekly.close;

  var weeklyPriceChange = changePercentage(closePrice, weeklyPrice);

  var monthly = underscore.last(historyArray);
  var monthlyPrice = monthly.close;

  var monthPriceChange = changePercentage(closePrice, monthlyPrice);

  return { weeklyPriceChange, monthPriceChange };
};

const changePercentage = (current, previous) => {
  var change = parseFloat(current) - parseFloat(previous);
  var changePercentage = (change / previous) * 100;

  return changePercentage.toFixed(2);
};
export { stockReturns, changePercentage };
