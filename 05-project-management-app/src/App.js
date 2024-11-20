import { useContext } from "react";
import "./App.css";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSideBar from "./Components/ProjectSideBar";
import { ProjectContext } from "./store/ProjectContext";
import ShowProject from "./Components/ShowProject";


function App() {

  const {projectState,setProjectState} = useContext(ProjectContext)

  const handleProjectHandler = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        state: null,
      };
    });
  };


  let content;
  if (projectState.state === undefined) {
    content = <NoProjectSelected onStartUpProject={handleProjectHandler} />;
  } else if (projectState.state === null) {
    content = <NewProject />;
  } else {
    content= <ShowProject project={projectState} />
  }
  return (
      <div className="MainBody">
        <ProjectSideBar onStartUpProject={handleProjectHandler}  />
        
        {content}
       
      </div>
  );
}

export default App;
