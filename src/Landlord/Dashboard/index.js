import React, { Component } from 'react'
import { Button, Card, Container, Icon } from '@rentalutions/elements'
import { Row, Col } from '@rentalutions/grid'
import styled from 'styled-components'

const DashboardWrapper = styled.div`
  ${'' /* ${Button} {
    display: flex;
    align-items: center;
  } */}
`

const Random = styled((props) => (
  <div className={props.className}>
    <div className="inner"></div>
    <div className="inner"></div>
  </div>
))/*sc*/`
  padding: 1em;
  background: red;
  .inner {
    margin: 1em;
    background: blue;
    height: 200px;
  }
`

class Dashboard extends Component {
  render () {
    return (
      <DashboardWrapper>
        <Card title="Quick Links">
          <Button><Icon name="arrow-left"/> add a property</Button>
          <Button><Icon name="arrow-left"/> message tenants</Button>
          <Button><Icon name="arrow-left"/> see reports</Button>
          <Button><Icon name="arrow-left"/> request application</Button>
        </Card>
        <Card>
          <Root />
        </Card>
      </DashboardWrapper>
    )
  }
}

export default Dashboard



const Root = styled(({
  className
}) => {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return (
    <Card className={className} title="Unit Timeline">
      <Row>
        {months.map(month => (
          <Col sm={1}>
            {month}
          </Col>
        ))}
      </Row>
      <Row>
        <Col sm={8} className="lease" />
        <Col sm={4} className="vacant" />
      </Row>
      <Row>
        <Col offset={5} sm={3} className="renewal-period" />
      </Row>
      <Row>
        <Col offset={6} sm={2} className="listing-period" />
      </Row>
    </Card>
  )
})`
  padding: 1em;
  background: #F9F9F9;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  .title {
    margin-top: 0;
    font-size: 1.5em;
    font-weight: 600;
  }
  .lease {
    height: 3em;
    background: #BADA55;
  }
  .vacant {
    height: 3em;
    background: grey;
  }
`
