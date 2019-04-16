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
      <div className="removeButton" onClick={deleteExchangeRate}>✖</div>
    </Container>
  )
}

ForeignRateCard.defaultProps = {
  value: 10,
}

ForeignRateCard.propTypes = {
  value: PropTypes.number,
  baseCode: PropTypes.string.isRequired,
  currency: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExchangeRate: PropTypes.func.isRequired
}

export default ForeignRateCard
