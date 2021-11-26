import React from "react";
import styles from "./HomePage.module.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.title}>&#60;HELLO WORLD &#62;</h2>
      <p className={styles.para}>
        My name is Rahul Shinde.I'm a frontend developer from India.
      </p>
      <div className={styles.contact}>
        <button>
          <Link href="/contact">CONTACT ME</Link>
        </button>
        <Link href="/projects">
          <p className={styles.seework}>
            {" "}
            SEE MY WORK <span>&rarr;</span>
          </p>
        </Link>
      </div>
      <div className={styles.social}>
        <Link href="https://github.com/rahulshinde235">
          <a>Github</a>
        </Link>
        <Link href="https://www.linkedin.com/in/rahul-shinde-317a81108/">
          <a>Linkedin</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
