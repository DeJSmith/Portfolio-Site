import React, { useEffect } from "react";
import {
  NavBar,
  NavLink,
  NavMenu,
  Bars,
  GitIcon,
  LinkedInIcon,
} from "./NavElements";
import {
  TerminalIcon,
  TerminalText,
  NavText,
} from "../../elements/globalElements";
import ProfileImage from "../../assets/ProfileImage.jpg";
import {
  FaGraduationCap,
  FaProjectDiagram,
  FaBookOpen,
  FaDownload,
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
    <NavBar>
      <p style={{ margin: "1rem auto", color: "white", display: "none" }}>
        Daniel Smith
      </p>
      <div
        style={{ margin: "1rem auto", display: "flex", flexDirection: "row" }}
      >
        <div style={{ display: "none" }}>
          <TerminalIcon>></TerminalIcon>
          <TerminalText>Web Developer</TerminalText>
        </div>
      </div>

      <Bars />
      <NavMenu>
        <NavLink to="profile" spy={true} smooth={true} duration={500}>
          <FaBookOpen
            className="icon"
            style={{
              marginRight: ".5rem",
              color: `${theme.colorSecondary}`,
              width: "2rem",
              height: "auto",
            }}
          />
          <div className="text">Profile</div>
        </NavLink>

        <NavLink to="education" spy={true} smooth={true} duration={500}>
          <FaGraduationCap
            className="icon"
            style={{
              marginRight: ".5rem",
              color: `${theme.colorSecondary}`,
              width: "2rem",
              height: "auto",
            }}
          />{" "}
          <div className="text">Education</div>
        </NavLink>

        <NavLink to="projects" spy={true} smooth={true} duration={500}>
          {" "}
          <FaProjectDiagram
            className="icon"
            style={{
              marginRight: ".5rem",
              color: `${theme.colorSecondary}`,
              width: "2rem",
              height: "auto",
            }}
          />{" "}
          <div className="text">Projects</div>
        </NavLink>

        <NavLink to="">
          <MdEmail className="icon" style={{}} />
          <div className="text">Contact Me</div>
        </NavLink>

        <NavText
          href={CV_File}
          style={{ textDecoration: "none", color: "white" }}
          download
        >
          <FaDownload
            className="icon"
            style={{
              marginRight: ".5rem",
              color: `${theme.colorSecondary}`,
              width: "2rem",
              height: "auto",
            }}
          />{" "}
          <div className="text">CV</div>
        </NavText>
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
  );
};

export default Nav;
