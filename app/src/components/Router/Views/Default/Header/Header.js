import React, { Component } from 'react'
import './Header.css'

import history from 'utils/history'
import { Button } from 'reactstrap'

class CourseSectionHeader extends Component {

  render() {
    return (
      <div className="CourseSectionHeader">
        <h1>{this.props.title}</h1>
        <br hidden={!this.props.subTitle}/>
        <p className="lead">{this.props.subTitle}</p>
        <br hidden={!this.props.mutedSubTitle}/>
        <p className="text-muted">{this.props.mutedSubTitle}</p>
        <Button color="primary" size="sm" outline onClick={() => history.goBack()} hidden={this.props.hideBackButton}>zurück</Button>
        <hr />
      </div>
    )
  }

}

export default CourseSectionHeader
