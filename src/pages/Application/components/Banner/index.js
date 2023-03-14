import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles/Banner.module.scss";
import { ReactComponent as ButtonBorder } from "./assets/images/button_border.svg";

const Banner = ({ data }) => (
  <div
    className={styles.root}
    style={{ backgroundImage: `url(${data.backgroundImage})` }}
  >
    <div className={styles.filter} />
    <div className={styles.container}>
      <Fade left>
        <div className={styles.title}>{data.title}</div>
      </Fade>
      <Fade bottom>
        <a
          href={"https://app.abelanavr.com/"}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={styles.buttonContainer}
        >
          <div className={styles.button}>Download</div>
          <div className={styles.buttonBorder}>
            <ButtonBorder />
          </div>
        </a>
      </Fade>
    </div>
  </div>
);

export default Banner;
