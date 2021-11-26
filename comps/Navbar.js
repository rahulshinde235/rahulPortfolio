import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navcontainer}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Me</a>
        </Link>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="https://drive.google.com/file/d/1RVfHbOjyng-6BDwnOSfQc7BwKVLOqtlJ/view?usp=sharing">
          <a>Download CV</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
