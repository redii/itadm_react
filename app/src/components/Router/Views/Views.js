import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Views.css'

import viewsArray from './ViewsArray.js'

class Views extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.buildView = this.buildView.bind(this)
    this.recursiveBuild = this.recursiveBuild.bind(this)
  }

  buildView(route) {
    return (
      <Route
        key={route.key}
        path={route.path}
        exact={route.exact}
        component={() =>
          <route.layout
            key={route.key}
            name={route.name}
            {...route}
          />
        }
      />
    )
  }

  recursiveBuild(routes) {
    return routes.map(route => {
      let result = []
      if (route.subs && route.subs.length > 0) {
        result.push(this.recursiveBuild(route.subs))
      }
      result.push(this.buildView(route))
      return result
    })
  }

  render() {
    const result = this.recursiveBuild(viewsArray)
    return result
  }

}

export default Views
