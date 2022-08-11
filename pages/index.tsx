import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NextPage } from "next";
import Link from "next/link";
import { CvCard } from "@root/components/cvCard";
import { projects } from "@root/constants/projects";

export const AlbumPage: NextPage = () => (
	<main>
		{/* Hero unit */}
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 8,
				pb: 6,
			}}
		>
			<Container maxWidth="sm">
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
				>
					Alex Poley
				</Typography>
				<Typography
					component="h2"
					variant="subtitle1"
					align="center"
					color="text.secondary"
					gutterBottom
				>
					Portfolio van een Web Developer
				</Typography>

				<Typography align="left" paragraph>
					Hallo, leuk dat je naar mijn portfolio kijkt. Ik hoop dat
					hier wat leuke projecten staan die je aanspreken.
				</Typography>

				<Typography variant="h4" align="left">
					Over mij
				</Typography>
				<Typography align="left" paragraph>
					Ik vind het leuk om applicaties te bouwen die zowel snel
					zijn en er goed uitzien. Het meest creatief ben ik wanneer
					ik de wensen van de klant kan omzetten in een nieuw soort
					webpagina. Hierbij vind ik het leuk om deze pagina zo
					intuïtief mogelijk te laten voelen voor de gebruiker.
				</Typography>
				<Typography align="left" paragraph>
					Ik heb tijdens mijn loopbaan een diepgaande kennis opgebouwd
					van React en TypeScript, ondersteund door .NET api&apos;s.
					Door deze stack zowel in teamverband als individueel te
					beoefenen heb ik veel verschillende technieken en aanpakken
					kunnen uitproberen.
				</Typography>

				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Link href="/projects" passHref>
						<Button variant="contained" color="primary">
							Bekijk Portfolio
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	</main>
);

export default AlbumPage;
