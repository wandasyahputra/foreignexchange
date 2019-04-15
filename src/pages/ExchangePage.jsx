import React from 'react'
import styled from 'styled-components'

import Exchange from 'modules/Exchange'

const ExchangePage = (props) => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  const Title = styled.div`
    font-size: 28px;
    margin: 5px 20px;
  `
  return (
    <Content>
      <Title>ExchangePage</Title>
      <Exchange />
    </Content>
  )
}

export default ExchangePage
