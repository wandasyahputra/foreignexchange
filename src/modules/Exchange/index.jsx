import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import ErrorPage from 'commons/ui-kit/ErrorPage'
import Toast from 'commons/ui-kit/Toast'
import { FETCH_LATEST_RATE } from 'url/index'

import CurrencyInput from './Components/CurrencyInput'
import ForeignRateCard from './Components/ForeignRateCard'
import NewExchangeCurrency from './Components/NewExchangeCurrency'
import {
  fetchExchangeRate,
  addExchangeRate,
  deleteExchangeRate
} from './action'
import { CURRENCY_LIST } from './constant'
import {
  Header
} from './style'


class Exchange extends Component {
  static propTypes = {
    exchangeRateList: PropTypes.objectOf(PropTypes.any)
  }

  static defaultProps = {
    exchangeRateList: {}
  }
  
  constructor(props) {
    super(props)
    this.state = {
      exchangeRateList: {},
      isLoading: false,
      isError: false,
      baseCurrency: CURRENCY_LIST[0],
      selectedCurrency: [CURRENCY_LIST[1].code,CURRENCY_LIST[2].code,CURRENCY_LIST[3].code],
      value: 10,
      renderOption: false,
      showToast: false,
      type: '',
      msg: '',
      lastMethod: 'refresh'
      
    }
  }

  
  loadingState = {
    isLoading: true,
    isError: false,
    showToast: false
  }
  
  fetchRemoteData = (currency, mode) => async () => {
    const { baseCurrency } = this.state
    this.setState(this.loadingState)
    try {
      const res = await axios({ method: "get", url: FETCH_LATEST_RATE(baseCurrency.code, currency.join(',')) })
      this.onDataFetched(res.data, mode)
    } catch (e) {
      console.error(e);
      this.setState({
        isLoading: false,
        isError: true,
        lastMethod: mode
      })
      this.toggleShowToast('Failed to connect to server', 'failed')
    }
  }
  
  onDataFetched = (data, mode) => {
    const { fetchExchangeRate, addExchangeRate } = this.props
    if (mode === 'refresh') {
      fetchExchangeRate(data, Date.now() + 300000)
    } else {
      addExchangeRate(data)
    }
    return this.setState({
      isLoading: false
    })
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.exchangeRateList !== state.exchangeRateList) {
  //     return {
  //       exchangeRateList: props.exchangeRateList
  //     }
  //   }
  //   return null
  // }
  
  /**
   * Check currency not selected yet.
   *
   * @param  {array} currencyList     List array of object of supported currency.
   * @param  {array} selectedCurrency List array of already selected currency.
   * @return  {array} currency that not selected yet.
   */
  checkRestCurrency = (currencyList, selectedCurrency) => {
    return currencyList.filter((currency) => {
      return selectedCurrency.join(" ").indexOf(currency.code) < 0
    })
  }

  /**
   * Show Toast.
   *
   * @param  {String} msg    Message to show.
   * @param  {String} type   Type of message, 'fail' or 'success'.
   */
  toggleShowToast = (msg, type) => {
    this.setState({
      showToast: true,
      msg,
      type
    }, () => {
      setTimeout(() => {
        this.setState({
          showToast: false,
          msg: null,
          type: null,
        })
      }, 3000)
    })
  }

  /**
   * handling baseCurrency change.
   *
   * @param  {Object} event    Event from onChange of dropdown.
   */
  baseChange = event => {
    const { selectedCurrency } = this.state
    const newBase = CURRENCY_LIST.filter((item)=> {
      return item.code === event.target.value
    })
    this.setState({baseCurrency: newBase[0]},
      () => this.fetchRemoteData(selectedCurrency, 'refresh')()
    )
  }

  /**
   * handling value input Currency change.
   *
   * @param  {Object} event    Event from onChange of input.
   */
  valueChange = event => {
    if (event.target.value !== '' && event.target.value > -0.1 )
    this.setState({value: event.target.value})
  }

  /**
   * handling value input Currency change.
   *
   * @param  {Object} event    Event from onChange of input.
   */
  changeRenderOption = value => () => {
    this.setState({renderOption: value})
  }

  /**
   * handling delete exchange currency.
   *
   * @param  {String} code    currency code to be delete.
   */
  deleteExchange = code => () => {
    const { selectedCurrency } = this.state
    const { deleteExchangeRate } = this.props
    const newSelectedCurrency = []
    
    // remove from redux
    deleteExchangeRate(code)

    // remove from state
    for (let i = 0; i < selectedCurrency.length; i +=1) {
      if (selectedCurrency[i].code !== code) {
        newSelectedCurrency.push(selectedCurrency[i])
      }
    }
    this.setState({
      selectedCurrency: newSelectedCurrency
    })
  }

  /**
   * handling add exchange currency.
   *
   * @param  {String} code    currency code to be added.
   */
  addExchangeCurrency = code => () => {
    const { selectedCurrency } = this.state
    this.setState({
      isLoading: true
    })
    this.fetchRemoteData([code], 'adding')()
    selectedCurrency.push(code)
    this.setState({
      selectedCurrency
    })
  }

  componentDidMount() {
    const { exchangeRateList } = this.props
    const { selectedCurrency} = this.state
    const exchangeRateKeys = Object.keys(exchangeRateList)
    if (exchangeRateKeys.length === 0 && selectedCurrency.length > 0) {
      this.fetchRemoteData(selectedCurrency, 'refresh')()
    }
  }

  /**
   * render for exchange currency Card.
   *
   * @param   {Object}    exchangeRateList    list of exchange currency from redux.
   * @return  {Component} Card currency.
   */
  renderForeignRate = (exchangeRateList) => {
    const { baseCurrency, value } = this.state
    
    // get key and convert to array due to exchangeRateList is a object
    const key = Object.keys(exchangeRateList)

    return key.map((item, key) => {
      // finding currency name in constant CURRENCY_LIST by exchangeRateList key
      const currencyInformation = CURRENCY_LIST.filter((currency) => {
        return currency.code === item
      })
      Object.assign(currencyInformation, {code: item, rate: exchangeRateList[item]})
      return (
        <ForeignRateCard
          key={key}
          baseCode={baseCurrency.code}
          currency={currencyInformation}
          value={value}
          deleteExchangeRate={this.deleteExchange(item)}
        />
      )
    }
    )
  }

  render() {
    const {
      exchangeRateList
    } = this.props
    const {
      // exchangeRateList,
      baseCurrency,
      selectedCurrency,
      lastMethod,
      value,
      renderOption,
      showToast,
      type,
      msg,
      isLoading,
      isError
    } = this.state
    return (
      <React.Fragment>
        <Header>
          <CurrencyInput
            base={baseCurrency}
            currencyList={CURRENCY_LIST}
            baseChange={this.baseChange}
            value={value}
            valueChange={this.valueChange}
          />
        </Header>
        {exchangeRateList !== {} && (
          this.renderForeignRate(exchangeRateList)
        )}
        <NewExchangeCurrency
          renderOption={renderOption}
          changeRenderOption={this.changeRenderOption}
          restExchangeCurrency={this.checkRestCurrency(CURRENCY_LIST, selectedCurrency)}
          addExchangeCurrency={this.addExchangeCurrency}
        />
        {!isLoading && isError && (
          <ErrorPage reFetch={this.fetchRemoteData(selectedCurrency, lastMethod)}  />
        )}
        {showToast && <Toast type={type} msg={msg} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ exchangeRate }) => ({
  exchangeRateList: exchangeRate.data.rates
})

const mapDispatchToProps = dispatch => ({
  fetchExchangeRate: (data) => dispatch(fetchExchangeRate(data)),
  addExchangeRate: (data) => dispatch(addExchangeRate(data)),
  deleteExchangeRate: (data) => dispatch(deleteExchangeRate(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Exchange)
