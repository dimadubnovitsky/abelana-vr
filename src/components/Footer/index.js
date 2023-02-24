import React from "react";
import styles from "./styles/Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Abelana VR, All rights reserved.
      </div>
      <div className={styles.links}>
        <Link to={"terms-of-use"} className={styles.link}>
          Terms of Use
        </Link>
        <Link to={"privacy-policy"} className={styles.link}>
          Privacy Policy
        </Link>
        <a
          href={
            "https://drive.google.com/drive/folders/1xbVlNMojhgu1CZJvLQbKR5BueUrzvM-M"
          }
          className={styles.link}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Press Pack
        </a>
      </div>
    </div>
    {/*TODO: Add animated social media icons*/}
    <div className={styles.socialLinks}>Social links</div>
  </div>
);

export default Footer;
