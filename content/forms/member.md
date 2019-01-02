---
title: KalkSpace e.V. Mitglied werden
---

# Mitglied im KalkSpace&nbsp;e.V. werden

Danke, dass du verbindlich Mitglied in unserem Verein werden willst! 🎉

Hier findest du wichtige Dokumente:

- [Satzung](foo)  <!-- TODO -->
- [Beitragsordnung](foo)  <!-- TODO -->
- Code of Conduct  <!-- TODO -->

Deine Mitgliedschaft beginnt am 1. des nächsten Monats, nachdem der Vorstand zugestimmt hat.

Wir brauchen ein paar Daten um dich aufnehmen zu können:

<wired-input type="text" name="name" placeholder="Dein (Nick-)Name"></wired-input>

<wired-input type="email" name="email" placeholder="Deine E-Mail-Adresse"></wired-input>

<label>Geburtsdatum:</label>
<wired-input type="date" name="birthdate" placeholder="Dein Geburtsdatum"></wired-input>

<wired-input type="text" name="contact" placeholder="Wer ist dein Kontakt im Space?" id="field-contact"></wired-input>
<aside>
    Du kannst momentan nur Mitglied werden, wenn du bereits jemanden aus dem Space kennst. Sag uns kurz, wer das ist oder [lern uns vorher kennen](/forms/interest/).
</aside>

<label for="field-modus">Dein Modus:</label>
<wired-radio-group id="field-modus" name="modus" selected="community">
    <wired-radio name="fixdesk" text="Fix Desk"></wired-radio>
    <wired-radio name="flexdesk" text="Flex Desk"></wired-radio>
    <wired-radio name="community" text="Community"></wired-radio>
</wired-radio-group>

<wired-button class="d-block">
    <button type="submit">Mitglied werden!</button>
</wired-button>
