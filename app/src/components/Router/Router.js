import React, { Component } from 'react'
import { Router, Switch } from 'react-router-dom'
import history from 'utils/history'

import Views from './Views/Views'

class ViewRouter extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Views />
        </Switch>
      </Router>
    )
  }
}

export default ViewRouter
