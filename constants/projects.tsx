import React from "react";
import PrintableHeroesImg from "../public/PrintableHeroes.jpg";
import SmartLinkImg from "../public/SmartLink2.png";
import CertusImg from "../public/certus.jpg";
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
		shortDescription: (
			<p>
				PrintableHeroes is een website waar mensen afbeeldingen kunnen
				doorzoeken en downloaden voor Dungeons & Dragons.
			</p>
		),
		longDescription: (
			<>
				<p>
					PrintableHeroes is een website waar mensen afbeeldingen
					kunnen doorzoeken en downloaden voor Dungeons & Dragons.
					Deze afbeeldingen kunnen worden geprint en in in elkaar
					gezet worden als een soort pionnetjes om het spel te spelen.{" "}
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
					de vrijheid om de nieuwste technieken uit te proberen. De
					meest belangrijkste technieken die ik momenteel gebruik
					zijn:
					<ul>
						<li>React</li>
						<li>Next.JS</li>
						<li>Bootstrap</li>
						<li>.NET</li>
						<li>PostgreSQL</li>
						<li>Azure Cloud Services</li>
					</ul>
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
		shortDescription: (
			<>
				<p>
					Als lid van het front-end team was het mijn taak om te
					werken aan het portaal dat in React is gemaakt en de
					bijbehorende API die is gemaakt met .NET Core 2.1. De API
					werkte samen met een SQL server database en verschillende
					externe API’s om de benodigde data aan de gebruiker te
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
					web portaal gebruiken dat informatie toont doormiddel van
					onder andere grafieken en tabellen. Het bestaande portaal,
					Smartlink 1, was erg langzaam en moest worden vervangen door
					Smartlink 2.0.
				</p>
				<p>
					Als lid van het front-end team was het mijn taak om te
					werken aan het portaal dat in React is gemaakt en de
					bijbehorende API die is gemaakt met .NET Core 2.1. De API
					werkte samen met een SQL server database en verschillende
					externe API’s om de benodigde data aan de gebruiker te
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
];
