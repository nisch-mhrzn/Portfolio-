import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to Reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email Icon"
          ></img>

          <a href="mailto:nischal.maharjan1233@gmail.com">
            nischal.maharjan1233@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin Icon"
          ></img>

          <a href="https://www.linkedin.com/in/nischalm1/">
            linkedin.com/nischalm1
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="git Icon"></img>

          <a href="https://github.com/nisch-mhrzn">github.com/nisch-mhrzn</a>
        </li>
      </ul>
    </footer>
  );
};
