import "./App.css";
import NavBar from "./components/Nav";
import SummarySection from "./components/SummarySection";
import ProjectsSection from "./components/ProjectsSection";
import { OpaqueText } from "./elements/globalElements";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          color: "white",
          width: "100%",
          height: "50%",
          textAlign: "center",
        }}
      >
        Yeet
      </div>

      <OpaqueText>
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
        </ul>
        <SummarySection />
        <ProjectsSection />
      </OpaqueText>
    </div>
  );
}

export default App;
