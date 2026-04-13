# HCD_WebDev

## Case

Toegankelijke web app maken voor 1 persoon. Op basis van de wekelijkse test, wordt er geïttereerd op de web app.

De case is om spraakberichten toegankelijker te maken voor de gebruiker. Spraakberichten bevatten namelijk veel afleidingen en klinkt anders ten opzichte van een tekst bericht. Ook zijn tekstberichten "to the point".

Het idee is om AI te gebruiken om spraak om te zetten tot een samenvatting. Deze feature kan als een extensie gedownload worden en gebruikt worden door de gebruiker. De extensie wordt opgehaald en gebruikt via een API fetch. Hiermee wordt ervoor gezorgd dat er geen lokale AI wordt gedraaid, en dat de extension zwaart wordt.


### Dag 1

Vandaag is er nagedacht over de case en is er een idee ontwikkeld om de toegankelijkheid van de gebruiker te waarborgen. Het idee is om de gesproken berichten samen te vatten door de web app zelf. Hiermee kan de gebruiker makkelijker de "to the point" bericht binnen krijgen. Dit kan worden gedaan door AI.

Morgen zal hier de eerste test over komen en de handelingen van de gebruiker een duidelijk beeld geven over de eisen voor de extension.


## Testplan week 1

* Welke screen reader wordt er gebruikt?
* Wat zijn de soort woorden, waar er naar geluisterd wordt?
* Welke aspecten van een spraakbericht zijn er irritant?
* Gebruik je liever steekworden om iets te beschrijven?
* Is een spraakbericht goed te onthouden?
* Raak je weleens verdwaald op een website? Dus dat je niet meer weet waar je bent en wat je moet doen.
* Stel dat er een lange tekstbericht binnenkomt die de screenreader voorleest, is dit dan te volgen?
* Welke chat app gebruik je voornamelijk?


### Dag 2

Vandaag verdere itteratie over het onderwerp en verder gezocht naar methodes om de toegankelijkheid te verbeteren. Ik wil hierbij gebruk maken van chrome extension, hiermee kan ik de toegankelijkheids feature op meerdere sites laten werken. Ook kreeg ik te horen dat het handig kan zijn om de AI bepaalde samenvattingen niet te laten doen, omdat de gebruiker die juist wel helemaal wil beluistern. Dit kan opgelost worden door een knop om te zetten hiervoor.

### Dag 3

Vandaag verder gewerkt aan de layout van de chat website. Ik ben afgestapt van het maken van een extension en heb nu de mockup gemaakt. Ik heb een knop gemaakt voor de gebruiker om zo de AI samenvattingstool te activeren. Vervolgens kan de gebruiker de spraakberichten samen laten vatten en ze zo beter en sneller begrijpen.

Ik heb ook dikke borders gemaakt voor mijzelf om de layout goed te zien en te begrijpen van de elementen. Deze borders had ik bij de test met de testpersoon er niet uitgehaald. Hier kreeg ik echter wel goede feedback op. Ook vindt de gebruiker het fijn als de elementen op het scherm lekker groot is en duidelijk is.

Ik heb ook gedacht aand e accesibility van de pagina en hoe de gebruiker door de pagina kan navigeren. Hierbij heb ik verschillende aria-labels gebruikt en ook gewerkt met hidden texten die alleen opgelezen worden door de screenreader. Zo heb ik bijvoorbeeld bij de getypte chatberichten, een extra tekst toegevoegd, zodat de gebruiker erbij hoort van wie de tekst afkomstig is. Ook bij de input wordt er duidelijk weergegeven naar wie er een chatbericht wordt verstuurd.

#### Bevindingen week 2

* Slim samenvatten kan handig zijn voor extra functies. KIJK HIER NAAR!! 
* Dikke borders en goede dikke fonts is beter
* Samenvating knop met AI laten werken bij langere zinnen, bijvoorbeeld bij spraakberichten van 30 seconden of langer.
* De aria labels zijn fijn en goed te begrijpen voor de gebruiker


### Dag 4

Ik heb de layout van de chatapp verder aangepast, omdat de gebruiker de app een klein beetje kan zien. Hij vond het bij de chatapp erg fijn dat de borders lekker dik zijn en ook goed zichtbaar zijn. Hiemee kan hij goed onderscheid maken tussen de content. Verder heb ik de spraakberichten werkend gekregen en kan dit ook getest worden. De samenvattingsknop werkt ook. Deze werkt uiteraard als prototype, en bevat dus een text die naar speech wordt vertaald via de javascript. Ook de lettertypes zijn aangepast en een stuk groter gemaakt voor mijn testpersoon. De tab heb ik extra functioneel gemaakt door er een font-size increase aan te geven. Dit zal ik ook gaan testen met de gebruiker. 

Echter zijn er wel wat problemen met de natuurlijke spraakbericht, omdat deze uit elevenlabs komt heb ik hier credits voor gekregen. Ik wil echter een grotere spraakbericht testen, omdat de samenvatting vooral nuttig is bij lange berichten.

## Voortgangsgesprek

### Week 1

Deze week heb ik gewerkt aan het bedenken van een idee voor de case. Hierbij ben ik uitgekomen op het gebruik van extensies, omdat extensies op elke website actief gebruikt kan worden. Ook is er een user test uitgevoerd met de eindgebruiker. Hier zijn relevante punten uit voor gekomen, zoals hieronder te zien is.


#### Week 1:

* De aandoening is genetisch.

* Hobby’s houtbewerken, jukalelen, programeren.

* Windows overlay wordt er gebruikt om kleuren om te draaien. 

* Zoom wordt er gebruikt om dingen goed te zien

* Spraak software wordt er gebruikt

* De selectie op het scherm is niet altijd duidelijk. De tabs gaan niet duidelijk van de ene naar de andere kant

* Data uitschrijven, omdat schermlezer het niet goed op pakt als het in cijfers erin staat. Datum als secundairy onderdeel gebruiken.

* Geen start en stop knop apart zetten. Gebruik 1 knop om een spraakopname te starten en te stoppen.

* Feedback berichten zijn belangrijk, zodat “Berend” weet dat er iets gebeurt op het scherm. (Liefst audio feedback).

* Audio mute is niet handig, omdat de persoon de audio juist nodig heeft en de gebruiker anders meerdere onderdelen moet tabben.

* Simpele interacties is het beste

* Rekening houden met omgekeerde kleuren

* Contrast goed bekijken

* Alt text goed bekijken

* Geluid moet niet te zacht zijn. Goed duidelijk geluid!

* Lichtere kleuren is gelijk aan hoge tonen, en donkere kleuren met lage tonen!

* Hoe meer feedback hoe beter

* Je moet altijd kunnen pauzeren, en ook de plaats van beginnen voor fragment kunnen bepalen.

* De letter “B” is een sneltoets voor button

* Nvda sneltoetsen bekijken, zodat er geen sneltoets conflict ontstaat

* Het is fijn als de gebruiker aan het begin weet waar de persoon is. Welke website? En niet per se de hele html te laten voorlezen aan het begin.

* Laptop telefoon vooral gebruikt

* Spraakberichten vooral gebruikt op signal en whatsapp!

* Meestal telefoon gebruikt voor social media, soms laptop voor whatsapp

* Er wordt meer getypt dan gesproken voor het sturen van teksten.

* Braile toetsenbord wordt er gebruikt op de telefoon om te typen

* Spraakbericht reageren haalt de gebruiker uit de flow, omdat de spraakbericht te lang is

* Geheel wordt geluisterd, en achteraf wordt er gereageerd. Soms berichten gemist, en ook worden de spraakberichten soms vergeten tussentijds.

* Terugvinden van steekwoorden in een spraakbericht is handig

* Het kunnen skimmen van tekst is handig.

#### Belangrijk voor mij!

* Pre prompted. Train de AI om de samenvatting goed te maken, zodat de fouten minimaal zijn.

* Sneltoets voor als een spraakbericht om te zetten, dus als er op een spraakbericht wordt geklikt dat er een menu komt om de spraakbericht samen te vatten.


## Week 2

Deze week veel gewerkt aand de optimalisatie van de mockup website. Zo zijn er veel toegankelijk toepassingen op de website toegevoegd. Deze toepassingen hebben vooral te maken met de toegankelijkheid van de gebruiker. Dit heb ik ook getest met de gebruiker, waarna ik positieve feedback erover heb gekregen. Een voorbeeld van de toepassing is het aangeven met wie de gebruiker aan het appen is, als er op de input wordt geklikt. Ook kunnen de vorige tekstberichten ge-tabbed worden, waardoor de gebruiker de verstuurde berichten terug kan horen. En uiteraard kan de gebruiker niet goed zien welke tekst bericht door wie is gestuurd. Hiervoor heb ik als oplossing om een verstopte tekst erbij toe te voegen, deze is alleen te lezen door de screen reader.

Ik heb ook de (fake) spraakbericht erin toegevoegd, deze werkt echter nog niet. Dit vanwege het feit dat de fetch naar de api niet wordt goedgekeurd.

Ook had ik de borders dik gemaakt op de pagina, dit had ik gedaan voor mijzelf om de layout goed te kunnen bepalen. Deze heb ik bij de test erin gelaten. Ik kreeg hier echter goede feedback over terug. de gebruiker vind dit fijner, omdat zo onderscheid tussen bepaalde delen beter te zien is. De lettertype kan dan ook groter gemaakt worden, zodat de gebruiker de teksten ook beter kan lezen. Deze bevindingen zijn op zicht, omdat de gebruiker wel een klein beetje kan zien, deze zicht gebruikt de gebruiker om laatste extra informatie uit de wereld, en in mijn geval, de website te verkrijgen.


Voor volgende week wil ik de AI samenvatten erin werkend verwerken, zodat dit getest kan worden met de gebruiker. 


#### Week 2:

* Alt shift D kan handig zijn als shortcut


##### Voor mij!!
* slim samenvatten kan handig zijn voor extra functies. KIJK HIER NAAR!!
* Dikke borders en goede dikke fonts is beter

* Samenvating knop met AI laten werken bij langere zinnen, bijvoorbeeld * bij spraakberichten van 30 seconden of langer.

* De aria labels zijn fijn en goed te begrijpen voor de gebruiker


## Bronnen

### Natuurlijke spraak en setup
[ElevenLabs](https://elevenlabs.io/app/home)

### Onend gebruik voor als de audio afgelopen is
[Onend](https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/ended_event)
