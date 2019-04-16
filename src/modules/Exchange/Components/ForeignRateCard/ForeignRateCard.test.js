import React from 'react'
import { shallow } from 'enzyme'

import ForeignRateCard from './index'

describe('Test ForeignRateCard', () => {
  it('renders without crashing', () => {
    shallow(<ForeignRateCard />)
  })
})
