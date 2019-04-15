import {
  FETCH_EXCHANGE_RATE,
  ADD_EXCHANGE_RATE,
  DELETE_EXCHANGE_RATE
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
const deleteExchangeRate = (data) => {
  return ({
    type: DELETE_EXCHANGE_RATE,
    data: data
  })
}

export {
  fetchExchangeRate,
  addExchangeRate,
  deleteExchangeRate
}
