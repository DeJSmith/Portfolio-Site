import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import theme from "../../theme/theme";
import { Shroud } from "./SummarySectionElements";

const SummarySection = () => {
  const open = "<";
  const close = "/>";
  return (
    <section style={{ height: "100vh", width: "100%" }}>
      <div style={{ color: `${theme.colorPrimary}` }}>
        <FaLaptopCode
          style={{
            height: "12rem",
            width: "12rem",
            color: `${theme.colorPrimary}`,
          }}
        />{" "}
        <div>
          <strong
            style={{ color: `${theme.colorSecondary}`, textAlign: "left" }}
          >
            Summary
          </strong>
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
      </div>
    </section>
  );
};

export default SummarySection;
