import React from "react";
import PrintableHeroesImg from "../public/PrintableHeroes.jpg";
import { Project } from "@root/types/project";

export const projects: Project[] = [
	{
		displayName: "PrintableHeroes",
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
];
