import styled from 'styled-components'
import { Container } from 'commons/ui-kit/ToggleButton/style'

const ContainerLogout = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  &>div{
    flex-grow: 2;
  }
  &>div:nth-child(2) {
    text-align: right;
    font-size: 19px;
    font-weight: 200;
    cursor: pointer;
  }
`

const DivisionName = styled.div`
  font-size: 23px;
  overflow-wrap: break-word;
`
const LineBottom = styled.hr`
  width: 100px;
  border-color: ${props => props.theme.primaryTextColor};
  margin-block-start: 20px;
  margin-block-end: 20px;
`
const LogoutButton = styled.div`
  text-align: left;
  padding: 5px;
  color: ${props => props.theme.primaryColor};
`
const NameSection = styled.div`
  opacity: ${props => (props.sidebar ? '1' : '0')};
  position: absolute;
  width: 100%;
  top: 127px;
  transition: opacity 0.4s, display 0.1s 2s;
`
const Overlay = styled.div`
  opacity: ${props => (props.sidebar ? '.6' : '0')};
  position: absolute;
  width: 100vw;
  top: 0px;
  height: 100vh;
  background: black;
  z-index: 1;
  transition: 0.4s;
  pointer-events: ${props => (props.sidebar ? 'auto' : 'none')};
  @media (min-width: 992px) {
    & {
      display: none;
    }
  }
`
const ProfileAvatar = styled.div`
  transition: 0.4s;
  position: absolute;
  top: ${props => (props.sidebar ? '30px' : '15px')};
  left: ${props => (props.sidebar ? '70px' : '5px')};

  /* & div {
    display: inline-block;
    transition: 0.4s;
  } */
`
const ProfileName = styled.div`
  color: ${props => props.theme.primaryTextColor};
  font-size: 15px;
  text-align: left;

  &:nth-child(2) {
    font-weight: 500;
  }
`
const ProfileSection = styled.div`
  height: ${props => (props.sidebar ? '270px' : '215px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.4s;
`
const ProfileWrapper = styled.div`
  height: ${props => (props.sidebar ? '270px' : '60px')};
  overflow: hidden;
  background: ${props => props.theme.primaryBackground};
  transition: 0.4s;
`
const SidebarContainer = styled.div`
  width: ${props => (props.sidebar ? '230px' : '50px')};
  height: 100vh;
  z-index: ${props => (props.modal ? 0 : 1)};
  background: ${props => props.theme.primaryBackground};
  text-align: center;
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  transition: 0.5s;
  display: inline-block;
  .scrollarea-content {
    overflow: unset;
  }
  .logout {
    position: absolute;
    right: -55px;
    z-index: 3;
    padding: 10px;
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.3);
    top: ${props => props.logoutPosition - 10}px;
    cursor: pointer;
    background: ${props => props.theme.primaryBackgroundLighter};
    span {
      width: 10px;
      height: 10px;
      display: inline-block;
      position: absolute;
      left: -5px;
      transform: rotate(45deg);
      background: ${props => props.theme.primaryBackgroundLighter};
      top: 15px;
    }
  }
  @media (max-width: 992px) {
    ${Container} {
      display: none;
    }
  }
`
const SidebarWrapper = styled.div`
  width: ${props => (props.sidebar ? '230px' : '50px')};
  height: 100vh;
  background: ${props => props.theme.primaryBackground};
  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  transition: 0.5s;
  display: inline-block;
  z-index: 2;
`

export {
  ContainerLogout,
  DivisionName,
  LineBottom,
  LogoutButton,
  NameSection,
  Overlay,
  ProfileAvatar,
  ProfileName,
  ProfileSection,
  ProfileWrapper,
  SidebarContainer,
  SidebarWrapper
}
