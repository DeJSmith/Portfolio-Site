import { useEffect, useState, Fragment } from "react";
import { repositories, repoDetails } from "./data/data";
import { OpaqueBg, Container } from "./elements/globalElements";
import axios from "axios";

import "./App.css";

import NavBar from "./components/Nav";
import SummarySection from "./components/SummarySection";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Spinner from "./components/Spinner";
import LivePreview from './components/LivePreview';


function App() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState({});

  useEffect(() => {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    getRepos()
      .then((repoData) => {
        filterRepos(repoData);
        setLoading(false);
        console.log(repoData);
      })
      .catch((fail) => {
        console.log(fail);
      });
  }, []);

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

  const filterRepos = (repoData) => {
    repoData = repoData.filter((repo) => {
      if (repositories.includes(repo.name)) {
        repo["live"] = repoDetails[repo.name].live;
        repo["repoName"] = repoDetails[repo.name].repoName;
        repo["live_url"] = repoDetails[repo.name].live_url;
        repo["icon"] = repoDetails[repo.name].icon;
        repo['technologies'] = repoDetails[repo.name].technologies;
        return repo;
      }
      return;
    });

    console.log(repoData);

    setRepos(repoData);
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
        </OpaqueBg>
        
            {loading ? (
              <Spinner />
            ) : (
              <Fragment>
                <Container>                
                  <HeroSection id="top" />
                  <SummarySection />
                  <SkillsSection />
                  <ProjectsSection repoData={repos} />
                  </Container>
                  
              </Fragment>
            )}
          
          
      </div>
    </div>
  );
}

export default App;
