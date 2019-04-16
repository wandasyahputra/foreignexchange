import React from 'react'
import PropTypes from 'prop-types'

import Container from './style'

const CurrencyInput = (props) => {
  const {
    base,
    baseChange,
    currencyList,
    value,
    valueChange,
    ...rest
  } = props

  return (
    <Container {...rest} >
      <div>{base.code} - {base.name}</div>
      <select onChange={baseChange} defaultValue={base.code}>
        {currencyList.map((item, key) => (
          <option key={key}>{item.code}</option>
        ))}
      </select>
      <input type="number" min="0" value={value} onChange={valueChange} />
    </Container>
  )
}

CurrencyInput.defaultProps = {
  base: {},
  baseChange: undefined,
  value: 10,
  valueChange: undefined,
  currencyList: []
}

CurrencyInput.propTypes = {
  base: PropTypes.objectOf(PropTypes.any),
  baseChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  valueChange: PropTypes.func.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.any)
}

export default CurrencyInput
