import React, { useEffect } from "react";
import {
  NavBar,
  NavLink,
  NavMenu,
  Bars,
  GitIcon,
  LinkedInIcon,
  Slider
} from "./NavElements";
import {
  TerminalIcon,
  TerminalText,
  NavText,
} from "../../elements/globalElements";

import {
  FaGraduationCap,
  FaProjectDiagram,
  FaBookOpen,
  FaDownload,
  FaBars
} from "react-icons/fa";
import { Events, animateScroll as scroll } from "react-scroll";
import { MdEmail } from "react-icons/md";
import theme from "../../theme/theme";
import CV_File from "../../files/Daniel_Smith_CV.pdf";

const Nav = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }, []);

  return (
    <Slider>
      <FaBars className="menu-icon"/>
    <NavBar className="nav">
      <div style={{ margin: '.5rem', fontWeight:'700', fontSize: '2rem', color: theme.colorPrimary,  }}>
        D<span style={{color: theme.colorSecondary}}>S</span>
      </div>

      <NavMenu>
        <div>        
          <NavLink to="profile" spy={true} smooth={true} duration={500}>
          <FaBookOpen
            className="icon"

          />
          <b className="text">Profile</b>
        </NavLink>
        </div>


        <div>
        <NavLink to="education" spy={true} smooth={true} duration={500}>
          <FaGraduationCap
            className="icon"

          />{" "}
          <b className="text">Education</b>
        </NavLink>
        </div>


        <div>        
        <NavLink to="projects" spy={true} smooth={true} duration={500}>  
          <FaProjectDiagram
            className="icon"

          />{" "}
          <b className="text">Projects</b>
        </NavLink>
        </div>

        <div>
        <NavLink to="">
          <MdEmail className="icon" style={{}} />
          <b className="text">Contact Me</b>
        </NavLink>
        </div>

        <div>        
          <NavText
          href={CV_File}
          download
        >
          <FaDownload
            className="icon"
            style={{
              marginRight: ".5rem",
              color: `${theme.colorTertiary}`,
              width: "2rem",
              height: "auto",
            }}

          />{" "}
          <b className="text">CV</b>
        </NavText></div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          <a href="https://github.com/DeJSmith">
            <GitIcon />
          </a>
          <a href="https://www.linkedin.com/in/daniel-smith-3a54a9195/">
            <LinkedInIcon />
          </a>
        </div>
      </NavMenu>
    </NavBar>
    </Slider>
  );
};

export default Nav;
