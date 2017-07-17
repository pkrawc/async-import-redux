import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Icon } from '@rentalutions/elements'

export const colors = {
  primary: 'rgba(101, 126, 212, 1)',
  secondary: 'rgba(54, 38, 167, 1)',
  accent: 'rgba(255, 51, 31, 1)',
  dark: 'rgba(13, 1, 6, 1)',
  darkSecondary: 'rgba(13, 1, 6, 0.6)',
  disabled: 'rgba(13, 1, 6, 0.4)',
  light: 'rgba(251, 251, 255, 1)',
  lightSecondary: 'rgba(251, 251, 255, 0.8)'
}


const Hero = styled.section`
  min-height: 100vh;
  background: ${colors.primary};
`

const Header = styled.header`
  position: fixed;
  top: 0; left: 0; right: 0;
  display: flex;
  padding: 1em;
  background: ${({scrolled}) => scrolled ? colors.light : 'transparent'};
  .menu {
    ${'' /* ${Button} {
      margin-right: 1em;
    } */}
  }
  .button-group {
    margin-left: auto;
    ${'' /* ${Button} {
      margin-left: 1em;
    } */}
  }
`

const Modal = props => {
  const open = _ => console.log('hello universe')
  return props.children(open)
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false
    }
  }
  render() {
    return (
      <div className="home">
        <Header scrolled={this.state.scrolled}>
          {window.innerWidth < 900 && <Icon name="info"/>}
          <div className="menu">
            <Button bare btnColor={colors.light} to="/app" >pricing</Button>
            <Button bare btnColor={colors.light}>education</Button>
            <Button bare btnColor={colors.light}>tenants</Button>
            <Button bare btnColor={colors.light}>features</Button>
          </div>
          <div className="button-group">
            <Modal>
              {(open) => (
                <Button primary btnColor={colors.accent} onClick={open}>request invite</Button>
              )}
            </Modal>
            <Button success>log in</Button>
          </div>
        </Header>
        <Hero></Hero>
        <section></section>
        <section></section>
        <section></section>
      </div>
    );
  }
}

export default Home;
