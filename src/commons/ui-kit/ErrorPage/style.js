import styled from 'styled-components'

const Container = styled.div`
  display: inline-flex;
  font-size: 13px;
  font-weight: 400;
  width: ${props => props.width || '250px'};
  margin: ${props => props.margin || '7px'};
  min-height: ${props => props.height || '60px'};
  padding: 10px ${props => props.padding || '16px'};
  color: ${props => props.theme.primaryTextColor};
  background-color: ${props => props.theme.primaryBackground};
  border: solid 0.5px ${props => props.theme.primaryBackground};
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  
  :hover {
    box-shadow: 0 0 5px 0 ${props => props.theme.primaryColorTrans};
    border: solid 0.5px ${props => props.theme.primaryColor};
  }

  & .title {
    font-size: 20px;
  }
`

export default Container
