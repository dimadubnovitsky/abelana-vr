import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles/Details.module.scss";
import { ReactComponent as Icon1 } from "./assets/images/icon_1.svg";
import { ReactComponent as Icon2 } from "./assets/images/icon_2.svg";
import { ReactComponent as Icon3 } from "./assets/images/icon_3.svg";
import { ReactComponent as Icon4 } from "./assets/images/icon_4.svg";
import { ReactComponent as Icon5 } from "./assets/images/icon_5.svg";
import { ReactComponent as Icon6 } from "./assets/images/icon_6.svg";
import { ReactComponent as Icon7 } from "./assets/images/icon_7.svg";

const Details = ({ data }) => {
  const details = [
    {
      icon: <Icon1 />,
      label: "User environment",
      value: data.userEnvironment,
    },
    {
      icon: <Icon2 />,
      label: "Maximum class size",
      value: data.maximumClassSize,
    },
    {
      icon: <Icon3 />,
      label: "Available roles",
      value: data.availableRoles,
    },
    {
      icon: <Icon4 />,
      label: "PC VR version",
      value: data.pcVrVersion,
    },
    {
      icon: <Icon5 />,
      label: "Standalone VR version",
      value: data.standaloneVrVersion,
    },
    {
      icon: <Icon6 />,
      label: "Mobile app",
      value: data.mobileApp,
    },
    {
      icon: <Icon7 />,
      label: "Video chat",
      value: data.videoChat,
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Fade top>
            <div className={styles.title}>EXPERIENCE DETAILS</div>
          </Fade>
          <Fade bottom>
            <div className={styles.image}>
              <img
                src={data.image_1x}
                srcSet={`${data.image_1x} 1x, ${data.image_2x} 2x, ${data.image_3x} 3x`}
                alt="Image"
              />
            </div>
          </Fade>
        </div>
        <Fade right>
          <div className={styles.details}>
            {details.map((detail) => (
              <div className={styles.detailsItem}>
                <div className={styles.icon}>{detail.icon}</div>
                <div className={styles.label}>{detail.label}</div>
                <div className={styles.value}>{detail.value}</div>
              </div>
            ))}
          </div>
        </Fade>
        <div className={styles.backgroundText}>EXPERIENCE DETAILS</div>
      </div>
    </div>
  );
};

export default Details;
