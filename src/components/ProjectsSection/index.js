import React, { useEffect, Fragment } from "react";
import Card from "../Card";
import theme from "../../theme/theme";
import { BsCodeSlash } from "react-icons/bs";
import { ProjectGrid } from "./PorjectSectionElements";
import { SectionTitle, FlexSection } from "../../elements/globalElements";

const ProjectsSection = ({ repoData }) => {
  const liveRepos = ["AuctionHouse"];
  return (
    <FlexSection
      style={{
        marginBottom: "5rem",
      }}
    >
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {repoData.map((repo, index) => {
          if (liveRepos.includes(repo.name)) {
            console.log(repo.name);
            repo["live"] = true;
          }
          if (index < 6) {
            return (
              <Card key={index} repo={repo}>
                <BsCodeSlash
                  className="icon"
                  style={{ width: "3rem", height: "auto" }}
                />
              </Card>
            );
          }
        })}
      </ProjectGrid>
    </FlexSection>
  );
};

export default ProjectsSection;
