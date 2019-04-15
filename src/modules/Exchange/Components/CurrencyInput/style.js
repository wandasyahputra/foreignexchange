import styled from 'styled-components'

const Container = styled.div`
  & > div {
    font-size: 12px;
    text-align: left;
    margin-left: 20px;
  }
  select {
    color: ${props => props.theme.primaryTextColor};
    border: none;
    outline: none;
    font-size: 24px;
    margin: 5px 20px;
    background: none;
    & > option {
      font-size: 14px;
      color: ${props => props.theme.secondaryTextColor};
    }
  }
  
  input {
    color: ${props => props.theme.primaryTextColor};
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
    text-align: right;
  }
`

export default Container
