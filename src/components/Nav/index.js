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
      <img
        src={ProfileImage}
        style={{
          margin: "1rem auto",
          borderRadius: "5px",
          width: "8rem",
          height: "8rem",
          objectFit: "cover",
        }}
      />
      <p style={{ margin: "1rem auto", color: "white" }}>Daniel Smith</p>
      <div
        style={{ margin: "1rem auto", display: "flex", flexDirection: "row" }}
      >
        <TerminalIcon>></TerminalIcon>
        <TerminalText>Web Developer</TerminalText>
      </div>

      <Bars />
      <NavMenu>
        <NavLink to="profile" spy={true} smooth={true} duration={500}>
          <FaBookOpen
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />
          Profile
        </NavLink>

        <NavLink to="education" spy={true} smooth={true} duration={500}>
          <FaGraduationCap
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />{" "}
          Education
        </NavLink>

        <NavLink to="projects" spy={true} smooth={true} duration={500}>
          {" "}
          <FaProjectDiagram
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />{" "}
          Projects
        </NavLink>

        <NavLink to="">
          <MdEmail
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />
          Contact Me
        </NavLink>

        <NavText
          href={CV_File}
          style={{ textDecoration: "none", color: "white" }}
          download
        >
          <FaDownload
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />{" "}
          My CV
        </NavText>
        <div>
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
