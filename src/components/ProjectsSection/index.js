import React from "react";
import theme from "../../theme/theme";
import { ProjectGrid } from "./PorjectSectionElements";

import { SectionTitle, FlexSection } from "../../elements/globalElements";
import { privateRepos } from "../../data/data";
import ProjectCard from '../ProjectCard';
import LivePreview from '../LivePreview';

const ProjectsSection = ({ repoData }) => {
  const liveRepos = ["AuctionHouse"];
  return (
    <FlexSection
      id="projects"
      style={{
        marginBottom: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {repoData.map((repo, index) => {
          return (
            <ProjectCard key={index} repo={repo}>
              {repo.icon}
            </ProjectCard>
          );
        })}
        {privateRepos.map((repo, index) => {
          return (
            <ProjectCard key={index} repo={repo}>
              {repo.icon}
            </ProjectCard>
          );
        })}
      </ProjectGrid>
      <br/>
      <br/>
      <LivePreview />
    </FlexSection>
  );
};

export default ProjectsSection;
