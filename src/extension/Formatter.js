import moment from "moment-timezone";

const formatCurrency = input =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(input);

const trimValue = input => Number(input).toFixed(2);

const formatDate = input =>
  moment(input)
    .tz("Asia/Kolkata")
    .format("lll");

const formatMarketCapital = input => {
  if (input >= 1e3) {
    var currencySymbol = "₹";
    var units = ["k", "M", "B", "T"];

    // Divide to get SI Unit engineering style numbers (1e3,1e6,1e9, etc)
    let unit = Math.floor((input.toFixed(0).length - 1) / 3) * 3;
    // Calculate the remainder
    var num = (input / ("1e" + unit)).toFixed(2);
    var unitname = units[Math.floor(unit / 3) - 1];

    // output number remainder + unitname
    return currencySymbol + num + unitname;
  }

  // return formatted original number
  return formatCurrency(input);
};

export { formatCurrency, trimValue, formatDate, formatMarketCapital };
