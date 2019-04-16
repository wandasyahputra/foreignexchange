import React from 'react'
import { shallow } from 'enzyme'

import CurrencyInput from './index'

describe('Test CurrencyInput', () => {
  it('renders without crashing', () => {
    shallow(<CurrencyInput />)
  })
})
