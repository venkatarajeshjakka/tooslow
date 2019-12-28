import moment from 'moment-timezone'

const formatCurrency = (input, currentFormatter) => {
  return `${currentFormatter} ${input}`;
};

const trimValue = input => {
  return Number(input).toFixed(2);
};

const formatDate = input => {
  return moment(input).tz('Asia/Kolkata').format('lll')
}

export { formatCurrency, trimValue ,formatDate };
