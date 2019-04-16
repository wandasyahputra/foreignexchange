import React from 'react'
import PropTypes from 'prop-types'

import Container from './style'

const ForeignRateCard = (props) => {
  const {
    baseCode,
    currency,
    rate,
    value,
    deleteExchangeRate,
    ...rest
  } = props
  console.log(props)

  return (
    <Container {...rest} >
      <div>
        <div className="highlight">
          <div>{currency.code}</div>
          <div>{currency.rate * value}</div>
        </div>
        <div>{currency.code} - {currency[0].name}</div>
        <div>1 {baseCode} = {currency.rate}</div>
      </div>
      <div className="removeButton" onClick={deleteExchangeRate}>-</div>
    </Container>
  )
}

ForeignRateCard.defaultProps = {
  base: {},
  baseChange: undefined,
  value: 10,
  valueChange: undefined,
  currencyList: []
}

ForeignRateCard.propTypes = {
  base: PropTypes.objectOf(PropTypes.any),
  baseChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  valueChange: PropTypes.func.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.any)
}

export default ForeignRateCard
