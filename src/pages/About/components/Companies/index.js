import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles/Companies.module.scss";
import logo_verizon from "./assets/images/logo_verizon.png";
import logo_RRH from "./assets/images/logo_RRH.png";
import logo_columb_university from "./assets/images/logo_columb_university.png";
import logo_WSF from "./assets/images/logo_WSF.png";
import logo_high_fidelity from "./assets/images/logo_high_fidelity.png";

const Companies = () => {
  const companies = [
    { logo: logo_verizon },
    { logo: logo_RRH },
    { logo: logo_columb_university },
    { logo: logo_WSF },
    { logo: logo_high_fidelity },
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
