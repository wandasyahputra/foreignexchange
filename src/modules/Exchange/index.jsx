import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import ErrorPage from 'commons/ui-kit/ErrorPage'
import Toast from 'commons/ui-kit/Toast'
import { FETCH_LATEST_RATE } from 'url/index'

import {
  fetchExchangeRate,
  addExchangeRate
} from './action'
import { CURRENCY_LIST } from './constant'


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
      showToast: false,
      baseCurrency: CURRENCY_LIST[0].code,
      selectedCurrency: [CURRENCY_LIST[1].code,CURRENCY_LIST[2].code,CURRENCY_LIST[3].code],
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
    console.log('here')
    const { baseCurrency } = this.state
    this.setState(this.loadingState)
    try {
      const res = await axios({ method: "get", url: FETCH_LATEST_RATE(baseCurrency, currency.join(',')) })
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


  componentDidMount() {
    const { validUntil } = this.props
    const { selectedCurrency } = this.state
    if (validUntil < Date.now()) {
      this.fetchRemoteData(selectedCurrency, 'refresh')()
    }
  }

  render() {
    // const {
    //   exchangeRateList
    // } = this.props
    const {
      // baseCurrency,
      selectedCurrency,
      showToast,
      lastMethod,
      type,
      msg,
      isLoading,
      isError
    } = this.state
    return (
      <React.Fragment>
        {!isLoading && isError && (
          <ErrorPage reFetch={this.fetchRemoteData(selectedCurrency, lastMethod)()}  />
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
  addExchangeRate: (data) => dispatch(addExchangeRate(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Exchange)
