import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import ErrorPage from 'commons/ui-kit/ErrorPage'
import Toast from 'commons/ui-kit/Toast'
import { FETCH_LATEST_RATE } from 'url/index'

import CurrencyInput from './Components/CurrencyInput'
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
      isLoading: false,
      isError: false,
      baseCurrency: CURRENCY_LIST[0],
      selectedCurrency: [CURRENCY_LIST[1].code,CURRENCY_LIST[2].code,CURRENCY_LIST[3].code],
      value: 10,
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

  onDataFetched = (data, mode) => {
    const { fetchExchangeRate, addExchangeRate } = this.props
    this.setState({
      isLoading: false
    })
    if (mode === 'refresh') {
      return fetchExchangeRate(data, Date.now() + 300000)
    }
    return addExchangeRate(data)
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
    this.setState({value: event.target.value})
  }

  componentDidMount() {
    const { validUntil } = this.props
    const { selectedCurrency, isError, isLoading } = this.state
    if (validUntil < Date.now() && !isError && !isLoading) {
      this.fetchRemoteData(selectedCurrency, 'refresh')()
    }
  }

  render() {
    // const {
    //   exchangeRateList
    // } = this.props
    const {
      baseCurrency,
      selectedCurrency,
      lastMethod,
      value,
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
        {/* <ItemList /> */}
        {!isLoading && isError && (
          <ErrorPage reFetch={this.fetchRemoteData(selectedCurrency, lastMethod)}  />
        )}
        {showToast && <Toast type={type} msg={msg} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ exchangeRate }) => ({
  exchangeRateList: exchangeRate.data
})

const mapDispatchToProps = dispatch => ({
  fetchExchangeRate: (data) => dispatch(fetchExchangeRate(data)),
  addExchangeRate: (data) => dispatch(addExchangeRate(data)),
  deleteExchangeRate: (data) => dispatch(deleteExchangeRate(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Exchange)
