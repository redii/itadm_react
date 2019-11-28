import React, { Component } from 'react'
import './Hint.css'

import { Collapse, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

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
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }

}

export default Hint
