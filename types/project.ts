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
	techList: Tech[];
}

const techList = [
	"React.JS",
	"Next.JS",
	"TypeScript",
	"PostgreSQL",
	"HTML",
	"CSS",
	"C#.NET",
	"MQTT",
	"Ruby on Rails",
	"SQL Server",
	"Azure Cloud Services",
	"Bootstrap",
	"Vue.JS",
	"Nuxt.JS",
	"AWS",
	"JavaScript",
	"Material Design",
	"Azure DevOps",
	"Continious Integration",
	"Continious Deployment",
	"Redis",
	"SignalR",
	"React Native",
	"Android",
	"iOS",
	"Realm",
	"Scrum",
	"Jira",
] as const;

export type Tech = (typeof techList)[number];
