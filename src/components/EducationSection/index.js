import React from "react";
import Grad from "../../assets/Grad.svg";
import Post from "../../assets/Post.svg";
import theme from "../../theme/theme";
import { FaGraduationCap } from "react-icons/fa";
import { SectionTitle, FlexSection } from "../../elements/globalElements";

const EducationSection = () => {
  return (
    <FlexSection>
      <SectionTitle>Education</SectionTitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 4fr",
          margin: "auto",
        }}
      >
        <img src={Post} style={{ width: "400px", height: "auto" }} />

        <div
          style={{
            color: theme.colorPrimary,
            fontSize: "1rem",
            margin: "auto",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            <li style={{ display: "flex", flexDirection: "column" }}>
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
              <div>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, hic corporis recusandae officiis qui ipsa eius dolorem
                deserunt? Libero blanditiis sit dolor dignissimos dolore modi
                quod voluptas possimus pariatur consequuntur.
              </div>
            </li>
            <br />
            <br />
            <li style={{ display: "flex", flexDirection: "column" }}>
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
            </li>
          </ul>
        </div>
      </div>
    </FlexSection>
  );
};

export default EducationSection;
