import React, { Component } from 'react'
import './Default.css'

import Header from './Header/Header'
import ContentRow from './ContentRow/ContentRow'
import ContentRowList from './ContentRowList/ContentRowList'

class Default extends Component {

  render() {
    return (
      <div className="Default">
        <Header {...this.props}/>
        {this.props.content.map((props, idx) => {
          switch (props.type) {
            case "paragraph":
              return <ContentRow key={idx} {...props} />

            case "list":
              return <ContentRowList key={idx} {...props} />

            default:
              return null
          }
        })}
      </div>
    )
  }

}

export default Default
