import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NextPage } from "next";
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
					gutterBottom
				>
					Curriculum Vitae
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					paragraph
				>
					Something short and leading about the collection below—its
					contents, the creator, etc. Make it short and sweet, but not
					too short so folks don&apos;t simply skip over it entirely.
				</Typography>
				<Stack
					sx={{ pt: 4 }}
					direction="row"
					spacing={2}
					justifyContent="center"
				>
					<Button variant="contained">Main call to action</Button>
					<Button variant="outlined">Secondary action</Button>
				</Stack>
			</Container>
		</Box>

		<Container sx={{ py: 8 }} maxWidth="md">
			<Grid container spacing={4}>
				{projects.map((project) => (
					<Grid item key={project.displayName} xs={12} sm={6} md={4}>
						<CvCard project={project} />
					</Grid>
				))}
			</Grid>
		</Container>
	</main>
);

export default AlbumPage;
