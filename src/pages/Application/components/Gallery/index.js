import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles/Gallery.module.scss";
import classNames from "classnames";

const Gallery = ({ data }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <Fade top>
        <div className={styles.title}>Gallery</div>
      </Fade>
      <Fade bottom fraction={0.01}>
        <div className={styles.images}>
          <div className={styles.column}>
            <div className={classNames([styles.image, styles.image1])}>
              <img src={data.image_1} alt="Screenshot" />
            </div>
            <div className={classNames([styles.image, styles.image2])}>
              <img src={data.image_2} alt="Screenshot" />
            </div>
          </div>
          <div className={styles.column}>
            <div className={classNames([styles.image, styles.image3])}>
              <img src={data.image_3} alt="Screenshot" />
            </div>
            <div className={classNames([styles.image, styles.image4])}>
              <img src={data.image_4} alt="Screenshot" />
            </div>
          </div>
          <div className={styles.column}>
            <div className={classNames([styles.image, styles.image5])}>
              <img src={data.image_5} alt="Screenshot" />
            </div>
            <div className={classNames([styles.image, styles.image6])}>
              <img src={data.image_6} alt="Screenshot" />
            </div>
          </div>
        </div>
      </Fade>
      <div className={styles.backgroundText}>Gallery</div>
    </div>
  </div>
);

export default Gallery;
