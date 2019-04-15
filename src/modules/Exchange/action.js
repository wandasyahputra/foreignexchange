import {
  FETCH_EXCHANGE_RATE,
  ADD_EXCHANGE_RATE
} from './constant'

const fetchExchangeRate = (data) => {
  return ({
    type: FETCH_EXCHANGE_RATE,
    data: data
  })
}
const addExchangeRate = (data) => {
  return ({
    type: ADD_EXCHANGE_RATE,
    data: data
  })
}

export {
  fetchExchangeRate,
  addExchangeRate
}
