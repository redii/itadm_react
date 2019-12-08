import React, { Component } from 'react'
import './Table.css'

import { Table as RSTable } from 'reactstrap'

class Table extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Table">
        <hr />
        <h5>{this.props.title}</h5>
        <RSTable>
          <thead>
            <tr>
              {this.props.columns.map((column, idx) => <th key={idx}>{column.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.props.rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  {this.props.columns.map((column, idx) => <td key={idx}>{row[column.property]}</td>)}
                </tr>
              )
            }, this)}
          </tbody>
        </RSTable>
      </div>
    )
  }

}

export default Table
