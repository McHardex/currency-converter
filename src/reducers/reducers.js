import { combineReducers } from 'redux'
import { currency } from './curenciesReducer'

const reducers = combineReducers({
  currency
})

export { reducers }