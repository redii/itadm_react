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
        <RSTable>
          <thead>
            <tr>
              {this.props.columns.map((column, idx) => <th key={idx}>{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.props.rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>{row.ip}</td>
                  <td>{row.user}</td>
                  <td>{row.pass}</td>
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
