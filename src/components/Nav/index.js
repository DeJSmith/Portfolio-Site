import React from "react";
import { NavBar, NavLink, NavMenu, Bars, GitIcon } from "./NavElements";
import { TerminalIcon, TerminalText } from "../../elements/globalElements";
import ProfileImage from "../../assets/ProfileImage.jpg";
import { FaGraduationCap, FaProjectDiagram, FaBookOpen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import theme from "../../theme/theme";

const Nav = () => {
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
        <NavLink>
          <FaBookOpen
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />
          Summary
        </NavLink>

        <NavLink>
          <FaGraduationCap
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />{" "}
          Education
        </NavLink>

        <NavLink>
          {" "}
          <FaProjectDiagram
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />{" "}
          Projects
        </NavLink>

        <NavLink>
          <MdEmail
            style={{ marginRight: ".5rem", color: `${theme.colorSecondary}` }}
          />
          Contact Me
        </NavLink>

        <a href="https://github.com/DeJSmith">
          <GitIcon />
        </a>
      </NavMenu>
    </NavBar>
  );
};

export default Nav;
