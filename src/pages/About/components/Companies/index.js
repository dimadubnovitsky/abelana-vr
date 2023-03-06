import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles/Companies.module.scss";
import verizon from "./assets/images/verizon.svg";
import PRH from "./assets/images/PRH.svg";
import CU from "./assets/images/CU.svg";
import WSF from "./assets/images/WSF.svg";
import HF from "./assets/images/HF.svg";

const Companies = () => {
  const companies = [
    { logo: verizon },
    { logo: PRH },
    { logo: CU },
    { logo: WSF },
    { logo: HF },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Fade left>
          <div className={styles.title}>Companies that trust us</div>
        </Fade>
        <div className={styles.companies}>
          {companies.map((item) => (
            <Fade top>
              <div className={styles.logo}>
                <img src={item.logo} alt="Company logo" />
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <div className={styles.backgroundText}>Companies that trust us</div>
    </div>
  );
};

export default Companies;
