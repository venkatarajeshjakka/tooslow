import { formatCurrency } from '../extension/Formatter'

const targetData = data => {
  const { currencySymbol } = data.price;

  const {
    targetHighPrice,
    targetLowPrice,
    targetMeanPrice
  } = data.financialData;

  let arrayDataTargetPrice = [
    {
      label: "Target High",
      value: formatCurrency(targetHighPrice, currencySymbol)
    },
    {
      label: "Target Low",
      value: formatCurrency(targetLowPrice, currencySymbol)
    },
    {
      label: "Target Mean",
      value: formatCurrency(targetMeanPrice, currencySymbol)
    }
  ];

  return arrayDataTargetPrice;
};

const statisticsData = data => {
  const { fiftyTwoWeekHigh, fiftyTwoWeekLow } = data.summaryDetail;

  const {
    regularMarketOpen,
    regularMarketDayLow,
    regularMarketDayHigh,
    regularMarketPreviousClose,

    currencySymbol
  } = data.price;

  let keyStatisticsarray = [
    {
      label: "Previous Close",
      value: formatCurrency(regularMarketPreviousClose, currencySymbol)
    },
    {
      label: "Open",
      value: formatCurrency(regularMarketOpen, currencySymbol)
    },
    {
      label: "Day's Range",
      value: `${formatCurrency(
        regularMarketDayLow,
        currencySymbol
      )} - ${formatCurrency(regularMarketDayHigh, currencySymbol)}`
    },
    {
      label: "52 Week Range",
      value: `${formatCurrency(
        fiftyTwoWeekLow,
        currencySymbol
      )} - ${formatCurrency(fiftyTwoWeekHigh, currencySymbol)}`
    }
  ];
  return keyStatisticsarray;
};
export { targetData, statisticsData };
