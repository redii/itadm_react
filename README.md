# Webanwendung zum IT-Administrator (IHK)
[![Build Status](https://travis-ci.org/redii/itadm.svg?branch=master)](https://travis-ci.org/redii/itadm)
[![dependencies](https://david-dm.org/redii/itadm.svg)](https://david-dm.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## 👨‍🎓 Über diese Anwendung...
Gelegentlich unterrichte ich am TA Bildungszentrum in dem Lehrgang **IT-Administrator (IHK)** verschiedene fachbezogene IT-Themen. Für diese Tätigkeit habe ich ursprünglich eine Plattform benötigt, über welche ich meine **Unterrichtsunterlagen sowie Aufgabenstellungen** für Teilnehmer schnell und einfach zugänglich zur Verfügung stellen kann. Aus diesem Anspruch heraus ist in mehreren Iterationen eben diese Webanwendung entstanden.

Nachdem ich anfänglich eine einfache statische HTML Webseite zusammengebastelt hatte, habe ich mich noch einmal umentschieden und das Projekt doch ein wenig umfangreicher aufgezogen. Somit habe ich mit Hilfe verschiedener moderner Frameworks aus der ehemals statischen HTML-Webseite eine **dynamische Single-Page-Webanwendung** gebaut, welche es mir ermöglicht die Inhalte schnell und einfach anzupassen und für die Teilnehmer bereitzustellen.

Alle auf der Webseite dargestellten Inhalte sind vollständig im Frontend gespeichert, sodass **kein gesondertes Backend benötigt** wird. Das heißt alle Daten sind in diesem Repository zu finden, frei und öffentlich zugänglich wie auch der open-source Code zur Webapp. Die Webseite ist unter [itadm.akmnn.de](https://itadm.akmnn.de) zu finden.

## 🚀 Abhängigkeiten
Die Webanwendung selber ist nicht besonders komplex und bietet nur einen begrenzten Funktionsumfang, daher sollten nicht zu viele überflüssige Abhängigkeiten mit in das Projekt zu laden um die Anwendung so möglichst schlank zu halten. Folgene Module wurden bisher genutzt:
- [React](https://reactjs.org/) - Frontend Framework
- [Reactstrap](https://reactstrap.github.io/) - Bootstrap Komponenten für React
- [history](https://www.npmjs.com/package/history) - Navigieren der Browserhistorie

## ⚙ Funktionsweise
Im Fokus der Webanwendung steht der Views-Component, welcher die Unterseiten der Webapp aus einem Input-Array dynamisch zusammenbaut. Hierfür geht er die Einträge des Arrays nach und nach rekursiv durch und generiert aus den einzelnen Einträgen die verschiedenen Seiten. Der Default-Component legt die grobe Form bzw. das Layout der Seiten fest, während verschiedene Content-Components ([Paragraph](https://github.com/redii/itadm/blob/master/app/src/components/Router/Views/Default/Paragraph/Paragraph.js), [List](https://github.com/redii/itadm/blob/master/app/src/components/Router/Views/Default/List/List.js) und [Table](https://github.com/redii/itadm/blob/master/app/src/components/Router/Views/Default/Table/Table.js)) genutzt werden, um Inhalte darzustellen.

Die dafür relevanten Komponenten sind im Verzeichnis ```/app/src/components/Router/Views/*``` zu finden.
- [Views.js](https://github.com/redii/itadm/blob/master/app/src/components/Router/Views/Views.js) - Logik zum generieren der Unterseiten
- [ViewsArray.js](https://github.com/redii/itadm/blob/master/app/src/components/Router/Views/ViewsArray.js) - Daten und Inhalte der Webseite
- [Default](https://github.com/redii/itadm/tree/master/app/src/components/Router/Views/Default) - Enthält Layout als auch Content Komponenten

## 🛠 Installation
Die Programme [node](https://nodejs.org/de/) und [npm](https://www.npmjs.com/) sind für den Betrieb der Webapp notwendig. Sobald Sie die Programme installiert haben können Sie den Schritten folgen:

1. Klonen Sie das Repository auf ihr System
2. Führen Sie den ```npm install``` Befehl im ```app/``` Verzeichnis aus
3. Starten Sie mit ```npm start``` die Webapp auf einem adhoc Devserver
4. oder bauen Sie mit ```npm run build``` eine Build-Version für den produktiven Betrieb

Sollten Sie die Webapp dauerhaft und produktiv betreiben wollen, wird ein einfacher Webserver wie z.B. [Apache2](https://httpd.apache.org/) benötigt, um die Build-Dateien auszuliefern.

## ✔ ToDo
- [ ] Foliensätze bereitstellen
  - ggf. Download aus GDrive
- [ ] Authentifizierung bei VPS Zugangsdaten
  - würde Backend benötigen ggf. externer Dienst?
- [ ] Inhalte zu Netzwerkadminstration hinzufügen
