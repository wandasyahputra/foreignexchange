import React from 'react'
import PropTypes from 'prop-types'

import { ToastWrapper } from './style'

const Toast = (props) => {
  const { msg, type } = props
  return (
    <ToastWrapper type={type}>
      <span>{msg}</span>
    </ToastWrapper>
  )
}

Toast.defaultProps = {
  theme: {}
}

Toast.propTypes = {
  theme: PropTypes.objectOf(String),
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired
}

export default Toast
