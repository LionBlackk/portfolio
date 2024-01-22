"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section className="scroll-mt-28" id="projects" ref={ref}>
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
