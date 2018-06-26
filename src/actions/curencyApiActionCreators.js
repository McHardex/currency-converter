import currencyRequests from '../requests/currencyRequests'
import * as currencyConstants from '../constants/currencyConstants'

const fetchCurrencies = () => {
  return (dispatch) => {
    return (
      currencyRequests
        .getCurrencies()
        .then(response => response.json())
        .then(response => dispatch(fetchCurrenciesSuccess(response)))
        .catch(error => console.log(error))
    )
  }
}

const fetchCurrenciesSuccess = (result) => {
  return {
    type: currencyConstants.FETCH_CURRENCIES_SUCCESS,
    currencies: result
  }
}

const fetchExchangeRateSuccess = (result, query) => {
  return {
    type: currencyConstants.FETCH_EXCHANGE_RATE_SUCCESS,
    rate: result[query].val.toFixed(2)
  }
}

const getExchangeRate = (query) => {
  return (dispatch) => {
    return (
      currencyRequests
        .getExchangeRate(query)
        .then(response => response.json())
        .then(response => dispatch(fetchExchangeRateSuccess(response, query)))
        .catch(error => console.log(error))
    )
  }
}

export { fetchCurrencies, getExchangeRate }