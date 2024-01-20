import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import React from "react";

const Projects = () => {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => {
        return (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default Projects;
