import React from "react";
import { getImageUrl } from "../../utils";
import heroImage from "../../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Nischal </h1>
        <p className={styles.description}>
          I am a Software Developer with 2+ years of experience using Python and
          ReactJS.Reach out if you would like to learn more!
        </p>
        <a href=",mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of Me"
        className={styles.heroImg}
      ></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
