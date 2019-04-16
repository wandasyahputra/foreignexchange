import React from 'react'
import { shallow } from 'enzyme'

import NewExchangeCurrency from './index'

describe('Test NewExchangeCurrency', () => {
  it('renders without crashing', () => {
    shallow(<NewExchangeCurrency />)
  })
})
