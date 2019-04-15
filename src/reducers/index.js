import { combineReducers } from 'redux'

import exchangeData from 'modules/Exchange/reducer'

export default combineReducers({
  exchangeRate: exchangeData
})
