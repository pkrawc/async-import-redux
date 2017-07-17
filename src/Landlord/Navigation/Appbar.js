import React from 'react'
import { Button, Text } from '@rentalutions/elements'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const AppbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
  background-color: #F9F9F9;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  @media (min-width: 540px) {
    margin-left: ${({sidebarOpen}) => sidebarOpen ? '10em' : '0'};
  }
  .menu-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1em;
    padding: 0.5em 0.25em;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    span {
      background: #404040;
      border-radius: 2px;
      height: 2px;
      width: 100%;
      &:nth-of-type(2) {
        margin: 4px 0;
      }
    }
  }
  .page-title {
    margin-left: 1em;
  }
  .user-group {
    display: flex;
    margin-left: auto;
    margin-right: 1em;
    .notifications {
      margin-right: 1em;
      background-color: red;
      border-radius: 50%;
      height: 2em;
      width: 2em;
    }
    .user-menu {
      background-color: grey;
      border-radius: 50%;
      height: 2em;
      width: 2em;
    }
  }
`

const Appbar = ({className, match, title, ...rest}) => (
  <AppbarWrapper className={className} {...rest}>
    <div className="menu-button">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <Text title className="page-title">{title}</Text>
    <div className="user-group">
      <div className="notifications"></div>
      <div className="user-menu"></div>
    </div>
  </AppbarWrapper>
)

export default withRouter(Appbar)
