import React from "react";
import Button from "./Button";
import styles from './NoProjectSelected.module.css'

const NoProjectSelected = ({onStartUpProject}) => {
  return (
    <div>
      <img src="logo.jpg" />
      <div className={styles.homeBody} >
        <h2>No Project Selected</h2>
        <p>select a project or get started with a project</p>
        <Button onClick={onStartUpProject}>create new project</Button>
      </div>
    </div>
  );
};

export default NoProjectSelected;
