# HCD_WebDev

**[Chat website met AI samenvatting](https://braham3030.github.io/HCD_WebDev/)**

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

### Dag 5

Vandaag layout aangepast, zodat de de chatberichten beter in beeld blijven voor de gebruiker. Ik heb verder geïtereerd op de feedback van de gebruiker. Zo heb ik de layout aangepast, de knop voor "slim samenvatten" heb ik een kortere naam gegeven, de samenvatten knop naast de audioberichten gaf de samenvatting van het audiobericht met conflicten tussen screenreaders.

* "Slim samenvatten" knop heet nu "vat samen". Dit is korter en ook duidelijk voor de gebruiker om te gebruiken.
<img width="1512" height="862" alt="image" src="https://github.com/user-attachments/assets/40177146-8592-4c57-9861-54e6f26d19cf" />

* De "vat samen" knop naast het audiobericht heb ik in de script aangepast. Nu leest de screen reader van de gebruiker de tekst voor inplaats van mijn eigen screen reader.
* De layout is aangepast, zodat de gebruiker de content beter op het scherm krijgt. De gebruiker ziet hierdoor een grotere content scherm, waarop de gebruiker kan chatten met anderen en is de "samenvatten" bovenaan de pagina opgeschoven om ruimte te maken.

<img width="1512" height="861" alt="image" src="https://github.com/user-attachments/assets/17550f8a-4c09-40f4-a26a-ae1f8d062484" />

### Dag 6

Verder gewerkt aan de hand van de feedback van Berend. De website met AI samenvat functionaliteit is af. Echter zijn er een aantal kleine dingen die Berend wel fijn zou vinden erin. Zo heb ik een description toegevoegd bij het spraakbericht, zo kan Berend het spraakbericht ook lezen (zo ver hij kan). Dit brengt ook het voordeel met zich mee dat Berend de screenreader de description kan laten voorlezen, waardoor Berend 2 opties krijgt om het spraakbericht te beluisteren. De description heb ik in een knop verwerkt, omdat dit zo minder conflicteerd met de "tab" van Berend. Dit heb ik echter niet kunnen testen, omdat dit na de laatste user test erbij toegevoegd is.


Met de descript kan de gebruiker de gehele descriptie terugzien of horen via de screenreader. Ook zal de pagina naar de "descriptie" scrollen, zodat de gebruiker direct de tekst voor zich krijgt. Dit zorgt er ook voor dat de gebruiker feedback ontvangt over het geopende tekst blok. 

<img width="3827" height="1935" alt="image" src="https://github.com/user-attachments/assets/156e358f-b28b-4490-95a1-818c48cbbdf6" />

Het geopende blok bevat tekst die goed leesbaar is en met een andere achtergrondkleur, zodat het voor Berend duidelijk is dat de "descriptie" opengeklapt is. Ook hier zijn de dikke borders zichtbaar en de "tab" toets versterkt dit meer door een extra eigen border eromheen te zetten.

<img width="3808" height="1926" alt="image" src="https://github.com/user-attachments/assets/110d1675-0db8-408d-9e2b-445fa10d5ed9" />


## Voortgangsgesprek

### Week 1

Deze week heb ik gewerkt aan het bedenken van een idee voor de case. Hierbij ben ik uitgekomen op het gebruik van extensies, omdat extensies op elke website actief gebruikt kan worden. Ook is er een user test uitgevoerd met de eindgebruiker. Hier zijn relevante punten uit voor gekomen, zoals hieronder te zien is.


#### Week 1 user test:

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

##### Belangrijk voor mij!

* Pre prompted. Train de AI om de samenvatting goed te maken, zodat de fouten minimaal zijn.

* Sneltoets voor als een spraakbericht om te zetten, dus als er op een spraakbericht wordt geklikt dat er een menu komt om de spraakbericht samen te vatten.

#### Layout en functies website Week 1

* Hieronder staat de chatapp zoals in week 1 gemaakt. In deze week heb ik de layout gemaakt voor de gebruiker en kan dit ook getest worden. De gebruiker gaf hierbij aan dat hij de dikkere borders fijn vindt om te gebruiken en dat graag erin wilt houden. De dikkere borders had ik in eerste instantie op de website gehouden, omdat ik zo goed kan zien wst de ruimte is die elk element inneemt. Verder zitten hier vooral statische elementen in die wel animeren en mee geklikt kan worden. Deze elementen werken nu nog niet. De aanpassingen hebb ik gemaakt na de user test, omdat de user test een belanrijke test is om te kijken wat de user belangrijk vindt en handig vindt om te gebruiken.

<img width="1512" height="858" alt="image" src="https://github.com/user-attachments/assets/2dd9ef4d-eae8-449f-aec3-298a9bd098a9" />

## Week 2

Deze week veel gewerkt aand de optimalisatie van de mockup website. Zo zijn er veel toegankelijk toepassingen op de website toegevoegd. Deze toepassingen hebben vooral te maken met de toegankelijkheid van de gebruiker. Dit heb ik ook getest met de gebruiker, waarna ik positieve feedback erover heb gekregen. Een voorbeeld van de toepassing is het aangeven met wie de gebruiker aan het appen is, als er op de input wordt geklikt. Ook kunnen de vorige tekstberichten ge-tabbed worden, waardoor de gebruiker de verstuurde berichten terug kan horen. En uiteraard kan de gebruiker niet goed zien welke tekst bericht door wie is gestuurd. Hiervoor heb ik als oplossing om een verstopte tekst erbij toe te voegen, deze is alleen te lezen door de screen reader.

Ik heb ook de (fake) spraakbericht erin toegevoegd, deze werkt echter nog niet. Dit vanwege het feit dat de fetch naar de api niet wordt goedgekeurd.

Ook had ik de borders dik gemaakt op de pagina, dit had ik gedaan voor mijzelf om de layout goed te kunnen bepalen. Deze heb ik bij de test erin gelaten. Ik kreeg hier echter goede feedback over terug. de gebruiker vind dit fijner, omdat zo onderscheid tussen bepaalde delen beter te zien is. De lettertype kan dan ook groter gemaakt worden, zodat de gebruiker de teksten ook beter kan lezen. Deze bevindingen zijn op zicht, omdat de gebruiker wel een klein beetje kan zien, deze zicht gebruikt de gebruiker om laatste extra informatie uit de wereld, en in mijn geval, de website te verkrijgen.


Voor volgende week wil ik de AI samenvatten erin werkend verwerken, zodat dit getest kan worden met de gebruiker. 


#### Week 2 user test:

* Alt shift D kan handig zijn als shortcut


##### Voor mij!!
* slim samenvatten kan handig zijn voor extra functies. KIJK HIER NAAR!!
* Dikke borders en goede dikke fonts is beter

* Samenvating knop met AI laten werken bij langere zinnen, bijvoorbeeld bij spraakberichten van 30 seconden of langer.

* De aria labels zijn fijn en goed te begrijpen voor de gebruiker


#### Layout en functies website Week 2

* In week 2 heb ik bepaalde aanpassingen gedaan aan de chat app. Zo heb ik ervoor gezorgd (op basis van user feedback) dat de borders nog dikker zijn. Ook is de "font-size" vergroot voor de user. De user wilt namelijk (voor zover de user kan zien) het scherm zoveel mogelijk kunnen gebruiken zonder de hulp van screen reader, denk hierbij aan het navigeren tussen elementen. Wel moet de gebruiker de tab functie gebruiken om de teksten voor te laten lezen.

* Ook is de audioplayer en de samenvatting knop actief gemaakt hier. De samanevatting knop geeft de samenvatting van de audioberichten weer.

* De locatie van de samenvatting knop is verplaats naast de audiomessage. Hierdoor is het voor de gebruiker duidelijker wat de knop doet en hoort het ook bij het bericht samen. Ook is de activatie vand samenvattingknop bovenaan de pagina om de knop in of uit te schakelen naast de audio message. Hierdoor hoeft de gebruiker minder te tabben als de gebruiker geen samenvatting wilt en veel audioberichten binnenkrijgt. De knop bovenaan geeft ook een kort gesproken description van de locatie van de samenvatting knop en wat het doet.

* Ook het tabben door het scherm is (letterlijk) enorm veranderd. Bij het tabben vergroten elementen en krijgt het een rode border. Deze rode border bestaat uit dots, omdat de elemeten al een border heeft. Hierdoor zal het voor de gebruiker duidelijker zijn welk element er gekozen is. Ook wordt de font-size groter, waardoor de gebruiker de tekst of element nog wel iets beter kan zien.

<img width="1512" height="867" alt="image" src="https://github.com/user-attachments/assets/db4e9764-ecde-4f75-bd0b-a0335a2d2c77" />


### Week 3 user test:

* Bewegende schermen is fijn om visueel de veranderingen te zien. Bijvoorbeeld bij het klikken op een knop dat de knop uitbreid of iets anders gebeurd.
* Extra stappen met knoppen bijvoorbeeld kan onhandig zijn, als de gebruiker vaak terug moet navigeren om bepaalde instellingen aan te passen.

#### Voor mij!

* Samenvatten naast de knop korter maken kwa naam.

* Goed opletten dat de vergroting met tab de pagina niet verschuift

* De verschillende chat personen in de linker menu mogen iets groter met teksten. Borders zijn al goed. De tab door de items mogen beter de status van de tab aangeven. 

* Samenvatting knop bovenin de pagina heeft een handige functie. Deze knop laat na het klikken weten waar de samenvatting gemaakt kan worden en wat er gebeurd met de knop. Dit geeft goede feedforward.

* De layout een klein beetje aanpassen, omdat de pagina best wel ingezoomd is. Dit is wel fijn voor de gebruiker, maar niet mooi in uiterlijk.

* De knop naast de audiobericht vat het spraakbericht samen, deze samenvatting conflicteert met de screenreader. Inplaats van het samenvatten vanuit de script, is het beter om de screenreader van Berend dit uit te spreken.  Dus de tekst voor de samenvatting moet niet voorgelezen worden door de script, maar door de screenreader van Berend.


#### Layout en functies website Week 3

* Deze week heb ik veranderingen doorgevoerd die te maken hebben met conflicten en een klein beetje met layout. Ik heb de "slim samenvatten" knop hier korter opgeschreven. Dit is geworden "vat samen".

* Ook heb ik layout aanpassingen doorgevoerd, zo heb ik het elemeent waarin de gebruiker kan typen en berichten van de persoon terug kan lezen vergroot. Dit is namelijk de plek waar de gebruiker meer op zal navigeren. Dit heb ik uitgevoerd door de "samenvatten" knop boven in het midden, naar links te verplaatsen en kleiner erin te zetten. Hierdoor neemt de knop minder ruimte in, terwijl de knop wel goed zichtbaar en groot blijft. Deze lege ruimte die erdoor is onstaan heb ik opgevuld met de chat zelf.

<img width="1512" height="862" alt="image" src="https://github.com/user-attachments/assets/40177146-8592-4c57-9861-54e6f26d19cf" />


### Exclusive Design principles:

#### Study situation:
Ik heb bij het maken van een zo accesible mogelijke chat app, een user test uit mogen voeren. Ik heb hierbij de blinde persoon vele vragen gesteld en de website ook laten testen. Hier heb ik elke week aanpassingen op weten te maken, zodat de website zo goed mogelijk gebruikt kan worden door de gebruiker. De gebruiker kan wel een heel klein beetje nog zien. Deze zicht kan gebruikt worden om sneller door de pagina te navigeren, daarom heb ik er ook voor gezorgd dat de leesbaarheid en de klikbaare items zo goed mogelijk voor de gebruiker zichtbaar zijn.

#### Ignore conventions:
Normaal gesproken hoort een website goed bruikbaar te zijn en overzichtelijk voor de gebruiker. De website is gemaakt rondom de testperoon en bevat elementen die minder niet fijn zijn om te gebruiken voor de gemiddelde gebruiker. Zo zitten er hele dikke borders in die de elementen goed aangeven. Ook de teksten en algemene layout is zo gemaakt dat het goed en snel te begrijpen is. De website is zo geoptimaliseerd dat de gebruiker niet meer in hoeft te zoomen op elementen om het beter te begrijpen. Dit haalt ook het probleem van "layout shifting" bij zoomen weg. Hiermee maak ik de website om de gebruiker heen en haal ik de normale conventions weg.

#### Prioritise identity:

Berend is de testpersoon, hij gaf aan dat hij vaak whatsapp of signal op mobiel en laptop gebruikt. Hierbij heb ik zijn gebruiksgemak overgenomen en de layout zo neergezet, dat het lijkt alsof de website WhatsApp is, met extra functionaliteiten. Ook gaf Berend aan dat niet alle berichten samengevat hoeven te worden, omdat er sommige berichten zijn die persoonlijk belangrijk zijn om te horen. Denk hierbij aan een spraakbericht van de moeder. Om de optie erbij toe te voegen, heb ik een algemene knop gemaakt bovenin de website. Hiermee kan Berend zelf kiezen of het handig is om de spraakberichten te samenvatten. Ook zal deze knop ervoor zorgen dat Berend minder vaak door de audiofragmenten hoeft te "tabben".

Ik vindt animaties vooral leuk om toe te voegen. Zo heb ik bij de interacties animaties toegevoegd die laten zien dat er een verandering plaats vindt op de pagina. Ik heb bijvoorbeeld bij het "tabben" de elementen groter laten maken met een animatie, zodat de gebruiker weet waar de "tab" zit. Dit vond Berend erg handig, omdat hij zo goed wist waar hij met de "tab" toets was.

#### Add nonsense:

Ik heb AI toegevoegd om de spraakberichten samen te vatten. Dit leek in eerste instante een lastige en niet behaalbare oplossing, maar nadat ik het had gevraagd en gevalideerd, werd het gewaardeerd. Er stonden hier wel vragen bij. Is het samenvatten van korte fragmenten wel redelijk? Worden de persoonlijke berichten ook samengevat, terwijl Berend dit juist wilt horen? Door deze vragen heb ik de AI samenvattings functie moeten herbedenken en de obstakels moeten vermijden. Om dit op te lossen heb ik de samenvatten knop bovenin gezet, deze knop zal alle spraakberichten in de chat de optie mee geven om het spraakbericht samen te vatten. Deze functie kan irritant werken, maar ook weer juist fijn voor Berend. Dit heb ik dus getest om zeker te zijn van de functionalteit. Deze knop vond Berend juist handig, omdat dit zo het aantal "tabben" verminderd. Ook geeft de algemene knop bovenin een korte description door de screenreader van Berend. Deze geeft de locatie en het gebruik van de AI knop aan.

Ook heb ik een aantal screenreader only teksten toegevoegd. Dit zijn teksten die handig zijn voor een blinde gebruiker, maar minder handig voor een andere gebruiker. Een voorbeeld is de chat zelf, hierin heb je twee personen die chatten. Aan de linker kant de ene persoon en de rechter kant de andere. De gebruiker die niet blind is, ziet direct welke kant wie is. En zo weet de gebruiker wie wat zegt. Maar een blinde persoon weet niet welk bericht afkomstig is van hemzelf en welk van de andere persoon. Dit heb ik opgelost en getest, Berend vond dit een hele fijne toevoeging eraan.


## Bronnen

### Natuurlijke spraak en setup
[ElevenLabs](https://elevenlabs.io/app/home)

### Onend gebruik voor als de audio afgelopen is
[Onend](https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/ended_event)
