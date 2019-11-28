import React, { Component } from 'react'
import './Default.css'

import Header from './Header/Header'
import Paragraph from './Paragraph/Paragraph'
import List from './List/List'
import Hint from './Hint/Hint'
import Table from './Table/Table'

class Default extends Component {

  render() {
    return (
      <div className="Default">
        {this.props.content.map((props, idx) => {
          switch (props.type) {
            case "header":
              return <Header key={idx} {...props} />

            case "paragraph":
              return <Paragraph key={idx} {...props} />

            case "list":
              return <List key={idx} {...props} />

            case "hint":
              return <Hint key={idx} {...props} />

            case "table":
              return <Table key={idx} {...props} />

            default:
              return null
          }
        })}
      </div>
    )
  }

}

export default Default
