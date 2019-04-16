import styled from 'styled-components'

const Container = styled.div`
  max-width: 350px;
  font-size: 10px;
  border-radius: 7px;
  padding: 10px;
  background: rgb(106,140,147);
  background: linear-gradient(345deg, rgba(106,140,147,1) 0%, rgba(80,80,80,1) 42%, rgba(0,0,0,1) 100%);
  margin: 15px auto;
  text-align:left;
  display: flex;
  align-items: center;
  
  & > .options {
    flex-grow: 1;
  }
  & > div:not(.options) {
    flex-direction:column;
  }

  & .cancel {
    display:inline-block;
    height: 20px;
    width: 20px;
    margin: 5px;
    font-size: 13px;
    font-weight: 600;
    color: white;
    background: #d40000;
    text-align: center;
    border-radius: 50%;
  }
  & .check {
    display:inline-block;
    height: 20px;
    width: 20px;
    margin: 5px;
    font-size: 13px;
    font-weight: 600;
    color: white;
    background: #5abd41;
    text-align: center;
    border-radius: 50%;

  }
  
  select {
    background: none;
    color: ${props => props.theme.primaryTextColor};
    border: none;
    width: 30%;
    font-size: 15px;
    outline: none;
    option {
      color: ${props => props.theme.secondaryTextColor};
    }
  }
`

export default Container
