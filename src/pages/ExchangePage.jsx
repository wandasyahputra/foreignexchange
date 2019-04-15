import React from 'react'
import styled from 'styled-components'

import Exchange from 'modules/Exchange'

const ExchangePage = (props) => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
    display: block;
    max-width: 500px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  `
  const Title = styled.div`
    font-size: 10px;
    margin: 10px 0px;
    width: 100%;
    text-align: center;
  `
  return (
    <Content>
      <Title>Foreign Exchange</Title>
      <Exchange />
    </Content>
  )
}

export default ExchangePage
