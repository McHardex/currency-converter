import * as currencyConstants from '../constants/currencyConstants'

const initalState = {
  currencies: {},
  exchangeRate: 0
}

export const currency = (state = initalState, action) => {

  switch(action.type) {
    case currencyConstants.FETCH_CURRENCIES_SUCCESS:
      return {...state, currencies: action.currencies.results}
    case currencyConstants.FETCH_EXCHANGE_RATE_SUCCESS:
      return {...state, exchangeRate: action.rate}
    default:
      return state
  }
}