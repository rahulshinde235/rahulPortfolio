import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Navbar from "../comps/Navbar";
import HomePage from "../comps/HomePage";
export default function Home() {
  const [menu, setMenu] = useState(false);
  const hamburgerHandler = () => {
    setMenu(!menu);
  };
  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <Image
          src="/hamburger.svg"
          width={98}
          height={47}
          onClick={hamburgerHandler}
        />
      </div>

      {menu ? <Navbar /> : <HomePage />}
    </div>
  );
}
