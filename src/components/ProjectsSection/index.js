import React, { useEffect, Fragment } from "react";
import Card from "../Card";
import theme from "../../theme/theme";
import { BsCodeSlash } from "react-icons/bs";
import { ProjectGrid } from "./PorjectSectionElements";
import { SectionTitle, FlexSection } from "../../elements/globalElements";
import { privateRepos } from "../../data/repos";

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
            <Card key={index} repo={repo}>
              <BsCodeSlash
                className="icon"
                style={{ width: "3rem", height: "auto", padding: "1rem" }}
              />
            </Card>
          );
        })}
        {privateRepos.map((repo, index) => {
          return (
            <Card key={index} repo={repo}>
              <BsCodeSlash
                className="icon"
                style={{ width: "3rem", height: "auto", padding: "1rem" }}
              />
            </Card>
          );
        })}
      </ProjectGrid>
    </FlexSection>
  );
};

export default ProjectsSection;
