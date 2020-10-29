import React, { useEffect, Fragment } from "react";
import ProjectCard from "../ProjectCard";

import { ProjectGrid } from "./PorjectSectionElements";

import Stack from "../CardStack";
import CardStack from "../CardStack";

const ProjectsSection = ({ repoData }) => {
  return (
    <section>
      <h1>Projects</h1>
      <CardStack repos={repoData}></CardStack>
    </section>
  );
};

export default ProjectsSection;
