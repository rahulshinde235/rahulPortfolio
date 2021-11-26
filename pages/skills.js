import React, { useState } from "react";
import Image from "next/image";
import styles from "./skill.module.css";
import Navbar from "../comps/Navbar";

const Skills = () => {
  const [menu, setMenu] = useState(false);
  const hamburgerHandler = () => {
    setMenu(!menu);
  };
  return (
    <div className={styles.skills}>
      <div className="hamburger">
        <Image
          src="/hamburger.svg"
          width={108}
          height={57}
          onClick={hamburgerHandler}
        />
      </div>
      {menu ? (
        <Navbar />
      ) : (
        <>
          <div className={styles.skilllist}>
            <h1>MY SKILLS</h1>
            <ul>
              <li>Adaptive and responsive layout</li>
              <li>Strong Knowledge of JavaScript</li>
              <li>Well versed with React and Redux</li>
              <li>HTML and CSS including grids and CSS frameworks</li>
              <li>Good problem solving skills</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
export default Skills;
