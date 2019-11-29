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
        title: "💡 Foliensätze",
        body:
          <p>
            Ich habe Ihnen die Foliensätze aus der Vorlesung auch nochmal
            digital in meinem Google Drive Ordner abgelegt. Die Dateien finden
            Sie <a href="https://drive.google.com/open?id=1jAVLTz3SNmBbfHlRN9A_4Xw7nDfOsEpW" target="_blank" rel="noopener noreferrer">hier</a>.
          </p>
      },
      {
        type: "paragraph",
        title: "🔑 Bevor wir anfangen...",
        body:
          <p>
            <span className="history" onClick={() => history.push('/server/vps')}>Hier</span> finden
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
                  virtuellen Maschinen in Bezug auf den Netzwerkzugriff gehtabt, weshalb ich
                  Ihnen für die Bearbeitung der Aufgaben sogenannte Virtual Private Servers, kurz
                  VPS, besorgt habe. Diese Maschinen sind über das Internet von überall aus erreichbar,
                  da sie anhand öffentlicher IP-Adressen über das Internet angesprochen werden können.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: "Digital Ocean",
            body:
              <div>
                <p>
                  Die Server habe ich bei dem Cloudanbieter DigitalOcean gemietet, welcher seinen Service
                  auch für Privatpersonen über eine moderne Weboberfläche bereitstellt. Sie können hier
                  Serversysteme und andere Dienste (Datenbanken etc.) schnell und einfach mieten.
                </p>
                <p>
                  Dadurch dass DigitalOcean als Cloudanbieter vollautomatisiert Serverhosts und andere
                  Dienste in Sekunden schnelle bereitstellen kann, ist auch die Abrechnung der Dienste
                  ähnlich dynamisch. So erfolgt diese Abrechnung Ihrer Kosten minutengenau, sodass Sie am
                  Ende nur das zahlen was Sie tatsächlich genutzt haben.
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
                  klicken auf den Open-Button öffnet sich ein neues Fenster, in welchem Sie sich als root-User
                  authentifizieren müssen. Beim erstmaligen Verbinden wird Ihnen eine Warnung gezeigt werden,
                  welche Sie mit OK bestätigen müssen (dazu später mehr). Vergeben Sie anschließend ein neues
                  Kennwort.
                </p>
              </div>
          },
          {
            type: "table",
            title: "Zugangsdaten",
            columns: [
              {
                name: "IP-Adresse",
                property: "ip"
              },
              {
                name: "Benutzer",
                property: "user"
              },
              {
                name: "Passwort",
                property: "ip"
              }
            ],
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
            title: 'Ziel der Aufgabe',
            body:
              <div>
                <p>
                  Die Aufgabe besteht darin einen Bind Nameserver auf Ihrem System
                  zu installieren und anschließend zu konfigurieren. Das grobe Ziel
                  ist dass Ihr Server für eine Domain zuständig ist und die DNS-Einträge
                  für diese verwaltet.
                </p>
                <p>
                  Beispielsweise können Sie die Domain <strong>itadm.de</strong> für
                  Ihren Server hinterlegen und anschließend DNS-Einträge wie <strong>www</strong>.itamd.de
                  für diese definieren. Am Ende sollen Sie eine manuelle Namensauflösung Ihrer
                  konfigurierten Domain gegen den Server vornehmen und eine IP-Adresse zurück
                  erhalten. Zum Beispiel die Adresse 1.2.3.4 bei der Auflösung von www.itadm.de.
                </p>
              </div>
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
            body:
              <div>
                <p>
                  Für die Installation von <strong>bind9</strong> mit Hilfe des
                  Paketmanagers <strong>apt</strong>, müssen Sie das folgende
                  Kommando ausführen:
                </p>
                <kbd>apt-get install bind9</kbd><br/><br/>
                <p>
                  Sollte es wegen fehlenden Berechtigungen während der Installation
                  zu Problemen kommen, können Sie mit dem Zusatz <kbd>sudo</kbd> vor
                  dem apt-get Kommando die benötigten Rechte erlangen.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '2. Öffnen Sie das Installationsverzeichnis des Bind Servers',
            body:
              <p>
                Unter Linux werden Softwarepakete in der Regel im <strong>/etc</strong> Verzeichnis
                in einem eigenen Ordner installiert. Nutzen Sie die bekannten Befehle, um in diesen
                Ordner zu gelangen.
              </p>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Nutzen Sie den <strong>cd</strong> Befehl (Change Directory), um in das
                  Installationsverzeichnis des Bind Servers zu gelangen.
                </p>
                <kbd>cd /etc/bind</kbd>
              </div>
          },
          {
            type: "paragraph",
            title: '3. Konfiguration des Servers',
            body:
              <div>
                <p>
                  Im Installationsverzeichnis finden Sie verschiedene Ordner und Dateien.
                  Darunter auch verschiedene Konfigurationsdateien, welche unter der named.conf
                  durch includes zusammengeführt werden. Jede dieser Dateien hat daher eine
                  andere Funktion.
                </p>
                <p>
                  Nehmen Sie die folgenden Konfigurationen am grundlegen Serververhalten in der
                  passenden Konfigurationsdatei vor.
                </p>
                <ul>
          				<li>recursion yes;</li>
          				<li>forwarders {"{ 8.8.8.8; 8.8.4.4; };"}</li>
          				<li>allow-query {"{ any; };"}</li>
          			</ul>
                <p className="text-muted">
                  Achtung! Die Konfigurationen müssen innerhalb der äußeren geschweiften
                  Klammern {"{ ... }"} hinzugefügt werden.
                </p>
                <p className="text-muted">
                  Eine Zusammenfassung zur Konfiguration von Bind finden Sie <a href="https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-private-network-dns-server-on-ubuntu-14-04#install-bind-on-dns-servers">hier</a>.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Die Konfigurationsdatei wurde in mehrere Teile gesplittet, um diese logisch voneinander
                  zu trennen und somit eine Ordnung zu schaffen. Beim einlesen der named.conf werden dann
                  die Teildateien wieder in eine inkludiert.
                </p>
                <p>
                  Die Kofiguration der Grundlegenden Funktionsweise wird bei dieser Aufteilung in der
                  "named.conf.options" vorgenommen. Öffne nen Sie diese mit Hilfe von nano.
                </p>
                <kbd>nano /etc/bind/named.conf.options</kbd><br/><br/>
                <p><strong>recursion yes;</strong> Erlaubt rekursives Auflösen von Domains für einen Client.</p>
                <p><strong>forwarders {"{ 8.8.8.8; 8.8.4.4; };"}</strong> Der Server leitet Anfragen für die er selber keine Lösung kennt, an den Google DNS Service weiter.</p>
                <p><strong>allow-query {"{ any; };"}</strong> Erlaubt Anfragen von jedem System bzw. jeder Source IP-Adresse.</p>
              </div>
          },
        ]
      }
    ],
  },
]

export default viewsArray
