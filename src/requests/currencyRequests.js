import { getApi } from '../helpers/utils'
// var https = require('https');

export default {
  getCurrencies(){
    return getApi('GET', 'https://free.currencyconverterapi.com/api/v5/currencies')
  },
  getExchangeRate(query) {
    return getApi('GET', `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`)
  }
}
