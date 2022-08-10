import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";
import React from "react";
import Link from "next/link";
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
		<CardMedia
			component="img"
			sx={
				{
					// 16:9
					// pt: "56.25%",
				}
			}
			image={props.project.image}
		/>
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
