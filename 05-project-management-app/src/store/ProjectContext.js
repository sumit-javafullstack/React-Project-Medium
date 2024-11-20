import {useState,  createContext } from "react";

// Create the context
const ProjectContext = createContext();


// create a provider component
const ProjectProvider = ({ children }) => {
  const [projectState, setProjectState] = useState({
    state: undefined,
    projects: [],
  });

  return (
    <ProjectContext.Provider value={{ projectState, setProjectState }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
