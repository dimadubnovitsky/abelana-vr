import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles/Banner.module.scss";
import Bot_1x from "./assets/images/bot@1x.png";
import Bot_2x from "./assets/images/bot@2x.png";
import Bot_3x from "./assets/images/bot@3x.png";
import Tesseract_1x from "./assets/images/tesseract@1x.png";
import Tesseract_2x from "./assets/images/tesseract@2x.png";
import Tesseract_3x from "./assets/images/tesseract@3x.png";

const Banner = () => (
  <div className={styles.root}>
    <div className={styles.filter} />
    <div className={styles.container}>
      <Fade left>
        <div className={styles.title}>About us</div>
      </Fade>
      <Fade right delay={1000}>
        <div className={styles.images}>
          <img
            className={styles.botImage}
            src={Bot_1x}
            srcSet={`${Bot_1x} 1x, ${Bot_2x} 2x, ${Bot_3x} 3x`}
            alt="Bot"
          />
          <img
            className={styles.tesseractImage}
            src={Tesseract_1x}
            srcSet={`${Tesseract_1x} 1x, ${Tesseract_2x} 2x, ${Tesseract_3x} 3x`}
            alt="Bot"
          />
        </div>
      </Fade>
    </div>
  </div>
);

export default Banner;
