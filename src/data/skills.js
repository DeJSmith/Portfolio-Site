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