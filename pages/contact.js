import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import styles from "./contact.module.css";
const Contact = () => {
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
        <div className={styles["login-box"]}>
          <h2>CONTACT ME</h2>
          <form action="https://submit-form.com/izNLpW6X">
            <input
              type="hidden"
              name="_feedback.success.title"
              value="I will get in touch soon!"
            />

            <div className={styles["user-box"]}>
              <input type="text" name="name" required />
              <label>Name</label>
            </div>
            <div className={styles["user-box"]}>
              <input
                type="text"
                pattern="[1-9]{1}[0-9]{9}"
                required
                name="phone"
              />
              <label>Phone</label>
            </div>
            <div className={styles["user-box"]}>
              <input type="textbox" name="message" required />
              <label>Your message:</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button type="submit" className={styles["btn-submit"]}>
                Send
              </button>
            </a>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
