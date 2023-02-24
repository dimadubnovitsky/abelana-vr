import React, { useState } from "react";
import styles from "./styles/Header.module.scss";
import { ReactComponent as LogoDesktopImage } from "./assets/images/Logo_desktop.svg";
import { ReactComponent as LogoMobileImage } from "./assets/images/Logo_mobile.svg";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const links = [
    {
      title: "About us",
      path: "about",
      disabled: false,
    },
    {
      title: "Equipment",
      path: "equipment",
      disabled: true,
    },
    {
      title: "Contact",
      path: "contact",
      disabled: false,
    },
  ];

  const onClickLink = () => {
    setVisible(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.desktopContainer}>
        <div className={styles.container}>
          <div className={styles.links}>
            <NavLink className={styles.logo} to={"/"}>
              <LogoDesktopImage />
            </NavLink>
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  classNames({
                    [styles.link]: true,
                    [styles.active]: isActive,
                    [styles.disabled]: link.disabled,
                  })
                }
                to={link.path}
                key={link.path}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          <a
            href={"https://app.abelanavr.com/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={styles.loginButton}
          >
            Account Login
          </a>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.container}>
          <NavLink className={styles.logo} to={"/"} onClick={onClickLink}>
            <LogoMobileImage />
          </NavLink>
          <div
            className={styles.menuButton}
            onClick={() => setVisible(!visible)}
          >
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>
        <div
          className={classNames({
            [styles.mobileMenu]: true,
            [styles.visible]: visible,
          })}
        >
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                classNames({
                  [styles.link]: true,
                  [styles.active]: isActive,
                  [styles.disabled]: link.disabled,
                })
              }
              to={link.path}
              key={link.path}
              onClick={onClickLink}
            >
              {link.title}
            </NavLink>
          ))}
          <a
            href={"https://app.abelanavr.com/"}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={styles.loginButton}
            onClick={onClickLink}
          >
            Account Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
