import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with  a laptop"
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="cursor icon" className={styles.aboutImage}
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I am a software developer with experience in building and designing softwares
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="server icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              alt="data icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                Experience in dealing with huge datasets
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
