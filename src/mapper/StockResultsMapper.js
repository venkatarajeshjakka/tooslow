import { formatCurrency, formatMarketCapital } from "../extension/Formatter";

const targetData = data => {
  const {
    targetHighPrice,
    targetLowPrice,
    targetMeanPrice
  } = data.financialData;

  let arrayDataTargetPrice = [
    {
      label: "Target High",
      value: formatCurrency(targetHighPrice)
    },
    {
      label: "Target Low",
      value: formatCurrency(targetLowPrice)
    },
    {
      label: "Target Mean",
      value: formatCurrency(targetMeanPrice)
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
    marketCap
  } = data.price;

  let keyStatisticsarray = [
    {
      label: "Previous Close",
      value: formatCurrency(regularMarketPreviousClose)
    },
    {
      label: "Open",
      value: formatCurrency(regularMarketOpen)
    },
    {
      label: "Day's Range",
      value: `${formatCurrency(
        regularMarketDayLow
      )} - ${formatCurrency(regularMarketDayHigh)}`
    },
    {
      label: "52 Week Range",
      value: `${formatCurrency(
        fiftyTwoWeekLow
      )} - ${formatCurrency(fiftyTwoWeekHigh)}`
    },
    {
      label: "Market Capital",
      value: formatMarketCapital(marketCap)
    }
  ];
  return keyStatisticsarray;
};
export { targetData, statisticsData };
