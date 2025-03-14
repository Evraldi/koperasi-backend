const moment = require('moment-timezone');

exports.formatDateTimeID = (date) => {
  return moment(date).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss');
};

exports.formatCurrencyIDR = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2
  }).format(amount);
};