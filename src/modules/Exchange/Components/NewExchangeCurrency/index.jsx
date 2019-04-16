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
    console.log(inputValue)
  }

  const postValue = () => {
    addExchangeCurrency(inputValue)()
  }
  
  return (
    <Container {...rest} >
      {!renderOption && (
        <div className='default' onClick={changeRenderOption(true)}>Add more currency</div>
      )}
      {renderOption && (
      <React.Fragment>
        <div className="options">
          <select onChange={changeInputValue} defaultValue={inputValue}>
            {restExchangeCurrency.map((item, key) => (
              <option key={key}>{item.code}</option>
            ))}
          </select>
        </div>
        <div>
          <div onClick={postValue} className="check">✔</div>
          <div onClick={changeRenderOption(false)} className="cancel">✖</div>
        </div>
      </React.Fragment>
      )}
    </Container>
  )
}

NewExchangeCurrency.defaultProps = {
  restExchangeCurrency: [],
  renderOption: false,
}

NewExchangeCurrency.propTypes = {
  restExchangeCurrency: PropTypes.arrayOf(PropTypes.any),
  renderOption: PropTypes.bool,
  changeRenderOption: PropTypes.func.isRequired,
  addExchangeCurrency: PropTypes.func.isRequired,
}

export default NewExchangeCurrency
