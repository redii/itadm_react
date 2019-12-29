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
              Meine Idee war es eine Plattform zu schaffen über welche ich
              meine Unterlagen, Hilfestellungen und Aufgaben schnell und einfach
              für Teilnehmer der Kurse bereitstellen kann. Aus dieser Idee ist
              eben diese Anwendung entstanden.
            </p>
            <p>
              Wer einmal hinter die Kulissen der Anwendung gucken möchte,
              kann dies im dazugehörigen Projekt, <a href="https://github.com/redii/itadm" target="_blank" rel="noopener noreferrer">hier</a> tun.
              Dort habe ich zudem Teile der Anwendung erklärt und zusätzlich
              genutzte Frameworks aufgelistet. Bei konkreten Fragen können
              Sie mich auch gerne nochmal direkt darauf ansprechen.
            </p>
            <p>
              Beginnen Sie damit das aktuelle Vorlesungsthema unten auszuwählen.
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
            destination: "/server/web"
          }, {
            body: "Fileserver",
            destination: "/server/ftp"
          }, {
            body: "Proxyserver",
            destination: "/server/proxy"
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
                  Leider hatte ich in der Vergangenheit immer wieder Probleme mit dem Netzwerkzugriff
                  bei lokal installierten virtuellen Maschinen, weshalb ich Ihnen für die Bearbeitung
                  der Aufgaben sogenannte Virtual Private Servers, kurz VPS, zur Verfügung stelle. Diese
                  Maschinen sind über das Internet von überall aus erreichbar, da sie anhand öffentlicher
                  IP-Adressen über das Internet angesprochen werden können.
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
                  auch für Privatpersonen über eine moderne Weboberfläche bereitstellt. Der Service kann
                  durch jeden genutzt werden, um schnell und einfach Serversysteme und andere Dienste
                  zu mieten.
                </p>
                <p>
                  DigitalOcean ist als Cloudanbieter in der Lage Serversysteme und andere Dienste
                  vollautomatisiert in Sekunden bereitstellen zu können. Auch die Abrechnung der Dienste ist
                  ähnlich dynamisch, so erfolgt diese minutengenau, sodass Sie am Ende nur das zahlen was Sie
                  auch genutzt haben.
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
                  Nachdem Sie Putty gestartet haben werden Sie im oberen Bereich ein Feld mit der Beschriftung <strong>Host Name</strong> sehen.
                  Hier müssen Sie die IP-Adresse Ihres Serversystems eintragen. Mit anschließenden
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
                property: "pass"
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
                  Klammern {"{ ... }"} hinzugefügt werden. Eine Zusammenfassung zur Konfiguration
                  von Bind finden Sie <a href="https://www.digitalocean.com/community/tutorials/how-to-configure-bind-as-a-private-network-dns-server-on-ubuntu-14-04#install-bind-on-dns-servers">hier</a>.
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
          {
            type: "paragraph",
            title: '4. Legen Sie eine neue Zone auf dem Server an',
            body:
              <div>
                <p>
                  Um eine neue Zone bzw. Domain zu definieren, müssen Sie diese in der dafür vorgesehenden Konfugurationsdatei
                  hinterlegen. Für die Zone können Sie im Anschluss DNS-Einträge definieren, welche dann durch den Server selbst
                  aufgelöst werden.
                </p>
                <p>
                  Achten Sie darauf den Fully Qualified Domain Name (FQDN) für die Konfiguration zu nutzen.
                </p>
                <p className="text-muted">
                  Eine genauere Anleitung zur Registrierung einer neuen Zone finden Sie
                  Sie <a href="https://help.ubuntu.com/community/BIND9ServerHowto#Primary_Master_Server_configuration" target="_blank" rel="noopener noreferrer">hier</a>.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Eine neue Domain bzw. Zone kann in der named.conf.local vorgenommenwerden.
                </p>
                <kbd>nano /etc/bind/named.conf.local</kbd><br/><br/>
                <div style={{marginLeft:'10%', textAlign:'left'}}>
                  <span style={{textIndent:'0'}}>zone "itadm.de." {"{"}</span><br/>
                  <span style={{marginLeft:'2em'}}>type master;</span><br/>
                  <span style={{marginLeft:'2em'}}>file "/etc/bind/db.itadm.de";</span><br/>
                  <span style={{textIndent:'0'}}>{"};"}</span>
                </div>
              </div>
          },
          {
            type: "paragraph",
            title: '5. Erstellen Sie die dazugehörige Zonendatei',
            body:
              <div>
                <p>
                  Bei der Konfiguration der Zone haben Sie soeben den Pfad einer Zonendatei angegeben, welche Sie nun erstellen
                  müssen. In dieser Zonendatei werden die DNS-Einträge bzw. Ressource Records hinterlegt, welche in IP-Adressen
                  o.ä. aufgelöst werden können.
                </p>
                <p>
                  Sie können die leere Templatedatei <strong>db.empty</strong> als Vorlage nutzen. Hinterlegen Sie in der neu angelegten Datei
                  anschließend einen Eintrag für die Domain <strong>www.itadm.de</strong> auf eine beliebige IPv4 Adresse.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Kopieren Sie die <strong>db.empty</strong> Datei mit Hilfe des folgenden Kommandos (Copy).
                </p>
                <kbd>cp db.empty db.itadm.de</kbd><br/><br/>
                <p>
                  Öffnen Sie die kopierte Datei anschließend und nehmen Sie die benötigten Konfigurationen vor.
                </p>
                <kbd>nano db.itadm.de</kbd><br/><br/>
                <img src="/images/dns_zone.png" alt="Zonendatei" width="100%" />
              </div>
          },
          {
            type: "paragraph",
            title: '6. Starten Sie den Server neu',
            body:
              <div>
                <p>
                  Damit Ihre gerade vorgenommenen Konfigurationen berücksichtigt werden, müssen Sie den Server zunächst erst einmal
                  neustarten. Dabei werden die Konfigurationsdateien des Servers neu eingelesen und Ihre Änderungen eingespielt.
                </p>
                <p>
                  Überprüfen Sie ob der Server erfolgreich neugestartet wurden, indem Sie auch den Status des Diensts prüfen. Führen
                  Sie dafür die folgenden Kommandos aus.
                </p>
                Neustart des Servers: <kbd>service bind9 restart</kbd><br/><br/>
                Statusmeldung des Diensts: <kbd>service bind9 status</kbd>
              </div>
          },
          {
            type: "paragraph",
            title: '7. Nutzen Sie den Server für eine Namensauflösung',
            body:
              <div>
                <p>
                  Um den Server abschließend zu prüfen, können Sie die konfigurierte Domain bzw. den dafür hinterlegten DNS-Eintrag
                  manuell abfragen. Wechseln Sie hierfür zurück in Ihr Windows-System und starten Sie von hier aus eine manuelle
                  Namensauflösung.
                </p>
                <p>
                  Was dabei passiert: Ihr Windows-Rechner spricht Ihren Server über das Internet an und fragt nach der Auflösung der
                  Domain <strong>www.itadm.de</strong>. Ihr Nameserver sollte dann mit der gerade konfigurierten IP-Adresse antworten.
                  Führen Sie für die manuelle Namensauflösung in der Windows-Kommandozeile folgendes Kommando aus.
                </p>
                Manuelle Namensauflösung: <kbd>nslookup www.itadm.de [IP Ihres Servers]</kbd>
              </div>
          },
        ]
      },


      {
        key: '2.3',
        name: 'Webserver',
        path: '/server/web',
        exact: true,
        layout: Default,
        content: [
          {
            type: "header",
            title: "Webserver",
            subTitle: "Konfigurieren eines Apache Webservers",
            mutedSubTitle: "unter Ubuntu 18.04"
          },
          {
            type: "paragraph",
            title: 'Ziel der Aufgabe',
            body:
              <div>
                <p>
                  Die Aufgabe besteht darin einen Apache Webserver auf Ihrem System
                  zu installieren und anschließend zu konfigurieren. Das grobe Ziel
                  ist, dass Sie neben der Apache-Default Seite des Servers eine zweite
                  Webseite zeitgleich betreiben.
                </p>
                <p>
                  Um eine zweite Webseite zeitgleich zu betreiben, müssen Sie zunächst
                  einen weiteren Port z.B. 8080 für den Server konfigurieren. Dadurch
                  können Sie anschließend eine Webseite über den Port 80 und eine andere
                  über den Port 8080 durch den selber Serverhost betreiben.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '1. Installieren Sie das "apache2" Paket auf Ihrem System',
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
                  Für die Installation von <strong>apache2</strong> mit Hilfe des
                  Paketmanagers <strong>apt</strong>, müssen Sie das folgende
                  Kommando ausführen:
                </p>
                <kbd>apt-get install apache2</kbd><br/><br/>
                <p>
                  Sollte es wegen fehlenden Berechtigungen während der Installation
                  zu Problemen kommen, können Sie mit dem Zusatz <kbd>sudo</kbd> vor
                  dem apt-get Kommando die benötigten Rechte erlangen.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '2. Öffnen Sie das Installationsverzeichnis des Webservers',
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
                  Installationsverzeichnis des Apache2 Webservers zu gelangen.
                </p>
                <kbd>cd /etc/apache2</kbd>
              </div>
          },
          {
            type: "paragraph",
            title: '3. Konfigurieren Sie den Webserver für den Port 8080',
            body:
              <div>
                <p>
                  Damit Sie eine weitere Webseite über den selben Webserver ausliefern können, müssen
                  Sie zunächst einen zweiten Port konfigurieren auf welchen der Server horchen soll.
                  Anschließend können Sie den Port 8080 für die zweite Webseite nutzen, während die
                  bereits vorhandene Standardseite weiterhin über den Port 80 ausgeliefert wird.
                </p>
                <p>
                  Nehmen Sie die Konfiguration der Ports in der dazugehörigen <strong>ports.conf</strong> Datei vor.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Öffnen Sie dafür zunächst die Datei mit Hilfe des <strong>nano</strong> Kommandos wie folgt.
                </p>
                <kbd>nano ports.conf</kbd><br/><br/>
                <p>
                  Fügen Sie anschließend <strong>Listen 8080</strong> in die Datei ein. Passen Sie hierbei auf,
                  dass Sie die Zeile nicht innerhalb der dort bereits hinterlegten IF-Abfragen für HTTPS über 443 hinzufügen.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '4. Legen Sie einen neuen Virtual Host an',
            body:
              <div>
                <p>
                  Mit dem Anlegen eines neuen Virtual Hosts, signalisieren wir dem Webserver, dass er für noch eine
                  weitere Webseite zuständig ist. Bei der Konfiguration dieses Virtual Hosts müssen wir daher dem
                  Server mitgeben, über welchen Port die Webseite angefordert wird und wo die Dateien der Webseite
                  im Filesystem zu finden sind (DocumentRoot).
                </p>
                <p>
                  Als Vorlage für den neuen Virtual Host können Sie die <strong>sites-available/000-default.conf</strong> nutzen.
                  Ähnlich wie Sie es zuvor bei dem Nameserver getan hatten, können Sie diese Datei kopieren und anschließend
                  wie gewünscht anpassen.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Kopieren Sie die Vorlage mit Hilfe des folgenden Kommandos.
                </p>
                <kbd>cp sites-available/000-default.conf sites-available/webseite.conf</kbd><br/><br/>
                <p>
                  Öffnen Sie die kopierte Datei mit dem nano Kommando und nehmen Sie die folgenden Anpassungen vor.
                </p>
                <kbd>VirtualHost *:8080</kbd><br/>
                <kbd>DocumentRoot /var/www/webseite</kbd>
              </div>
          },
          {
            type: "paragraph",
            title: '5. Legen Sie das Verzeichnis der zweiten Webseite an',
            body:
              <div>
                <p>
                  Soeben haben Sie bei der Konfiguration des zweiten VirtualHosts einen DocumentRoot definiert, unter welchem
                  der Server die Dateien der Webseite, welche er ausliefern wird, findet. Dieser Ordner ist aktuell noch nicht
                  vorhanden und auch HTML-Dateien der Webseite müssen zunächst angelegt werden.
                </p>
                <p>
                  Legen Sie nun also den Ordner <strong>/var/www/webseite</strong> an und erstellen Sie anschließend darin eine
                  neue <strong>index.html</strong> Datei, welche standardmäßig durch den Werbserver ausgeliefert wird.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Um das neue Verzeichnis anzulegen, nutzen Sie das folgende Kommando (Make Directory).
                </p>
                <kbd>mkdir /var/www/webseite</kbd><br/><br/>
                <p>
                  Anschließend können Sie wie folgt eine neue Datei dort anlegen und bearbeiten.
                </p>
                <kbd>touch /var/www/webseite/index.html</kbd><br/>
                <kbd>nano /var/www/webseite/index.html</kbd>
              </div>
          },
          {
            type: "paragraph",
            title: '6. Aktivieren Sie den VirtualHost für den Webserver',
            body:
              <div>
                <p>
                  Damit der Apache2 Webserver die von Ihnen konfigurierte Webseite nun auch ausliefert, müssen Sie zunächst
                  den dazugehörigen VirtualHost aktivieren. Eine Funktionsbeschreibung dazu finden
                  Sie <a href="https://www.webhosterwissen.de/know-how/eigener-webserver/tutorial-apache-virtual-hosts-anlegen/" target="_blank" rel="noopener noreferrer">hier</a>.
                </p>
                <p>
                  Gucken Sie sich auch nochmal die Ordner <strong>sites-available</strong> und <strong>sites-enabled</strong> an.
                  Es gibt eine Veränderung in diesen Verzeichnissen sobald Sie den VirtualHost aktivieren, versuchen Sie
                  nachzuvollziehen was hierbei passiert.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Den VirtualHost können Sie mit Hilfe des folgenden Kommandos aktivieren.
                </p>
                <kbd>a2ensite webseite.conf</kbd><br/><br/>
                <p>
                  Anschließend können Sie sehen, dass die Datei aus dem <strong>sites-available</strong> Ordner
                  in dem <strong>sites-enabled</strong> Ordner verknüpft wurde. Der Webserver nutzt nur die im
                  enabled-Ordner hinterlegten Konfigurationen, wo nun auch unsere zweite Webseite hinterlegt ist.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '7. Starten Sie den Webserver neu',
            body:
              <div>
                <p>
                  Durch den Neustart des Servers, werden die Konfigurationsdateien neu eingelesen, wodurch der
                  Server im Anschluss Ihre Webseite unter dem neuen Port ausliefern wird. Sollte ein Fehler in
                  der Konfiguration vorliegen, wird Ihnen dies beim Neustart signalisiert werden.
                </p>
                Neustart des Servers: <kbd>service apache2 restart</kbd><br/>
                Statusmeldung des Diensts: <kbd>service apache2 status</kbd><br/><br/>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Den VirtualHost können Sie mit Hilfe des folgenden Kommandos aktivieren.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '8. Rufen Sie die Webseite im Browser auf',
            body:
              <div>
                <p>
                  Nachdem Sie den Server neugestartet haben, können Sie von Ihrem Windows-System aus auf die
                  Webseiten des Apache2 Servers zugreifen. Prüfen Sie die Funktionalität indem Sie die IP-Adresse
                  Ihres Servers mit dem jeweiligen Port im Browser aufrufen.
                </p>
                <kbd>http://[IP Ihres Servers]:8080</kbd>
              </div>
          },
        ]
      },


      {
        key: '2.4',
        name: 'Fileserver',
        path: '/server/ftp',
        exact: true,
        layout: Default,
        content: [
          {
            type: "header",
            title: "Fileserver",
            subTitle: "Konfigurieren eines FTP-Servers",
            mutedSubTitle: "unter Ubuntu 18.04"
          },
          {
            type: "paragraph",
            title: 'Ziel der Aufgabe',
            body:
              <div>
                <p>
                  Die Aufgabe besteht darin einen FTP-Server auf Ihrem System
                  zu installieren und anschließend zu konfigurieren. Am Ende sollten Sie
                  per FTP auf das Filesystem Ihres Servers zugreifen können, um Dateien
                  und Verzeichnisse verwalten zu können.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '1. Installieren Sie das "vsftpd" Paket auf Ihrem System',
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
                  Für die Installation von <strong>vsftpd</strong> mit Hilfe des
                  Paketmanagers <strong>apt</strong>, müssen Sie das folgende
                  Kommando ausführen:
                </p>
                <kbd>apt-get install vsftpd</kbd><br/><br/>
                <p>
                  Sollte es wegen fehlenden Berechtigungen während der Installation
                  zu Problemen kommen, können Sie mit dem Zusatz <kbd>sudo</kbd> vor
                  dem apt-get Kommando die benötigten Rechte erlangen.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '2. Konfigurieren Sie das Verhalten des FTP-Servers',
            body:
              <div>
                <p>
                  Bevor Sie über den Fileserver auf das System zugreifen können, müssen Sie
                  zunächst Konfigurationen vornehmen. Zum Beispiel ist das Schreiben bzw.
                  Verändern von Daten auf dem Server per FTP standardmäßig verboten und muss
                  daher zunächst freigegeben werden.
                </p>
                <p>
                  Anders als bei den bisherigen Serverarten finden Sie die Konfigurationsdatei
                  des vsftpd direkt unter <strong>/etc/vstfpd.conf</strong>. In dieser Datei
                  müssen Sie nun den Parameter <strong>WRITE_ENABLE</strong> auf <strong>YES</strong> setzen.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Öffnen Sie die Datei zunächst mit dem folgenden Kommando.
                </p>
                <kbd>nano /etc/vsftpd.conf</kbd><br/><br/>
                <p>
                  Suchen Sie in dieser Datei den oben genannten Parameter und setzen Sie diesen
                  auf den Wert <strong>YES</strong>. Achten Sie hierbei darauf, dass die jeweilige
                  Zeile nicht durch ein <strong>#</strong> auskommentiert wurde.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '3. Aktivieren Sie den Zugriff durch den Root-User',
            body:
              <div>
                <p>
                  Aufgrund der Tatsache, dass der Root-User uneigenschränkten Zugriff auf den Server
                  hat und somit erheblichen Schaden anrichten könnte, hat diese standardmäßig keinen
                  Zugriff auf das System per FTP.
                </p>
                <p>
                  Damit wir uns nun testweise mit dem Server verbinden können, erlauben wir in diesem
                  Schritt dem Root-User jedoch die Verbindung per FTP. Entfernen Sie daher <strong>root</strong> aus
                  der zum Server gehörenden Datei <strong>/etc/ftpusers</strong>.
                </p>
                <p>
                  Starten Sie den Server anschließend neu, damit die Änderungen übernommen werden.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Öffnen Sie die Datei zunächst mit dem folgenden Kommando.
                </p>
                <kbd>nano /etc/ftpusers</kbd><br/><br/>
                <p>
                  In dieser Datei befindet sich eine Liste mit Usern des Systems, welche für den Zugriff
                  per FTP ausgeschlossen sind. Damit der Root-User sich nun also verbinden kann, müssen Sie
                  Ihn aus dieser Liste entfernen.
                </p>
                Neustart des Servers: <kbd>service vsftpd restart</kbd><br/>
                Statusmeldung des Diensts: <kbd>service vsftpd status</kbd><br/><br/>
              </div>
          },
          {
            type: "paragraph",
            title: '4. Verbinden Sie sich per FTP als Root-User',
            body:
              <div>
                <p>
                  Um sich mit dem Server per FTP zu verbinden, benötigen Sie zunächst eine entsprechende
                  Client-Software. Ich empfehle Ihnen hierbei das Programm WinSCP, welches
                  Sie <a href="https://winscp.net/eng/download.php" target="_blank" rel="noopener noreferrer">hier</a> herunterladen können.
                </p>
                <p>
                  Installieren Sie das Programm und verbinden Sie sich anschließend mit dem Server als Root-User per FTP.
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <img src="/images/winscp.png" alt="WinSCP 1" width="100%" />
              </div>
          },
          {
            type: "paragraph",
            title: '5. Legen Sie zusätzliche Benutzer an',
            body:
              <div>
                <p>
                  Aufgrund der Tatsache, dass der FTP-Server Systemuser für die Authentifizierung bei Nutzung des
                  Dienstes einsetzt, können Sie einfach einen zusätzlichen Benutzer unter dem Betriebssystem anlegen.
                </p>
                <p>
                  Verbinden Sie sich anschließend mit dem neu angelegten Benutzer. Merken Sie einen Unterschied zur
                  vorherigen Anmeldung als Root-User?
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <p>
                  Um einen neuen Systemuser anzulegen nutzen Sie das folgende Kommando.
                </p>
                <kbd>adduser [Name des Benutzers]</kbd><br/><br/>
                <p>
                  Öffnen Sie in WinSCP anschließend eine neue Verbindung und nutzen Sie den gerade angelegten User
                  zur Authentifizierung gegen den FTP-Server.
                </p>
              </div>
          },
          {
            type: "paragraph",
            title: '6. Verbinden Sie sich per SFTP auf den Server',
            body:
              <div>
                <p>
                  Öffnen Sie eine neue Verbindung zu Ihrem Server, dieses Mal allerdings mit Hilfe des Protokolls <strong>SFTP</strong>.
                </p>
                <p>
                  Was ist Vorraussetzung für die Nutzung von SFTP? Bemerken Sie Unterschiede in der Nutzung?
                </p>
              </div>
          },
          {
            type: "hint",
            body:
              <div>
                <img src="/images/winscp2.png" alt="WinSCP 2" width="100%" />
              </div>
          },
        ]
      },


      {
        key: '2.5',
        name: 'Proxyserver',
        path: '/server/proxy',
        exact: true,
        layout: Default,
        content: [
          {
            type: "header",
            title: "Proxyserver",
            subTitle: "Konfigurieren eines Squid Proxys",
            mutedSubTitle: "unter Ubuntu 18.04"
          },
          {
            type: "paragraph",
            title: 'Ziel der Aufgabe',
            body:
              <div>
                <p>
                  Installieren und Konfigurieren Sie einen Squid Proxyserver, welcher
                  bestimmte Webseiten beim Aufruf durch Clients blockiert. Sperren Sie
                  die folgenden Webseiten:
                </p>
                <ul>
                  <li>.mario-pizza.de</li>
                  <li>.luigis-restaurants.de</li>
                  <li>.google.com</li>
                </ul>
              </div>
          },
          {
            type: "paragraph",
            title: '1. Installieren Sie das "squid" Paket auf Ihrem System',
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
                  Für die Installation von <strong>squid</strong> mit Hilfe des
                  Paketmanagers <strong>apt</strong>, müssen Sie das folgende
                  Kommando ausführen:
                </p>
                <kbd>apt-get install squid</kbd><br/><br/>
                <p>
                  Sollte es wegen fehlenden Berechtigungen während der Installation
                  zu Problemen kommen, können Sie mit dem Zusatz <kbd>sudo</kbd> vor
                  dem apt-get Kommando die benötigten Rechte erlangen.
                </p>
              </div>
          },
        ]
      }


    ],
  },
]

export default viewsArray
