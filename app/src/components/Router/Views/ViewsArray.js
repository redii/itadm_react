import React from 'react'

import history from 'utils/history'
import Default from './Default/Default'

const array = [
  {
    key: '1',
    name: 'Home',
    path: '/',
    exact: true,
    icon: '',
    component: Default,
    props: {
      title: "IT-Administrator (IHK)",
      subTitle: "Zertifikatslehrgang am TA Bildungszentrum",
      mutedSubTitle: "Begleitende Aufgaben und Informationen",
      hideBackButton: true,
      content: [
        {
          type: "paragraph",
          title: "👨‍🎓 Über diese Seite...",
          body:
            <div>
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
            </div>
        },
        {
          type: "list",
          title: "📑 Studieninhalte",
          body: [
            {
              body: "IT-Grundlagen",
              destination: "/",
              disabled: true,
            },
            {
              body: "Microsoft Windows",
              destination: "/",
              disabled: true,
            },
            {
              body: "Linux/Unix",
              destination: "/",
              disabled: true,
            },
            {
              body: "Netzwerkadministration",
              destination: "/",
              disabled: true,
            },
            {
              body: "Scripting",
              destination: "/",
              disabled: true,
            },
            {
              body: "Serversysteme und Monitoring",
              destination: "/server",
            },
            {
              body: "Systemanalyse und Management",
              destination: "/",
              disabled: true,
            },
            {
              body: "Datensicherheit",
              destination: "/",
              disabled: true,
            },
          ]
        },
      ]
    },
    subs: []
  },
  {
    key: '2',
    name: 'Serversysteme und Monitoring',
    path: '/server',
    exact: true,
    icon: '',
    component: Default,
    props: {
      title: "Serversysteme und Monitoring",
      subTitle: "Verschiedene Serverarten und Ihre Protokolle",
      mutedSubTitle: "Funktionsweise und Konfiguration",
      content: [
        {
          type: "paragraph",
          title: "☁️ Bevor wir anfangen...",
          body:
            <p><a href=" " onClick={() => history.push('/server/vps')}>Hier</a> finden
            Sie die Zugangsdaten Ihrer Server sowie eine kurze Info darüber, wie
            Sie sich mit diesem verbinden können.</p>
        },
        {
          type: "list",
          title: "Aufgaben zu den Serverarten",
          body: [
            {
              body: "Nameserver",
              destination: "/server/dns",
            },
            {
              body: "Webserver",
              destination: "/server/web",
            },
            {
              body: "Fileserver",
              destination: "/server/file",
            },
            {
              body: "Proxyserver",
              destination: "/server/proxy",
            },
          ],
        },
      ]
    },
    subs: [
      {
        key: '2.1',
        name: 'Virtual Private Servers',
        path: '/server/vps',
        exact: true,
        icon: '',
        component: Default,
        subs: [],
        props: {
          title: "Virtual Private Servers",
          subTitle: "Zugangsdaten Ihrer Test-Server",
          mutedSubTitle: "",
          content: [
            {
              type: "paragraph",
              title: "Bevor wir anfangen...",
              body:
                <div>
                  <p>Zur Bearbeitung der Aufgaben, benötigen Sie den Zugriff auf die Kommandozeile
                  eines Serversystems. Verbinden Sie sich dafür mit Hilfe eines SSH Clients wie
                  z.B. <a href="https://the.earth.li/~sgtatham/putty/latest/w64/putty.exe">Putty</a> unter
                  Angabe der IP sowie Zugangsdaten auf das zur Verfügung gestellte System.</p>
                  <image src={window.location.origin + "/images/putty.png"} />
                </div>
            },
          ]
        },
      },
      {
        key: '2.2',
        name: 'Nameserver',
        path: '/server/dns',
        exact: true,
        icon: '',
        component: Default,
        subs: [],
        props: {
          title: "Nameserver",
          subTitle: "Konfigurieren eines Bind Nameservers",
          mutedSubTitle: "unter Ubuntu 18.04",
          content: [
            {
              type: "paragraph",
              title: '1. Installieren Sie das "bind9" Paket auf Ihrem System',
              body:
                <div>
                  <p>
                    Um das Paket auf ihrem System zu installieren nutzen sie das vorhandene
                    Paketverwaltungssystem. Unter Debian/Ubuntu können Sie hierfür APT benutzen.
                  </p>
                  <p className="text-muted">
                    Eine genaue Funktionsbeschreibung zur Bedienung von APT finden
                    Sie <a href="https://wiki.ubuntuusers.de/apt/apt-get/">hier</a>.
                  </p>
                </div>,
              hint: ""
            },
          ]
        },
      }
    ],
  },
]

export default array
