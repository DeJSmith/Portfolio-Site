import { SiRedux, SiTypescript, SiCsharp } from "react-icons/si";
import { DiJavascript} from "react-icons/di";
import {
    FaAngular,
    FaReact,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaVuejs,
  } from "react-icons/fa";

export const repoDetails = {
  AngularBackToFront: {
    repoName: "Angular Back To Front",
    technologies: [],
    live: true,
    live_url: "",
    icon: (
      <FaAngular
        className="icon"
        style={{ width: "3rem", height: "auto", padding: "1rem" }}
      />
    ),
  },
  DatingApp: {
    repoName: "Dating App",
    technologies: [],
    live: true,
    live_url: "",
    icon: (
      <SiCsharp
        className="icon"
        style={{ width: "3rem", height: "auto", padding: "1rem" }}
      />
    ),
  },
  DevConnector: {
    repoName: "Dev Connector",
    technologies: [],
    live: true,
    live_url: "",
    icon: (
      <FaReact
        className="icon"
        style={{ width: "3rem", height: "auto", padding: "1rem" }}
      />
    ),
  },
  AStarVisualisation: {
    repoName: "AStar Visualisation",
    technologies: [],
    live: true,
    live_url: "",
    icon: (
      <DiJavascript
        className="icon"
        style={{ width: "3rem", height: "auto", padding: "1rem" }}
      />
    ),
  },
  AuctionHouse: {
    repoName: "Auction House",
    technologies: [],
    live: false,
    live_url: "",
    icon: (
      <FaVuejs
        className="icon"
        style={{ width: "3rem", height: "auto", padding: "1rem" }}
      />
    ),
  },
};

export const repositories = [
  "AngularBackToFront",
  "DevConnector",
  "DatingApp",
  "AStarVisualisation",
  "AuctionHouse",
];

export const privateRepos = [
  {
    repoName: "PDT Website",
    technologies: [],
    live: true,
    live_url: "https://www.pdt.org.nz",
    icon: (
      <FaReact
        className="icon"
        style={{ width: "3rem", height: "auto", padding: "1rem" }}
      />
    ),
  },
];

export const skills = [{name: "HTML5", icon: (<FaHtml5 className="icon"/>)},
{name: "CSS", icon: (<FaCss3Alt className="icon"/>)}
,{name: "JavaScript", icon: (<DiJavascript className="icon"/>)}
,{name: "C#", icon: (<SiCsharp className="icon"/>)},
{name: "Python", icon: (<FaPython className="icon"/>)},
{name: "Anuglar", icon: (<FaAngular className="icon"/>)}
,{name: "Vue", icon: (<FaVuejs className="icon"/>)},
{name: "React", icon: (<FaReact className="icon"/>)},
{name: "Redux", icon: (<SiRedux className="icon"/>)}
,{name: "TypeScript", icon: (<SiTypescript className="icon"/>)},]
