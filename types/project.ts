import React from "react";
import { StaticImageData } from "next/image";

export interface Project {
	displayName: React.ReactNode;
	name: string;
	shortDescription: React.ReactNode;
	longDescription: React.ReactNode;
	image: StaticImageData;
	website?: string;
	startDate: Date;
	endDate: Date | null;
}
