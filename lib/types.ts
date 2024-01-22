import { links, projectsData } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type ProjectProps = (typeof projectsData)[number];
