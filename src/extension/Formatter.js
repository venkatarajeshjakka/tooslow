import moment from "moment-timezone";

const formatCurrency = (input) =>  new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2
}).format(input);

const trimValue = input => Number(input).toFixed(2);


const formatDate = input =>  moment(input)
    .tz("Asia/Kolkata")
    .format("lll");

const formatMarketCapital = input => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(input);
};

export { formatCurrency, trimValue, formatDate, formatMarketCapital };
