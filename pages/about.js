import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../comps/Navbar";

import styles from "./about.module.css";
const About = () => {
  const [menu, setMenu] = useState(false);
  const hamburgerHandler = () => {
    setMenu(!menu);
  };
  return (
    <div className={styles.about}>
      <div className="hamburger">
        <Image
          src="/hamburger.svg"
          width={108}
          height={57}
          onClick={hamburgerHandler}
          alt=""
        />
      </div>
      {menu ? (
        <Navbar />
      ) : (
        <>
          <div className={styles.imagecontainer}>
            <Image src="/dev.jpg" layout="fill" className={styles.image} />
          </div>
          <div className={styles.textcontent}>
            <h1 style={{ marginBottom: "1vh" }}>RAHUL SHINDE</h1>
            <p>I am a Computer Engineer graduated from Sinhgad College Pune.</p>
            <p>
              I have a good grip over JavaScript and React.I am also well versed
              with other FrontEnd technologies and libraries
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
