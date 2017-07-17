import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Async extends Component {
  static propTypes = {
    load: PropTypes.instanceOf(Promise).isRequired
  }
  componentWillMount () {
    this.props.load.then(component => {
      this.component = component
      this.forceUpdate()
    })
  }
  render () {
    const { componentProps } = this.props
    return this.component ? <this.component.default {...componentProps} /> : null
  }
}
