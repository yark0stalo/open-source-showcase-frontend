import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProjectWindow from "./components/ProjectWindow/ProjectWindow";
import "./App.css";

function App() {
  const [activeProject, setActiveProject] = useState({});
  const projects = fetch("");
  return (
    <>
      <Header></Header>
      <Main></Main>
      {/* <ProjectWindow></ProjectWindow> */}
    </>
  );
}

export default App;
