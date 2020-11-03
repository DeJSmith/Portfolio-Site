import React from "react";
import {
  FloatingImg,
  SectionTitle,
  FlexSection,
  SkillsOrb,
} from "../../elements/globalElements";
import Job from "../../assets/job.svg";
import { Liflex } from "./SummarySectionElements";
import {
  FaAngular,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
} from "react-icons/fa";
import { SiRedux, SiTypescript, SiCsharp } from "react-icons/si";
import { DiJavascript, DiSass } from "react-icons/di";
import theme from "../../theme/theme";

const SummarySection = () => {
  const open = "<";
  const close = "/>";
  return (
    <FlexSection id="profile">
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
          <p style={{ marginLeft: "2rem" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            adipisci amet eveniet architecto dolorum, error reiciendis
            repellendus perspiciatis dignissimos soluta porro ratione explicabo
            repellat, nobis iure commodi magnam odio voluptate.
          </p>
          <strong style={{ fontSize: "1.5rem", right: "0" }}>{close}</strong>
        </div>
        <FloatingImg>
          <img src={Job} />{" "}
        </FloatingImg>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <strong style={{ color: `${theme.colorPrimary}`, fontSize: "2rem" }}>
          Languages & Technologies
        </strong>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "2rem 4rem",
            marginTop: "3rem",
          }}
        >
          <Liflex>
            {" "}
            <SkillsOrb>
              <FaHtml5
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>HTML5</strong>
          </Liflex>

          <Liflex>
            {" "}
            <SkillsOrb>
              <FaCss3Alt
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>CSS</strong>
          </Liflex>

          <Liflex>
            {" "}
            <SkillsOrb>
              <DiJavascript
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>JavaScript</strong>
          </Liflex>

          <Liflex>
            {" "}
            <SkillsOrb>
              <SiCsharp
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>C#</strong>
          </Liflex>

          <Liflex>
            {" "}
            <SkillsOrb>
              <FaPython
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>Python</strong>
          </Liflex>
        </ul>

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "2rem 4rem",
          }}
        >
          <Liflex>
            <SkillsOrb>
              <FaAngular
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>Angular</strong>
          </Liflex>

          <Liflex>
            <SkillsOrb>
              <FaVuejs
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>Angular</strong>
          </Liflex>

          <Liflex>
            {" "}
            <SkillsOrb>
              <FaReact
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>React</strong>
          </Liflex>

          <Liflex>
            {" "}
            <SkillsOrb>
              <SiTypescript
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>TypeScript</strong>
          </Liflex>

          <Liflex>
            {" "}
            <SkillsOrb>
              <SiRedux
                className="icon"
                style={{
                  width: "3rem",
                  height: "auto",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </SkillsOrb>
            <strong>Redux</strong>
          </Liflex>
        </ul>
      </div>
    </FlexSection>
  );
};

export default SummarySection;
