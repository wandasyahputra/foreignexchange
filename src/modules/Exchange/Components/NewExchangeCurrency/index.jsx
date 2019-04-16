import React from 'react'
import PropTypes from 'prop-types'

import Container from './style'

const NewExchangeCurrency = (props) => {
  const {
    restExchangeCurrency,
    renderOption,
    changeRenderOption,
    addExchangeCurrency,
    ...rest
  } = props

  let inputValue = restExchangeCurrency.length > 0 ? (restExchangeCurrency[0].code) : ('')

  const changeInputValue = event => {
    inputValue = event.target.value
  }
  
  return (
    <Container {...rest} >
      {!renderOption && (
        <div onClick={changeRenderOption(true)}>Add more currency</div>
      )}
      <div className="options">
      {renderOption && (
        <select onChange={changeInputValue}>
          {restExchangeCurrency.map((item, key) => (
            <option>{item.code}</option>
          ))}
        </select>
      )}
      </div>
      <div>
        <div onClick={addExchangeCurrency(inputValue)} className="check">✔</div>
        <div onClick={changeRenderOption(false)} className="cancel">✖</div>
      </div>
    </Container>
  )
}

NewExchangeCurrency.defaultProps = {
  base: {},
  baseChange: undefined,
  value: 10,
  valueChange: undefined,
  currencyList: []
}

NewExchangeCurrency.propTypes = {
  base: PropTypes.objectOf(PropTypes.any),
  baseChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  valueChange: PropTypes.func.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.any)
}

export default NewExchangeCurrency
