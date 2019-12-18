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

export { targetData };
