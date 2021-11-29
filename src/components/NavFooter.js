import React from "react";
import styles from "../cssModules/NavFooter.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import Icon from "./Icon";
import Menu from "./Menu";

const NavFooter = ({ clicked, menuToggle, setData }) => {
  return (
    <div id="burger" className={styles.mainWrapper}>
      {menuToggle ? (
        <Menu setData={setData} style={{ height: "310px", bottom: "60px" }} />
      ) : (
        <Menu />
      )}
      <div className={styles.secondaryWrapper}>
        <div onClick={clicked}>
          <Icon IconName={GiHamburgerMenu} size={30} />
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
