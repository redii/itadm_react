import React, { Component } from 'react'
import './Home.css'

import history from 'utils/history'
import { ListGroup, ListGroupItem } from 'reactstrap'

class Home extends Component {

  render() {
    return (
      <div id="Home">
        <p>
          Ursprünglich benötigte ich eine Möglichkeit um euch Aufgaben,
          Hilfestellungen und sonstige Informationen schnell und einfach
          zur Verfügung stellen zu können. Aus dieser Motivation heraus
          entstand eben diese Webanwendung.
        </p>
        <p>
          Wer einmal hinter die Kulissen dieser Anwendung gucken möchte,
          kann dies gerne im dazugehörigen Projekt-Repo <a href="https://github.com/redii/itadm-webapp">hier</a> tun.
          Dort habe ich zudem große Teile der Anwendung ausführlich
          erklärt und alle genutzten Technologien aufgezählt. Bei konkreten
          Fragen könnt ihr mich auch gerne nochmal direkt darauf ansprechen.
        </p>
        <p>
          Beginne damit das aktuelle Vorlesungsthema unten auszuwählen...
        </p>
        <hr />
        <div id="Studieninhalte">
          <h3>Studieninhalte</h3>
          <ListGroup flush>
            <ListGroupItem disabled style={{borderTop: "none"}}>IT-Grundlagen</ListGroupItem>
            <ListGroupItem disabled>Microsoft Windows</ListGroupItem>
            <ListGroupItem disabled>Linux/Unix</ListGroupItem>
            <ListGroupItem disabled>Netzwerkadministration</ListGroupItem>
            <ListGroupItem disabled>Scripting</ListGroupItem>
            <ListGroupItem action onClick={() => history.push('/server')}>Serversysteme und Monitoring</ListGroupItem>
            <ListGroupItem disabled>Systemanalyse und Management</ListGroupItem>
            <ListGroupItem disabled>Datensicherheit</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    )
  }

}

export default Home
