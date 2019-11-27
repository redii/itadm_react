import React, { Component } from 'react'
import './ContentRowList.css'

import history from 'utils/history'
import { ListGroup, ListGroupItem } from 'reactstrap'

class ContentRowList extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.buildList = this.buildList.bind(this)
  }

  buildList() {
    return (
      <ListGroup flush={this.props.flush}>
        {this.props.body.map((item, idx) => {
          return (
            <ListGroupItem
              key={idx}
              onClick={() => history.push(item.destination)}
              disabled={item.disabled}
              action>
              {item.body}
            </ListGroupItem>
          )
        })}
      </ListGroup>
    )
  }

  render() {
    return (
      <div className="Content ContentRowList">
        <h5>{this.props.title}</h5>
        {this.buildList()}
        <hr />
      </div>
    )
  }

}

export default ContentRowList
