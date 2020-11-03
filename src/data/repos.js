import { FaAngular, FaReact, FaPython, FaVuejs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiCsharp } from "react-icons/si";

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
