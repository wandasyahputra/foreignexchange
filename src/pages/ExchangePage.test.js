import React from 'react'
import ReactDOM from 'react-dom'
import ExchangePage from './ExchangePage'
import { Provider } from "react-redux";
import store from 'stores/index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}><ExchangePage /></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
