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
  & > div:first-of-type {
    flex-grow: 1;
  }

  & .removeButton {
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

  & .highlight {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    & > div {
      flex-grow: 1;
      text-align: left;
      &:last-of-type {
        text-align: right;
      }
    }
  }
`

export default Container
