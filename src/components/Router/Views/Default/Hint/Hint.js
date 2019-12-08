import React, { Component } from 'react'
import './Hint.css'

import { Collapse, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap'
// CardImg, CardSubtitle

class Hint extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {

    let image
    if (this.props.image) {
      image = "image123"
    }

    return (
      <div className="Content Hint">
        <Button color="primary" outline onClick={this.toggle}>Hinweis</Button>
        <Collapse isOpen={this.state.isOpen}>
          <Card>
            {image}
            <CardBody>
              <CardTitle>{this.props.title}</CardTitle>
              <CardText>{this.props.body}</CardText>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }

}

export default Hint
