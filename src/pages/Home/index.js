import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Home.module.scss";

const Home = () => (
  <div className={styles.root}>
    <Link to={"atom-maker"} className={styles.link}>
      Atom Maker
    </Link>
    <Link to={"evolution-of-stars"} className={styles.link}>
      Evolution Of Stars
    </Link>
    <Link to={"gravity-simulator"} className={styles.link}>
      Gravity Simulator
    </Link>
    <Link to={"near-the-speed-of-light"} className={styles.link}>
      Near The Speed Of Light
    </Link>
  </div>
);

export default Home;
