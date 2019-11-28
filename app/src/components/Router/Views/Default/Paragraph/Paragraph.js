import React, { Component } from 'react'
import './Paragraph.css'

class Paragraph extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Content Paragraph">
        <hr />
        <h5>{this.props.title}</h5>
        <span>{this.props.body}</span>
      </div>
    )
  }

}

export default Paragraph
