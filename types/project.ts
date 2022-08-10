import React from "react";
import { StaticImageData } from "next/image";

export interface Project {
	displayName: string;
	name: string;
	shortDescription: React.ReactNode;
	longDescription: React.ReactNode;
	image: StaticImageData;
	website?: string;
}
