import { formatCurrency, formatMarketCapital } from "../extension/Formatter";
const companyEssentials = data => {
  const { marketCap } = data.price;

  const {
    priceToBook,
    bookValue,
    enterpriseValue,
    trailingEps
  } = data.defaultKeyStatistics;
  const { trailingPE, dividendYield } = data.summaryDetail;
  const { totalCash, totalDebt } = data.financialData;
  let arrayDataTargetPrice = [
    {
      label: "Market Capital",
      value: formatMarketCapital(marketCap)
    },
    {
      label: "P/E",
      value: trailingPE.toFixed(2)
    },
    {
      label: "P/B",
      value: priceToBook.toFixed(2)
    },
    {
      label: "Dividend Yield",
      value: `${(dividendYield * 100).toFixed(2)}%`
    },
    {
      label: "Book Value (TTM)",
      value: formatCurrency(bookValue)
    },
    {
      label: "Enterprise Value",
      value: formatMarketCapital(enterpriseValue)
    },
    {
      label: "Cash",
      value: formatMarketCapital(totalCash)
    },
    {
      label: "Debt",
      value: formatMarketCapital(totalDebt)
    },
    {
      label: "EPS (TTM)",
      value: formatCurrency(trailingEps.toFixed(2))
    }
  ];

  return arrayDataTargetPrice;
};
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
      value: `${formatCurrency(regularMarketDayLow)} - ${formatCurrency(
        regularMarketDayHigh
      )}`
    },
    {
      label: "52 Week Range",
      value: `${formatCurrency(fiftyTwoWeekLow)} - ${formatCurrency(
        fiftyTwoWeekHigh
      )}`
    }
  ];
  return keyStatisticsarray;
};
export { targetData, statisticsData, companyEssentials };
