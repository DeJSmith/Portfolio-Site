import { SiRedux, SiTypescript, SiCsharp, SiUdemy } from "react-icons/si";
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
    technologies: ['Angular', 'Firebase'],
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
    technologies: ['C#', 'DotNetCore', 'Angular'],
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
    technologies: ['React', 'Redux', 'MongoDb', 'NodeJs', 'Express'],
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
    technologies: ['P5Js'],
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
    technologies: ['VueJs', 'NodeJs', 'SQL', 'LAMP'],
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
    technologies: ['React', 'SCSS', 'Redux', 'MongoDb', 'NodeJs', 'ChartJs'],
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

export const courses = [
  {title: 'React Front To Back', platform: 'Udemy', technologies: ['React'], description: 'Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects',icon: (<SiUdemy className="icon" />)},
  {title: 'MERN Stack Front To Back', platform: 'Udemy', technologies: ['React', 'Redux', 'MongoDb', 'Nodejs', 'Express'], description: 'Build and deploy a social network with Node.js, Express, React, Redux & MongoDB. Fully updated April 2019',icon: (<SiUdemy className="icon" />)},
  {title: 'Materialize CSS From Scratch', platform: 'Udemy', technologies: ['Materialize'], description: 'Master HTML 5 & the Materialize CSS framework by building 5 real world responsive material design based themes',icon: (<SiUdemy className="icon" />)},
  {title: 'ASPNET Core and Angular From Scratch', platform: 'Udemy', technologies: ["ASPNET", "Angular"], description: 'A practical example of how to build an application with ASP.NET Core API (.Net 5.0) and Angular 10 from start to finish',icon: (<SiUdemy className="icon" />)},
  {title: 'Angular Front To Back', platform: 'Udemy', technologies: ["Firebase", "Angular"], description: "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well as authentication",icon: (<SiUdemy className="icon" />)},
]
