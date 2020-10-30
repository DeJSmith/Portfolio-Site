import { useEffect, useState, Fragment } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import SummarySection from "./components/SummarySection";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/Hero";
import EducationSection from "./components/EducationSection";
import Spinner from "./components/Spinner";
import { OpaqueBg, Container } from "./elements/globalElements";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState({});

  useEffect(() => {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    // getProfile()
    //   .then((data) => {
    //     console.log(data);
    //     setProfile(data);
    //     getRepos().then((repoData) => {
    //       setRepos(repoData);
    //     })
    //       .catch((fail) => {
    //         console.log(fail);
    //       })
    //     setLoading(false);
    //   })
    //   .catch((fail) => {
    //     console.log(fail);
    //   });

    getRepos()
      .then((repoData) => {
        setRepos(repoData);
        setLoading(false);
        console.log(repoData);
      })
      .catch((fail) => {
        console.log(fail);
      });
  }, []);

  const getProfile = () => {
    return new Promise(async (resolve, reject) => {
      const res = await axios.get(`https://api.github.com/users/DeJSmith`);
      if (res) {
        resolve(res.data);
      } else {
        reject("Something went wrong");
      }
    });
  };

  const getRepos = () => {
    return new Promise(async (resolve, reject) => {
      const res = await axios.get(
        `https://api.github.com/users/DeJSmith/repos`
      );
      if (res) {
        resolve(res.data);
      } else {
        reject("Something went wrong");
      }
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div></div>
      <div>
        <OpaqueBg>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Container>
            {loading ? (
              <Spinner />
            ) : (
              <Fragment>
                <HeroSection />
                <SummarySection />
                <ProjectsSection repoData={repos} />
                <EducationSection />
              </Fragment>
            )}
          </Container>
        </OpaqueBg>
      </div>
    </div>
  );
}

export default App;
