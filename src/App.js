import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Marketing from './Marketing'
import LandlordContainer from './Landlord'
import Onboarding from './Landlord/Onboarding'
import TenantContainer from './Tenant'

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  :root {
    font-size: 100%;
  }
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  body {
    position: relative;
    background-color: #F1F1F1;
  }
`

class App extends Component {
  render () {
    const { auth, user } = this.props
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Marketing}/>
          <Route path="/app" render={({match, location}) => {
            if (auth.authenticated && user.type === 'landlord') {
              return user.firstTime ? (
                <Onboarding />
              ) : (
                <div>
                  <Redirect to={`${match.url}/landlord`}/>
                  <Route path="/app/landlord" component={LandlordContainer} />
                </div>
              )
            } else if (auth.authenticated) {
              return <TenantContainer/>
            } else {
              return <Redirect to={{pathname: '/login', state: {from: location}}}/>
            }
          }}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapToProps = ({auth, ui, user}) => ({
  auth, ui, user
})

export default connect(mapToProps, {})(App)
