import React from "react";
import styles from "../cssModules/NavFooter.module.css";

import { GiHamburgerMenu } from "react-icons/gi";

import Icon from "./Icon";

const NavFooter = ({ clicked }) => {
  return (
    <div id="burger" className={styles.mainWrapper}>
      <div onClick={clicked}>
        <Icon IconName={GiHamburgerMenu} size={30} />
      </div>
    </div>
  );
};

export default NavFooter;
