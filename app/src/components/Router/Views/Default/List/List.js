import React, { Component } from 'react'
import './List.css'

import history from 'utils/history'
import { ListGroup, ListGroupItem } from 'reactstrap'

class List extends Component {

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
              className={item.disabled ? "text-muted" : ""}
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
      <div className="Content List">
        <hr />
        <h5>{this.props.title}</h5>
        {this.buildList()}
      </div>
    )
  }

}

export default List
