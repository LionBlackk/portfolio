import { links, projectsData, skillsData } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type ProjectProps = (typeof projectsData)[number];
export type SkillItemProps = (typeof skillsData)[number];
