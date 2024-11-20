import React, { useContext, useRef } from "react";
import styles from "./ShowProject.module.css";
import { ProjectContext } from "../store/ProjectContext";

const ShowProject = ({ project }) => {
  const { projectState, setProjectState } = useContext(ProjectContext);
  let tasksInputRef = useRef("");

  let selectedProject = {
    title: "",
    date: "",
    desc: "",
  };

  projectState.projects.forEach((value) => {
    if (value.id === project.state) {
      selectedProject.title = value.title;
      selectedProject.date = value.date;
      selectedProject.desc = value.description;
    }
  });

  const addTaskHandler = () => {
    setProjectState((prevState) => ({
      ...prevState,
      projects: prevState.projects.map((proj) => {
        if (proj.id === project.state) {
          return {
            ...proj,
            tasks: [...proj.tasks, tasksInputRef.current.value],
          };
        }
        return proj;
      }),
    }));
  };
  return (
    <div className={styles.showProjects}>
      <div className={styles.removeTitleBtn}>
        <h1>{selectedProject.title}</h1>
        <button> delete</button>
      </div>
      <p>{selectedProject.date}</p>
      <p>{selectedProject.desc}</p>
      <hr></hr>
      <h1 style={{ fontFamily: "monospace" }}>Tasks</h1>
      <div className={styles.addTask}>
        <input type="text" ref={tasksInputRef}></input>
        <button onClick={addTaskHandler}>add tasks</button>
      </div>
      <ul>
      {
        projectState.projects.tasks.map((value) => {
          <li>{value}</li>
        })
      }
      </ul>
    </div>
  );
};

export default ShowProject;
