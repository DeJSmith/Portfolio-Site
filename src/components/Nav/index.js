import React from "react";
import { NavBar, NavLink, NavMenu, Bars, GitIcon } from "./NavElements";
import { TerminalIcon, TerminalText } from "../../elements/globalElements";
import ProfileImage from "../../assets/ProfileImage.jpg";

const Nav = () => {
  return (
    <NavBar>
      <img
        src={ProfileImage}
        style={{
          margin: "1rem",
          borderRadius: "5px",
          width: "8rem",
          height: "8rem",
          objectFit: "cover",
        }}
      />
      <div
        style={{ padding: "1rem 1rem", display: "flex", flexDirection: "row" }}
      >
        <TerminalIcon>></TerminalIcon>
        <TerminalText>Daniel Smith</TerminalText>
      </div>

      <Bars />
      <NavMenu>
        <NavLink>Summary</NavLink>

        <NavLink>Education</NavLink>

        <NavLink>Projects</NavLink>

        <NavLink>Contact Me</NavLink>

        <a href="https://github.com/DeJSmith">
          <GitIcon />
        </a>
      </NavMenu>
    </NavBar>
  );
};

export default Nav;
