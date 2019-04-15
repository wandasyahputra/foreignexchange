import React from 'react'
import PropTypes from 'prop-types'

import Container from './style'

const Card = (props) => {
  const {
    reFetch,
    ...rest
  } = props

  return (
      <Container {...rest} >
        <div>
          <div>Can't connect to server, please check you connection and try again</div>
          <div onClick={reFetch}>Refresh</div>
        </div>
      </Container>
    )
}

Card.defaultProps = {
  className: null,
  onClick: null,
  data: {}
}

Card.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.any)
}

export default Card
