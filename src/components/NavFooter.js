import React from "react";
import styles from "../cssModules/NavFooter.module.css";

import { GiHamburgerMenu } from "react-icons/gi";

import Icon from "./Icon";

const NavFooter = () => {
  return (
    <div className={styles.mainWrapper}>
      <Icon id="burger" IconName={GiHamburgerMenu} />
    </div>
  );
};

export default NavFooter;
