import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	Container,
	Stack,
	Button,
	Grid,
} from "@mui/material";
import { projects } from "@root/constants/projects";
import { CvCard } from "@root/components/cvCard";

const ProjectPage: NextPage = () => {
	const router = useRouter();
	const { projectName } = router.query;
	const project = projects.find((x) => x.name === projectName);

	if (!project) {
		return <></>;
	}

	return (
		<main>
			{/* Hero unit */}
			<Box
				sx={{
					backgroundImage: `url(${project.image})`,
					// bgcolor: "background.paper",
					pt: 8,
					pb: 6,
				}}
			>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="primary.contrastText"
						gutterBottom
					>
						{project.displayName}
					</Typography>
					{/* <Typography
						variant="h5"
						align="center"
						color="primary.contrastText"
						paragraph
					>
						Something short and leading about the collection
						below—its contents, the creator, etc. Make it short and
						sweet, but not too short so folks don&apos;t simply skip
						over it entirely.
					</Typography> */}
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
		</main>
	);
};

export default ProjectPage;
