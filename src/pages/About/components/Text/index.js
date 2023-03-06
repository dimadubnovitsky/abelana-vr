import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles/Text.module.scss";

const Text = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <Fade bottom>
        <div className={styles.text}>
          The father of science fiction, H. G. Wells, once said, “Civilization
          is in a race between education and catastrophe”. We at ABELANA VR
          PRODUCTIONS believe that the power of virtual and augmented reality
          opens a vast potential for global education in the modern
          knowledge-driven society.
        </div>
      </Fade>
      <Fade bottom>
        <div className={styles.text}>
          ABELANA VR PRODUCTIONS is a team of technology, media, and education
          professionals dedicated to making the world a better place by building
          new kinds of hyperlessons as well as the tools to deliver them to
          wider audiences around the world. We are confident that the ongoing
          evolution of virtual and augmented reality is an excellent tool to
          profoundly influence the advancement of humanity in general while
          making this process tailored to the unique needs and environment of
          each individual in particular. To help achieve this goal we are
          putting together a global network of highly talented and extremely
          dedicated people.
        </div>
      </Fade>
      <Fade bottom>
        <div className={styles.text}>
          Our team includes professionals from software development, video game
          publishing, film and TV production, narrative storytelling, education,
          and other fields. We are confident that the ability to express
          thoughts and ideas through virtual and augmented reality will be the
          literacy of new generations, and we are passionately contributing to
          this progress.
        </div>
      </Fade>
    </div>
  </div>
);

export default Text;
