import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Typography, Box, Container, Stack, Button } from "@mui/material";
import { projects } from "@root/constants/projects";

const ProjectPage: NextPage = () => {
	const router = useRouter();
	const { projectName } = router.query;
	const project = projects.find((x) => x.name === projectName);

	if (!project) {
		return <></>;
	}

	return (
		<main>
			<Box
				sx={{
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
						sx={{ pb: 4 }}
					>
						{project.displayName}
					</Typography>

					{!!project.website && (
						<Stack
							sx={{ pb: 4 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						>
							<Button
								variant="contained"
								href={project.website}
								target="_blank"
							>
								View website
							</Button>
						</Stack>
					)}

					<Typography
						sx={{ pt: 4 }}
						color="text.primary"
						variant="body1"
					>
						{project.longDescription}
					</Typography>
				</Container>
			</Box>
		</main>
	);
};

export default ProjectPage;
