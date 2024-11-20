import React, { useContext } from "react";
import styles from "./ProjectSideBar.module.css";
import Button from "./Button";
import { ProjectContext } from "../store/ProjectContext";

const ProjectSideBar = ({ onStartUpProject }) => {
  const { projectState, setProjectState } = useContext(ProjectContext);

  const showProjectHandler = (value) => {
    setProjectState({ ...projectState, state: value.id });
  };

  return (
    <aside className={styles.sideBar}>
      <h1
        style={{
          fontFamily: "serif",
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}
      >
        Your Projects
      </h1>
      <Button onClick={onStartUpProject}>+ Add Project</Button>
      <ul >
        {projectState.projects.map((value) => {
          return (
            <li key={value.id} className={styles.titleButton}>
              <button 
                onClick={() => {
                  showProjectHandler(value);
                }}
              >
                {value.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
