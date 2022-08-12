import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Typography, Box, Container, Stack, Button, Chip } from "@mui/material";
import _ from "lodash";
import { projects } from "@root/constants/projects";

const ProjectPage: NextPage = () => {
	const router = useRouter();
	const { projectName } = router.query;
	const project = projects.find((x) => x.name === projectName);

	if (!project) {
		return <></>;
	}

	const formatDate = (date: Date | null): string => {
		if (date === null) {
			return "heden";
		}
		return `${_.padStart(
			`${date.getMonth() + 1}`,
			2,
			"0",
		)}-${date.getFullYear()}`;
	};

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
					>
						{project.displayName}
					</Typography>
					<Box
						sx={{
							display: "flex",
							gap: 1,
							flexWrap: "wrap",
						}}
					>
						{project.techList.map((tech) => (
							<Chip key={tech} label={tech} />
						))}
					</Box>
					<Typography
						component="h1"
						variant="subtitle1"
						align="center"
						color="text.secondary"
						gutterBottom
					>
						{`${formatDate(project.startDate)} t/m ${formatDate(
							project.endDate,
						)}`}
					</Typography>

					{!!project.website && (
						<Stack
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

					<Typography variant="body1">
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
