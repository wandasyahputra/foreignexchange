import styled from 'styled-components'

const ToastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 20px;
  z-index: 10002;
  padding: 0 16px;
  height: 48px;
  width: auto;
  border-radius: 5px;
  color: ${props => props.theme.primaryBackground};
  background-color: ${props => props.type === 'success' ? props.theme.toastSuccess : props.theme.toastError};

  > span {
    font-size: 13px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: 0.3px;
  }

  > div {
    display: flex;
    margin-left: 20px;
    width: 10px;
    height: 10px;
  }
`

export { ToastWrapper }
