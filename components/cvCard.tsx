import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@root/types/project";

export interface CvCardProps {
	project: Project;
}

export const CvCard: React.FC<CvCardProps> = (props) => (
	<Card
		sx={{
			height: "100%",
			display: "flex",
			flexDirection: "column",
		}}
	>
		<Image src={props.project.image} layout="responsive" />
		<CardContent sx={{ flexGrow: 1 }}>
			<Typography gutterBottom variant="h5" component="h2">
				{props.project.displayName}
			</Typography>
			<Typography>{props.project.shortDescription}</Typography>
		</CardContent>
		<CardActions>
			<Link href={`/projects/${props.project.name}`} passHref>
				<Button size="medium">View</Button>
			</Link>
		</CardActions>
	</Card>
);
