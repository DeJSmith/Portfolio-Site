import React from "react";
import {
  FloatingImg,
  SectionTitle,
  FlexSection,
} from "../../elements/globalElements";
import { FaGraduationCap, FaUser } from "react-icons/fa";
import {FlexWrapper } from "./SummarySectionElements";
import {TextWrapper} from '../../elements/globalElements';
import theme from "../../theme/theme";


const SummarySection = () => {
  return (
    <FlexSection id="profile">
      <SectionTitle>Profile</SectionTitle>
      <FlexWrapper
      

      >
        <div style={{ margin: "auto" }}>
          <br />
         
          <TextWrapper>
            <div style={{marginBottom: '1rem'}}>
            <FaUser
                  style={{
                    color: theme.colorSecondary,
                    width: "2rem",
                    height: "auto",
                  }}
                />
                <strong
                  style={{
                    color: theme.colorTertiary,
                    fontSize: "1.5rem",
                    marginLeft: ".5rem",
                  }}
                >
                  About Me
                </strong>
                </div>
            <div style={{marginBottom: '2rem'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            adipisci amet eveniet architecto dolorum, error reiciendis
            repellendus perspiciatis dignissimos soluta porro ratione explicabo
            repellat, nobis iure commodi magnam odio voluptate.
          </div>
            

          
              <div style={{ marginBottom: "1rem" }}>
                {" "}
                <FaGraduationCap
                  style={{
                    color: theme.colorSecondary,
                    width: "2rem",
                    height: "auto",
                  }}
                />
                <strong
                  style={{
                    color: theme.colorTertiary,
                    fontSize: "1.5rem",
                    marginLeft: ".5rem",
                  }}
                >
                  University of Canterbury
                </strong>
              </div>
              <div style={{marginBottom: '2rem'}}>

                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, hic corporis recusandae officiis qui ipsa eius dolorem
                deserunt? Libero blanditiis sit dolor dignissimos dolore modi
                quod voluptas possimus pariatur consequuntur.
              </div>
   
            
              <div style={{ marginBottom: "1rem" }}>
                {" "}
                <FaGraduationCap
                  style={{
                    color: theme.colorSecondary,
                    width: "2rem",
                    height: "auto",
                  }}
                />
                <strong
                  style={{
                    color: theme.colorTertiary,
                    fontSize: "1.5rem",
                    marginLeft: ".5rem",
                  }}
                >
                  Ara Institute of Canterbury
                </strong>
              </div>
              <div>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam aperiam magnam sequi, labore ab ut ducimus, laudantium
                deserunt rem dolorum ex eos voluptas nemo! Officiis voluptatem
                deleniti eveniet quibusdam exercitationem.Mollitia porro soluta
                dolorum animi officia ipsa error non quam, cupiditate
                accusantium iure facere aperiam ratione quisquam fuga natus
                tempore culpa blanditiis, aliquam ut fugiat repellat accusamus
                vel pariatur! Ducimus!
              </div>
          </TextWrapper>
          
        </div>
        <FloatingImg>{theme.profileImg}</FloatingImg>
      </FlexWrapper>

    </FlexSection>
  );
};

export default SummarySection;
