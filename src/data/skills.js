import { SiRedux, SiTypescript, SiCsharp } from "react-icons/si";
import { DiJavascript, DiSass } from "react-icons/di";
import {
    FaAngular,
    FaReact,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaVuejs,
  } from "react-icons/fa";

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
  {title: 'React Front To Back', platform: 'Udemy', technologies: ['React'], description: 'Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects',},
  {title: 'MERN Stack Front To Back', platform: 'Udemy', technologies: ['React', 'Redux', 'MongoDb', 'Nodejs', 'Express'], description: 'Build and deploy a social network with Node.js, Express, React, Redux & MongoDB. Fully updated April 2019',},
  {title: 'Materialize CSS From Scratch', platform: 'Udemy', technologies: ['Materialize'], description: 'Master HTML 5 & the Materialize CSS framework by building 5 real world responsive material design based themes',},
  {title: 'ASPNET Core and Angular From Scratch', platform: 'Udemy', technologies: ["ASPNET", "Angular"], description: 'A practical example of how to build an application with ASP.NET Core API (.Net 5.0) and Angular 10 from start to finish',},
  {title: 'Angular Front To Back', platform: 'Udemy', technologies: ["Firebase", "Angular"], description: "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well as authentication",},
]