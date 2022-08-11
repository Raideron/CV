import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
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
						sx={{ pb: 2 }}
					>
						{project.displayName}
					</Typography>

					{!!project.website && (
						<Stack
							sx={{ pb: 2 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						>
							<Button
								variant="contained"
								href={project.website}
								target="_blank"
							>
								Website
							</Button>
						</Stack>
					)}

					<Typography color="text.primary" variant="body1">
						{project.longDescription}
					</Typography>
				</Container>
			</Box>
		</main>
	);
};

export const getStaticPaths: GetStaticPaths = () => ({
	paths: projects.map((project) => ({
		params: { projectName: project.name },
	})),
	fallback: false, // can also be true or 'blocking'
});

export const getStaticProps: GetStaticProps = () => ({
	props: {},
});

export default ProjectPage;
