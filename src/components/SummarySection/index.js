import React from "react";
import {
  FloatingImg,
  SectionTitle,
  FlexSection,
  SkillsOrb,
} from "../../elements/globalElements";
import Job from "../../assets/job.svg";
import { Liflex, FlexWrapper, SkillsWrapper } from "./SummarySectionElements";
import {TextWrapper} from '../../elements/globalElements';
import theme from "../../theme/theme";
import {skills} from '../../data/data';

const SummarySection = () => {
  const open = "<";
  const close = "/>";
  return (
    <FlexSection id="profile">
      <SectionTitle>Profile</SectionTitle>
      <FlexWrapper
      

      >
        <div style={{ margin: "auto" }}>
          <br />
          <strong style={{ fontSize: "1.5rem" }}>{open}</strong>
          <TextWrapper>
          <p style={{ marginLeft: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            adipisci amet eveniet architecto dolorum, error reiciendis
            repellendus perspiciatis dignissimos soluta porro ratione explicabo
            repellat, nobis iure commodi magnam odio voluptate.
          </p>
          </TextWrapper>
          <strong style={{ fontSize: "1.5rem", right: "0" }}>{close}</strong>
        </div>
        <FloatingImg>{theme.profileImg}</FloatingImg>
      </FlexWrapper>
      <div style={{ marginTop: "2rem" }}>
        <strong style={{ color: `${theme.colorPrimary}`, fontSize: "2rem" }}>
          Languages & Technologies
        </strong>
        <SkillsWrapper

        >
          {skills.map((skill, index) => {
            console.log(skill);
            return (          
            <Liflex key={index}>
              <SkillsOrb>
                {skill.icon}
                <strong style={{marginTop: '.5rem'}}>{skill.name}</strong>
              </SkillsOrb>
            </Liflex>)
          })}

 

          </SkillsWrapper>
       
      </div>
    </FlexSection>
  );
};

export default SummarySection;
