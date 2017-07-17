import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import { Container, Button } from '@rentalutions/elements'
import { Column, Row } from '@rentalutions/grid'
import Async from '../AsyncLoader'
import store, { injectAsynReducer } from '../baseStore'
import Appbar from './Navigation/Appbar'
import Sidebar from './Navigation/Sidebar'

const Applications = props => <Async load={import('./Applications')} />
const Dashboard = props => <Async load={import('./Dashboard')} />

class LandlordContainer extends Component {
  async componentDidMount() {
    const { default: reducer } = await import('./landlordReducer')
    injectAsynReducer(store, 'landlord', reducer)
  }
  render () {
    const { match } = this.props
    return (
      <Container>
        <Appbar title="Hello World" />
        <Sidebar />
        <Container padded className="app-container">
          <Switch>
            <Route path={`${match.url}/:id/applications`} component={Applications} />
            <Route component={Dashboard}/>
          </Switch>
        </Container>
      </Container>
    )
  }
}

export default withRouter(LandlordContainer)
