import React from "react";

export interface Project {
	displayName: string;
	name: string;
	shortDescription: React.ReactNode;
	longDescription: React.ReactNode;
	image: string;
	website?: string;
}
