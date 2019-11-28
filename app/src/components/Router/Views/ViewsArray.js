import React from 'react'

import history from 'utils/history'
import Default from './Default/Default'

const viewsArray = [
  {
    key: '1',
    name: 'Home',
    path: '/',
    exact: true,
    layout: Default,
    content: [
      {
        type: "header",
        title: "IT-Administrator (IHK)",
        subTitle: "Zertifikatslehrgang am TA Bildungszentrum",
        mutedSubTitle: "Begleitende Aufgaben und Informationen",
        hideBackButton: true
      },
      {
        type: "paragraph",
        title: "👨‍🎓 Über diese Seite...",
        body:
          <div>
            <p>
              Ursprünglich benötigte ich eine Möglichkeit um Ihnen Aufgaben,
              Hilfestellungen und sonstige Informationen schnell und einfach
              zur Verfügung stellen zu können. Aus dieser Motivation heraus
              entstand eben diese Webanwendung.
            </p>
            <p>
              Wer einmal hinter die Kulissen dieser Anwendung gucken möchte,
              kann dies im dazugehörigen Projekt, <a href="https://github.com/redii/itadm" target="_blank" rel="noopener noreferrer">hier</a> tun.
              Dort habe ich zudem Teile der Anwendung erklärt und zusätzlich
              genutzte Frameworks aufgelistet. Bei konkreten Fragen können
              Sie mich auch gerne nochmal direkt darauf ansprechen.
            </p>
            <p>
              Beginnen Sie damit das aktuelle Vorlesungsthema unten auszuwählen...
            </p>
          </div>
      },
      {
        type: "list",
        title: "📑 Studieninhalte",
        body: [{
            body: "IT-Grundlagen",
            destination: "/grundlagen",
            disabled: true,
          },
          {
            body: "Microsoft Windows",
            destination: "/windows",
            disabled: true,
          },
          {
            body: "Linux/Unix",
            destination: "/linux",
            disabled: true,
          },
          {
            body: "Netzwerkadministration",
            destination: "/netzwerk",
            disabled: true,
          },
          {
            body: "Scripting",
            destination: "/scripting",
            disabled: true,
          },
          {
            body: "Serversysteme und Monitoring",
            destination: "/server",
          },
          {
            body: "Systemanalyse und Management",
            destination: "/systemanalyse",
            disabled: true,
          },
          {
            body: "Datensicherheit",
            destination: "/datensicherheit",
            disabled: true,
          },
        ]
      },
    ]
  },


  {
    key: '2',
    name: 'Serversysteme und Monitoring',
    path: '/server',
    exact: true,
    layout: Default,
    content: [
      {
        type: "header",
        title: "Serversysteme und Monitoring",
        subTitle: "Verschiedene Serverarten und Ihre Protokolle",
        mutedSubTitle: "Funktionsweise und Konfiguration"
      },
      {
        type: "paragraph",
        title: "🔑 Bevor wir anfangen...",
        body:
          <p>
            <a onClick={() => history.push('/server/vps')}>Hier</a> finden
            Sie die Zugangsdaten Ihrer Test-Server. Nutzen Sie diese um sich
            mit dem System zu verbinden und die Aufgaben zu bearbeiten.
          </p>
      },
      {
        type: "list",
        title: "Aufgaben zu den Serverarten",
        body: [
          {
            body: "Nameserver",
            destination: "/server/dns"
          }, {
            body: "Webserver",
            destination: "/server/web",
            disabled: true
          }, {
            body: "Fileserver",
            destination: "/server/file",
            disabled: true
          }, {
            body: "Proxyserver",
            destination: "/server/proxy",
            disabled: true
          }
        ]
      }
    ],

    subs: [
      {
        key: '2.1',
        name: 'Virtual Private Servers',
        path: '/server/vps',
        exact: true,
        layout: Default,
        content: [
          {
            type: "header",
            title: "Virtual Private Servers",
            subTitle: "Zugangsdaten Ihrer Test-Server"
          },
          {
            type: "paragraph",
            title: "Bearbeitung der Aufgaben",
            body:
              <div>
                <p>
                  Leider hatte ich in der Vergangenheit immer wieder Probleme mit lokal installierten
                  virtuellen Maschinen in Bezug auf den Netzwerkzugriff und ähnliches, daher habe ich
                  Ihnen für die Bearbeitung der Aufgaben sogenannte Virtual Private Servers, kurz
                  VPS, besorgt. Diese stehen öffentlich im Internet was bedeutet, dass Sie von überall
                  aus mit einem Internetzugriff diese Maschinen erreichen können.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: "Digital Ocean",
            body:
              <div>
                <p>
                  Die Server habe ich bei dem Cloudanbieter DigitalOcean gemietet, welcher sich vor allem
                  an Privatpersonen richtet. Über eine moderne Oberfläche können Sie hier Serverhosts und
                  andere Services einfach, schnell und günstig mieten.
                </p>
                <p>
                  Dadurch dass DigitalOcean als Cloudanbieter vollautomatisiert Serverhosts und andere
                  Dienste in Sekunden schnelle bereitstellen kann, ist auch der gesamte restliche Geschäftsprozess
                  ähnlich dynamisch. So erfolgt die Abrechnung Ihrer Kosten minutengenau, sodass Sie am
                  Ende nur das zahlen was Sie auch tatsächlich genutzt haben.
                </p>
                <p>
                  Wer mich unterstützen möchte kann sich gerne über meinen Referral-Link bei DigitalOcean
                  anmelden. Für Sie entstehen dabei keine Kosten und Sie erhalten ein 50$ Kontigent für die
                  ersten 30 Tage nach der Anmeldung. Zur Anmeldung gelanden Sie <a href="https://m.do.co/c/c004d8619807" target="_blank" rel="noopener noreferrer">hier</a>.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: "Zugriff auf den Server",
            body:
              <div>
                <p>
                  Die Server bieten Ihnen keine grafische Oberfläche und können ausschließlich über die
                  Kommandozeile bedient werden. Um Zugriff auf die Kommandozeile zu bekommen, müssen Sie
                  per SSH auf den Server zugreifen. Das heißt Sie benötigen zunächst eine Software, welche
                  es ihnen er möglicht diesen Dienst zu nutzen. Sowie Chrome oder Firefox die Client-Software
                  ist welche Ihnen den Webzugriff per HTTP ermöglicht, ist Putty die Softwarelösung für den
                  benötigten Zugriff per SSH auf den Server. Putty können sie ganz
                  einfach <a href="https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe">hier</a> herunterladen.
                </p>
                <p>
                  Nachdem Sie Putty gestartet haben werden Sie im oberen Bereich ein Feld mit der Beschriftung
                  Host Name sehen. Hier müssen Sie die IP-Adresse Ihres Serversystems eintragen. Mit anschließenden
                  klicken auf den Open-Button öffnet sich ein neues Fenster, welchem Sie sich in der Kommandozeile
                  des Servers als root-User authentifizieren müssen. Zuvor wird Ihnen jedoch beim erstmaligen
                  Verbinden eine Warnung gezeigt, welche Sie mit OK bestätigen müssen (dazu später mehr).
                </p>
              </div>
          },
          {
            type: "table",
            columns: ["IP", "Benutzer", "Passwort"],
            rows: [
              {
                ip: "123.123.123.123",
                user: "root",
                pass: "qwe123"
              },
              {
                ip: "567.567.567.567",
                user: "root",
                pass: "123wer"
              },
              {
                ip: "345.345.345.345",
                user: "root",
                pass: "jhg564"
              },
              {
                ip: "312.321.321.321",
                user: "root",
                pass: "hgj234"
              },
            ]
          },
        ]
      },


      {
        key: '2.2',
        name: 'Nameserver',
        path: '/server/dns',
        exact: true,
        layout: Default,
        content: [
          {
            type: "header",
            title: "Nameserver",
            subTitle: "Konfigurieren eines Bind Nameservers",
            mutedSubTitle: "unter Ubuntu 18.04"
          },
          {
            type: "paragraph",
            title: '1. Installieren Sie das "bind9" Paket auf Ihrem System',
            body:
              <div>
                <p>
                  Um das Paket auf ihrem System zu installieren nutzen sie das
                  vorhandene Paketverwaltungssystem. Unter Debian/Ubuntu können
                  Sie hierfür APT benutzen.
                </p>
                <p className="text-muted">
                  Eine genaue Funktionsbeschreibung zur Bedienung von APT finden
                  Sie <a href="https://wiki.ubuntuusers.de/apt/apt-get/" target="_blank" rel="noopener noreferrer">hier</a>.
                </p>
              </div>
          },
          {
            type: "hint",
          },
        ]
      }
    ],
  },
]

export default viewsArray
