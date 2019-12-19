const formatCurrency = (input, currentFormatter) => {
  return `${currentFormatter} ${input}`;
};

const trimValue = input => {
  return Number(input).toFixed(2);
};

export { formatCurrency, trimValue };
