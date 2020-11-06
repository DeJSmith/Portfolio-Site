import React from "react";
import theme from "../../theme/theme";
import { SectionTitle, FlexSection,   SkillsOrb, TextWrapper  } from "../../elements/globalElements";
import { Liflex, SkillsWrapper, CourseGrid} from './SkillsSectionElements';
import {skills, courses} from '../../data/data';
import Card from '../Card';

const SkillsSection = () => {
  return (
    <FlexSection id="skills">
      <SectionTitle>Skills And Courses</SectionTitle>

      <TextWrapper>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut possimus, incidunt ut veniam consequuntur numquam velit quae vel voluptates deleniti, quod beatae et asperiores ratione debitis molestiae maiores. Obcaecati, eveniet.Sit incidunt aperiam nobis magni vel nisi nostrum quasi voluptatum minus, expedita quod obcaecati harum dolorum culpa provident quaerat iure ad necessitatibus laborum labore non eius debitis. Nemo, quo autem?</div>
      </TextWrapper>


      <div style={{ marginTop: "2rem" }}>

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

      <strong style={{ color: `${theme.colorPrimary}`, fontSize: "2rem", marginTop:'2rem', marginBottom:'2rem' }}>
          Courses
        </strong>

      <div style={{marginTop: '2rem'}}>
        <CourseGrid>        
          {courses.map((course, index) => {
          return (
            <Card course={course} key={index}>
              {course.icon}
            </Card>
          )
        })}</CourseGrid>

      </div>

    </FlexSection>
  );
};

export default SkillsSection;
