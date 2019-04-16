import {
  FETCH_EXCHANGE_RATE,
  ADD_EXCHANGE_RATE,
  DELETE_EXCHANGE_RATE
} from './constant'


const initialState = {
  data: {}
}

const exchangeRate = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE_RATE: {
      return {
        data: action.data
      }
    }
    case ADD_EXCHANGE_RATE: {
      return {
        data: {
          ...state.data,
          rate: Object.assign(state.data.rates, action.data.rates)
        }
      }
    }
    case DELETE_EXCHANGE_RATE: {
      delete state.data.rates[action.data]
      return {
        data: {
          ...state.data,
        }
      }
    }
    default: {
      return state
    }
  }
}

export default exchangeRate
