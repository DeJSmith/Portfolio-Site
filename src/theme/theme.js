import { ThemeConsumer } from "styled-components";
import StaticSiteOrange from "../assets/staticSiteOrange.svg";
import JobOrange from "../assets/jobOrange.svg";
import postOrange from "../assets/postOrange.svg";
import StaticSite from "../assets/staticSite.svg";
import Job from "../assets/job.svg";
import post from "../assets/Post.svg";

// const theme = {
//   colorPrimary: "#3f3d56",
//   colorSecondary: "#52B788",
//   colorTertiary: "#22223B",
//   colorSecondaryDark: "#40916C",
//   breakPointXs: "90%",
//   breakPointSm: `640px`,
//   breakPointMd: `768px`,
//   breakPointLg: `1024px`,
//   breakPointXl: `1280px`,
// };

const theme = {
  colorPrimary: "#3f3d56",
  colorSecondary: "#FF8500",
  colorTertiary: "#22223B",
  colorSecondaryDark: "#FF7900",
  heroImg: StaticSiteOrange,

  profileImg: <img src={JobOrange} />,
  educationImg: (
    <img src={postOrange} style={{ width: "400px", height: "auto" }} />
  ),
  media : {
    xs: '@media only screen and (max-width: 400px)',
    sm: '@media only screen and (max-width: 640px)',
    md: '@media only screen and (max-width: 768px)',
    lg: '@media only screen and (max-width: 1024px)',
    xl: '@media only screen and (max-width: 1280px)',
    
  }
};

// const theme = {
//   colorPrimary: "#3f3d56",
//   colorSecondary: "#f72585",
//   colorTertiary: "#22223B",
//   colorSecondaryDark: "#e12279",
//   heroImg: (
//     <img
//       src={StaticSite}
//       style={{
//         color: "#FF8500",

//         height: "auto",
//         width: "50rem",
//         opacity: "0.8",
//       }}
//       alt=""
//     />
//   ),
//   profileImg: <img src={Job} />,
//   educationImg: <img src={post} style={{ width: "400px", height: "auto" }} />,
// };

// const theme = {
//   colorPrimary: "#3f3d56",
//   colorSecondary: "#DA1E37",
//   colorTertiary: "#22223B",
//   colorSecondaryDark: "#C71F37",
//   heroImg: (
//     <img
//       src={StaticSite}
//       style={{
//         color: "#FF8500",

//         height: "auto",
//         width: "50rem",
//         opacity: "0.8",
//       }}
//       alt=""
//     />
//   ),
//   profileImg: <img src={Job} />,
//   educationImg: <img src={post} style={{ width: "400px", height: "auto" }} />,
// };

export default theme;
