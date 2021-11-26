import React, { useState } from "react";
import Navbar from "../comps/Navbar";
import Image from "next/image";
import styles from "./projects.module.css";
const projectArr = [
  {
    title: "Recipe App",
    src: "https://via.placeholder.com/150",
    desc: "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector map of India, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
    source: "#",
    live: "#",
  },
  {
    title: "Recipe App",
    src: "https://via.placeholder.com/150",
    desc: "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector map of India, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
    source: "#",
    live: "#",
  },
  {
    title: "Recipe App",
    src: "https://via.placeholder.com/150",
    desc: "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector map of India, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
    source: "#",
    live: "#",
  },
  {
    title: "Recipe App",
    src: "https://via.placeholder.com/150",
    desc: "This web app can be used to track current and historical data of India and its states and union territories. The web app shows a vector map of India, user may hover over any state and will be able to see the total confirmed, recovered, active and deceased for that state.",
    source: "#",
    live: "#",
  },
];
const projects = () => {
  const [menu, setMenu] = useState(false);
  const hamburgerHandler = () => {
    setMenu(!menu);
  };
  return (
    <div>
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
        <div className={styles.projects}>
          <h1 style={{ textAlign: "center", fontWeight: "bolder" }}>
            PROJECTS{" "}
          </h1>
          {projectArr.map((item) => (
            <div className={styles.card}>
              <h2>{item.title}</h2>
              <img
                src="https://via.placeholder.com/150"
                className={styles.img}
              />
              <p>{item.desc}</p>
              <div className={styles.link}>
                <button>
                  <a href={item.source}>Source Code</a>
                </button>
                <button>
                  <a href={item.live}>Live Link</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default projects;
