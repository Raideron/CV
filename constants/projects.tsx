import React from "react";
import PrintableHeroesImg from "../public/PrintableHeroes.jpg";
import SmartLinkImg from "../public/SmartLink2.png";
import CertusImg from "../public/certus.jpg";
import IrisImg from "../public/iris.png";
import ConnectedGardenImg from "../public/connectedgarden.jpg";
import { Project } from "@root/types/project";

export const projects: Project[] = [
	{
		displayName: (
			<>
				Printable
				<wbr />
				Heroes
			</>
		),
		name: "printableheroes",
		image: PrintableHeroesImg,
		website: "https://printableheroes.com",
		startDate: new Date(2017, 11 - 1),
		endDate: null,
		techList: [
			"Azure Cloud Services",
			"Azure DevOps",
			"Bootstrap",
			"C#.NET",
			"Continious Deployment",
			"Continious Integration",
			"CSS",
			"HTML",
			"JavaScript",
			"Next.JS",
			"PostgreSQL",
			"React.JS",
			"TypeScript",
		],
		shortDescription: (
			<p>
				PrintableHeroes is een website waar mensen afbeeldingen kunnen
				doorzoeken en downloaden voor Dungeons &amp; Dragons.
			</p>
		),
		longDescription: (
			<>
				<p>
					PrintableHeroes is een website waar mensen afbeeldingen
					kunnen doorzoeken en downloaden voor Dungeons &amp; Dragons.
					Deze afbeeldingen kunnen worden geprint en in elkaar gezet
					worden als een soort pionnetjes om het spel te spelen.{" "}
					<a
						href={"https://printableheroes.com/gallery"}
						target="_blank"
						rel="noreferrer"
					>
						Klik hier voor de gallerij met voorbeelden.
					</a>
				</p>

				<p>
					Dit project heb ik zelf opgezet door contact op te nemen met
					de tekenaar. Ik heb een proof of concept laten zien wat
					overtuigend genoeg was om het project te starten. Zo is het
					op kleine schaal begonnen en door de jaren heen verder
					gegroeid.
				</p>

				<p>
					Ik ben de enige developer ben op dit project. Daarom heb ik
					de vrijheid om de nieuwste technieken uit te proberen.
					Momenteel gebruik ik React, Next.JS en TypeScript voor de
					frontend. Hierbij maak ik ook gebruik van de Bootstrap
					component library. Voor de backend gebruik ik .NET om de API
					te bouwen. Deze is verbonden met een PostgreSQL database. De
					volledige applicatie wordt gehost met Azure Cloud Services.
				</p>

				<p>
					Dit project is voor mij echt een passieproject. Ik sta
					direct in contact met de gebruikers (ik ben zelf ook een
					gebruiker). Ik krijg van de opdrachtgever veel vertrouwen om
					verbeteringen te maken. Ook heb ik hiermee van mijn hobby
					mijn werk kunnen maken. Dus ik hoop nog lang voor dit
					project te mogen werken.
				</p>
			</>
		),
	},
	{
		name: "smartlink",
		displayName: "SmartLink 2.0",
		image: SmartLinkImg,
		startDate: new Date(2018, 9 - 1),
		endDate: new Date(2019, 9 - 1),
		techList: [
			"Azure Cloud Services",
			"Azure DevOps",
			"C#.NET",
			"Continious Integration",
			"CSS",
			"HTML",
			"JavaScript",
			"Material Design",
			"React.JS",
			"Redis",
			"SignalR",
			"SQL Server",
		],
		shortDescription: (
			<>
				<p>
					Als lid van het front-end team was het mijn taak om te
					werken aan het portaal dat in React is gemaakt en de
					bijbehorende API die is gemaakt met .NET Core 2.1. De API
					werkte samen met een SQL server database en verschillende
					externe API&apos;s om de benodigde data aan de gebruiker te
					kunnen tonen.
				</p>
			</>
		),
		longDescription: (
			<>
				<p>
					Smartlink 2.0 is een project voor Atlas Copco. Atlas Copco
					is een bedrijf dat luchtcompressoren bouwt. Om deze
					compressoren te monitoren kunnen klanten van Atlas Copco een
					webportaal gebruiken dat informatie toont doormiddel van
					onder andere grafieken en tabellen. Het bestaande portaal,
					Smartlink 1, was erg langzaam en moest worden vervangen door
					Smartlink 2.0.
				</p>
				<p>
					Als lid van het front-end team was het mijn taak om te
					werken aan het portaal dat in React is gemaakt en de
					bijbehorende API die is gemaakt met .NET Core 2.1. De API
					werkte samen met een SQL server database en verschillende
					externe API&apos;s om de benodigde data aan de gebruiker te
					kunnen tonen.
				</p>
				<p>
					Binnen het project heb ik het meeste gewerkt met React. Ik
					heb kunnen bijdragen aan het verbeteren van het project door
					het gebruik van nieuwe JavaScript syntax, zoals bijvoorbeeld
					async/await. Ik heb gewerkt aan het splitsen van
					verantwoordelijkheden van stukken code. Door het toevoegen
					en configureren van ESLint werd de JavaScript code
					consistenter en was het makkelijker om fouten voor te zijn.
					Mijn grootste bijdrage ligt in de performance van de React
					code en het efficiënt toepassen van de response cache.
				</p>
				<p>
					Het resultaat is een portaal dat miljoenen berichten kan
					tonen op een manier die duidelijker is voor de gebruiker en
					vele malen sneller dan Smartlink 1. De eerste gebruikers
					worden op dit moment aangesloten op de nieuwe applicatie.
				</p>
				<p>
					Ik ben erg tevreden met de mogelijkheid die ik heb gehad om
					nieuwe technieken te leren. Ik heb binnen dit project veel
					geleerd over het structureren van code in .NET Core. Voor
					dit project had ik nog niet eerder met React gewerkt. Ik heb
					hier veel over geleerd en zou hier ook zeker vaker mee
					willen werken. In toekomstige React projecten zou ik echter
					wel met Typescript/React willen werken in plaats van
					JavaScript/React.
				</p>
			</>
		),
	},
	{
		name: "pass",
		displayName: "PASS Webportaal",
		image: CertusImg,
		startDate: new Date(2019, 11 - 1),
		endDate: new Date(2020, 12 - 1),
		techList: [
			"AWS",
			"C#.NET",
			"CSS",
			"HTML",
			"JavaScript",
			"Nuxt.JS",
			"SignalR",
			"TypeScript",
			"Vue.JS",
		],
		shortDescription: (
			<>
				<p>
					PASS is een systeem dat wordt gebruikt op container
					terminals. Hierop wordt informatie getoond over treinen en
					vrachtwagens. Ik heb een front-end gebouwd dat deze
					informatie in real time kan weergeven. Dit systeem is
					gebouwd met Vue.js, Nuxt.js, TypeScript en SignalR.
				</p>
			</>
		),
		longDescription: (
			<>
				<p>
					Het PASS systeem wordt gebouwd en onderhouden door Certus
					Port Automation. Certus was bezig met het bouwen van de
					nieuwste versie: PASS 5.0. ICT heeft aan dit project
					meegewerkt.
				</p>
				<p>
					Vanwege mijn ervaring met vorige projecten ben ik hier
					ingezet als front-end developer. Het systeem moest bij de
					klant in een browser kunnen draaien. Certus had ervoor
					gekozen om het front-end deel van het project met Vue.JS te
					bouwen. Dit was voor mij een nieuw framework dat mij de
					mogelijkheid zou geven om nieuwe kennis op te doen.
				</p>
				<p>
					Ik heb in dit project mijn best gedaan om componenten
					makkelijk herbruikbaar te maken. Dit heb ik gedaan door
					runtime errors zoveel mogelijk voor te zijn met compile time
					errors. Dit kon door het gebruik van ESLint en strenge
					interfaces in TypeScript.
				</p>
				<p>
					Samen met mijn collega’s heb ik een robuust front-end
					systeem kunnen bouwen. Doordat we in dit systeem goed hebben
					nagedacht over de componentenstructuur was het eenvoudig om
					componenten te hergebruiken en nieuwe pagina’s te bouwen.
					Door de bovengenoemde acties in combinatie met een build
					pipeline op pull-requests werden menselijke fouten effectief
					voorkomen.{" "}
				</p>
				<p>
					Ik was minder tevreden over Vue.js dan over React. Dit komt
					doordat Vue geen volledige ondersteuning biedt voor
					typescript. Ook is het gedrag voor het updaten van de pagina
					minder makkelijk te voorspellen dan React. Ik zou zelf Vue
					dan ook niet voor een nieuw project kiezen. Desondanks deze
					tekortkomingen ben ik tevreden met hoe we in het team hier
					omheen hebben kunnen werken.
				</p>
			</>
		),
	},
	{
		name: "iris",
		displayName: "Iris Webportaal",
		image: IrisImg,
		startDate: new Date(2020, 5 - 1),
		endDate: new Date(2020, 9 - 1),
		techList: [
			"Azure DevOps",
			"Bootstrap",
			"C#.NET",
			"Continious Integration",
			"CSS",
			"HTML",
			"JavaScript",
			"React.JS",
			"TypeScript",
		],
		shortDescription: (
			<>
				<p>
					Raster was een webportaal aan het bouwen waarmee ingenieurs
					in een fabriek zelf een dashboard samen konden stellen. Dit
					project heette Iris. Vanwege mijn ervaring met React en
					Typescript was mij gevraagd om het team te versterken op dit
					gebied. Ook heb ik het team geholpen met verschillende Scrum
					onderdelen.
				</p>
			</>
		),
		longDescription: (
			<>
				<p>
					Raster was een webportaal aan het bouwen waarmee ingenieurs
					in een fabriek zelf een dashboard samen konden stellen. Dit
					project heette Iris. Vanwege mijn ervaring met React en
					Typescript was mij gevraagd om het team te versterken op dit
					gebied.
				</p>
				<p>
					Ik heb gewerkt aan het bouwen van een generiek data
					overzicht en heb verbeteringen gemaakt aan de Typescript
					implementatie. Hier heb ik de focus gelegd op het correct
					gebruik van Typescript datatypes.
				</p>
				<p>
					Verder heb ik meegeholpen met de migratie van Bitbucket naar
					Azure DevOps. Dit gaf het team meer mogelijkheden voor het
					nakijken van code. Hiervoor heb ik ook de bijbehorende
					pipeline opgezet.
				</p>
				<p>
					Ook heb ik het team geholpen met verschillende Scrum
					onderdelen. Een aantal teamleden waren al zeer bekend met
					het domein waarin werd gewerkt. Hierdoor leek er
					geenbehoefte te zijn om taken zeer gedetailleerd te
					beschrijven. Dit zorgde er soms voor dat het voor de
					nieuwere teamleden niet duidelijk was wat er moest gebeuren.
					Om dit te verbeteren heb ik het team begeleid in het
					structureel inplannen van refinement vergaderingen en hoe
					deze kunnen worden uitgevoerd zodat de taken goed omschreven
					en ingeschat zijn. Ditzelfde is ook gebeurd voor de
					restrospective vergaderingen.
				</p>
				<p>
					Vanwege vraag vanuit een vorig project moest ik eerder
					stoppen met dit project. Hierdoor heb ik niet het
					eindresultaat van het product kunnen meemaken. Tijdens mijn
					laatste overleg heeft het team laten weten zeer tevreden te
					zijn met hulp en kennis die ik heb kunnen overdragen op het
					gebied van Typescript en Scrum.
				</p>
				<p>
					Ik vond dit een leuk project om aan te werken. Op technisch
					vlak heb ik kunnen werken met React en Typescript, waar ik
					een sterke voorkeur voor heb. Ook heb ik dit project voor
					het eerst de kans gekregen om een team te begeleiden in
					Scrum concepten. Dit vond ik erg leuk om te doen en hoop die
					kans vaker te krijgen.
				</p>
			</>
		),
	},
	{
		name: "connectedgarden",
		displayName: "Connected Garden",
		image: ConnectedGardenImg,
		startDate: new Date(2016, 9 - 1),
		endDate: new Date(2017, 2 - 1),
		techList: ["Bootstrap", "CSS", "HTML", "JavaScript", "Ruby on Rails"],
		shortDescription: (
			<>
				<p>
					Voor mijn eerste stage heb ik een webportaal gemaakt (Ruby
					on Rails) dat gebruikt kon worden om tuinen te monitoren met
					de sensoren daarin. Ik heb MQTT gebruikt om berichten van de
					sensoren naar een SQL database te sturen. Deze data kon
					vervolgens worden ingezien in het webportaal. De applicatie
					kon de gebruikers dan een notificatie sturen wanneer ze hun
					planten water moesten geven. Deze notificatie werd gegeneerd
					aan de hand van de sensordata en data van Open Weather Maps.
				</p>
			</>
		),
		longDescription: (
			<>
				<p>
					Connected Garden was een nieuwe startup die mensen wou
					helpen om hun tuin te onderhouden. Connected Garden stond al
					in contact met een groep studenten die een regensensor
					hadden ontwikkeld zonder bewegende onderdelen. Deze
					regen&shy;sensoren werden gecombineerd met sensoren die de
					vochtigheid van de grond konden meten om de gebruiker te
					informeren.
				</p>
				<p>
					Mijn taak was om een systeem te ontwikkelen dat de data van
					de sensoren kon opslaan. Deze data moest vervolgens getoond
					worden op een gebruiksvriendelijk manier. Ik was vrij om
					suggesties te doen over het verwerken en tonen van de data.
				</p>
				<p>
					Ik heb MQTT en Ruby on Rails gebruikt om de data van de
					sensoren op te slaan in een SQL database. Met Ruby on Rails
					is een webapplicatie gebouwd waarin de gebruikers konden
					inloggen en de staat van hun tuin konden monitoren. Ik heb
					de applicatie zo gebouwd dat de gebruikers een notificatie
					zouden krijgen wanneer ze hun planten water moesten geven.
					De notificatie werd verstuurd aan de hand van data die
					afkomstig was van de sensoren,{" "}
					<a
						href="https://openweathermap.org/"
						target="_blank"
						rel="noreferrer"
					>
						Open Weather Map
					</a>{" "}
					en het type plant. Het systeem was zou gebouwd dat
					gebruikers per sectie van hun tuin konden aangeven welke
					planten aanwezig waren. Ik heb de applicatie aan een planten
					database gekoppeld. Hierdoor wist de applicatie wat de
					behoeften van elke plantensoort in de tuin waren.
				</p>
				<p>
					Het project heeft geresulteerd in een webapplicatie die de
					benodigde informatie toonde aan de gebruikers. Het product
					is gedemonstreerd tijdens een beurs aan professionele
					tuiniers. Zij waren zeer positief over de applicatie. Helaas
					duurde mijn stage niet lang genoeg om dit project af te
					kunnen ronden.
				</p>
			</>
		),
	},
];
