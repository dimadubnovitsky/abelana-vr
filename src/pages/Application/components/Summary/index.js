import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles/Summary.module.scss";

const Summary = ({ data }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.content}>
        <Fade top>
          <div className={styles.title}>SUMMARY</div>
        </Fade>
        <Fade bottom>
          <div className={styles.text}>{data.text}</div>
        </Fade>
      </div>
      <Fade right>
        <div className={styles.image}>
          <img
            src={data.image_1x}
            srcSet={`${data.image_1x} 1x, ${data.image_2x} 2x, ${data.image_3x} 3x`}
            alt="Image"
          />
        </div>
      </Fade>
      <div className={styles.backgroundText}>SUMMARY</div>
    </div>
  </div>
);

export default Summary;
