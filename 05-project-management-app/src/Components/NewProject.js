import React, { useContext, useRef } from "react";
import styles from "./NewProject.module.css";
import { ProjectContext } from "../store/ProjectContext";
const NewProject = () => {
 const title = useRef();
 const description = useRef();
 const  date = useRef();

  // const title = useRef();
  // const description = useRef();
  // const date = useRef();

  const { projectState, setProjectState } = useContext(ProjectContext);

  const savaPageHandler = () => {
    setProjectState({
      ...projectState,
      projects: [
        ...projectState.projects,
        {
          id: Math.random(),
          title: title.current.value,
          description: description.current.value,
          date: date.current.value,
          tasks:[]
        },
      ],
      state: undefined
    });

    console.log("Test ",projectState.projects);
  };
  return (
    <div className={styles.addProject}>
      <menu className={styles.menu}>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button onClick={savaPageHandler}>Save</button>
        </li>
      </menu>
      <div className={styles.input}>
        <p>
          <label>TITLE</label>
          <input
            className={styles.inbutBox}
            type="text"
            ref={title}
          ></input>
        </p>
        <p>
          <label>DESCRIPTION</label>
          <textarea
            className={styles.inbutBox}
            type="text"
            ref={description}
          ></textarea>
        </p>
        <p>
          <label>DUE DATE</label>
          <input
            className={styles.inbutBox}
            type="date"
            ref={date}
          ></input>
        </p>
      </div>
    </div>
  );
};

export default NewProject;
