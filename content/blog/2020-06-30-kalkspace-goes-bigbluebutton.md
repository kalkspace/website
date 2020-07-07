---
title: KalkSpace goes BigBlue&shy;Button
slug: kalkspace-goes-bigbluebutton
date: 2020-06-30T00:00:00.000Z
---

**tldr: wir haben eine BigBlueButton-Instanz aufgesetzt und ihr könnt sie benutzen: [bbb.kalk.space](https://bbb.kalk.space)**

Wie so viele Menschen haben wir uns in den letzten Wochen in vielen Video- und Telefonkonferenzen rumgetrieben. Auch unsere Vereinsaktivität hat sich ins Internet verlagert. Irgendwie sind wir dann über BigBlueButton gestolpert (danke @ divoc und meeten.statt-drosseln.de!) und dachten: das wollen wir auch!

![](/images/uploads/bildschirmfoto-von-2020-06-10-21-18-06.png)

BigBlueButton ist open source, ein Link reicht, um es benutzen zu können, es lässt sich datensparsam einrichten, und es HAT EIN WHITEBOARD, AUF DEM ZUSAMMEN RUMGEMALT WERDEN KANN!

Ja, BigBlueButton ist nicht perfekt, aber in einigen Punkten schon cool. Und so begab es sich, dass sich drei Menschen verabredeten, um das mal zu besprechen. Am Ende der „Besprechung“ gab es dann eine Test-Instanz, die benutzbar war. Und dann ging das Graben in den Einstellungen los. Zwar gibt es tollerweise eine ziemlich [ausführliche Doku](https://docs.bigbluebutton.org) zum Aufsetzen und Konfigurieren, leider haben wir trotzdem immer wieder geloggte Daten gefunden, die nicht da sein sollten. Die Herausforderung haben wir angenommen, ganz durch sind wir noch nicht, aber es wird…

Ein paar andere Baustellen gibts noch, wir wollen noch Graphiken zur Nutzung und Auslastung zur Verfügung stellen, die Startseite des Whiteboards verschönern, … ach ja, und ne Wartschleifen-Musik sollte es eigentlich geben. Also vielleicht mal. Irgendwann…

Das haben wir natürlich nicht nur gemacht, um unsere Plena auf unserer eigenen virtuellen Kegelbahn stattfinden zu lassen. Wir wollen diese Infrastruktur auch anderen zur Verfügung stellen. Auch wenn unsere Instanz eher zu den kleinen gehört: Legt euch nen Account an, make your own Kegelbahn, Flauschpyramide, Plenumsraum, dings, … und videofoniert!

Unser BigBlueButton wird von Vereinsmitgliedern nebenbei betrieben, wir kümmern uns regelmäßig um Updates und spielen insbesondere sicherheitsrelevante Updates zeitnah ein. Wir können und wollen aber nicht für die Verfügbarkeit des Services garantieren und auch eine mögliche Fehlerbehebung oder so kann mal ein paar Tage dauern.

Sollte sich zeigen, dass der Bedarf größer ist als unsere bisherigen Serverkapazitäten, werden wir sie (vermutlich) ausbauen. Wir können auch bei besonderem Bedarf kurzzeitig hochskalieren. Schaut gerne mal vorbei und probiert aus… Wenn ihr euch am Erhalt dieser Instanz beteiligen wollt, freuen wir uns über eine Spende.

## Der Server und deine Daten

Da wir im KalkSpace kein eigenes Rechenzentrum betreiben, wohnt unser BigBlueButton auf einem Hetzner-Server in Deutschland. Aktuell läuft er mit 3 CPUs mit 4 GB RAM, kann aber auch kurzfristig hoch (und wieder runter) skaliert werden.

Nach der Installation haben wir folgende Privacy-relevanten Anpassungen vorgenommen:

- Da es (aktuell) nicht möglich ist, dass tatsächlich nur aufgezeichnet wird, wenn diese Funktion bewusst ausgewählt wird, haben wir das Recording komplett ausgeschaltet.
- Logging haben wir ebenfalls ausgeschaltet bzw. auf Error-Meldungen begrenzt.
- Unverschlüsselter Zugriff über http ist unterbunden.

Viel Spaß beim Videofonieren :leichtes_lächeln:
