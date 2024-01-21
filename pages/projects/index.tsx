import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NextPage } from "next";
import { CvCard } from "@root/components/cvCard";
import { projects } from "@root/constants/projects";

export const ProjectsOverviewPage: NextPage = () => (
	<main>
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
					Portfolio
				</Typography>
			</Container>
		</Box>

		<Container maxWidth="md" sx={{ mb: 3 }}>
			<Grid container spacing={3}>
				{projects.map((project) => (
					<Grid item key={project.name} xs={12} sm={6} md={4}>
						<CvCard project={project} />
					</Grid>
				))}
			</Grid>
		</Container>
	</main>
);

export default ProjectsOverviewPage;
