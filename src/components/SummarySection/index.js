import React from "react";
import {
  FloatingImg,
  SectionTitle,
  FlexSection,
} from "../../elements/globalElements";
import theme from "../../theme/theme";
import Laptop from "../../assets/coding.png";
import Job from "../../assets/job.svg";

const SummarySection = () => {
  const open = "<";
  const close = "/>";
  return (
    <FlexSection>
      <SectionTitle>Profile</SectionTitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          margin: "auto",
        }}
      >
        <div style={{ margin: "auto" }}>
          <br />
          <strong style={{ fontSize: "1.5rem" }}>{open}</strong>
          <p>
            {" "}
            I am a recent computer science graduate from the University of
            Canterbury with a passion for learning and problem solving. I am
            driven by achievement, innovation, and excellence and these are the
            qualities I will bring to a developer role within the industry.
            Full-stack web development has been the main focus of my independent
            development and study outside of the university. This is where I
            excel and set myself apart from my peers, I am innovative, skilled,
            and determined. Utilizing the programming fundamentals, I have
            gained throughout tertiary education, accompanied by my passion for
            the work, I pick up new technologies and languages easily and
            proficiently. This has helped me while working on my own projects
            that have required me to integrate foreign tools and technologies.
          </p>
          <strong style={{ fontSize: "1.5rem", right: "0" }}>{close}</strong>
        </div>
        <FloatingImg>
          <img src={Job} />{" "}
        </FloatingImg>
      </div>
    </FlexSection>
  );
};

export default SummarySection;
