import React, { Component } from 'react'
import './ContentRow.css'

class ContentRow extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Content ContentRow">
        <h5>{this.props.title}</h5>
        <span>{this.props.body}</span>
        <hr />
      </div>
    )
  }

}

export default ContentRow
