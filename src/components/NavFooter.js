import React from "react";
import styles from "../cssModules/NavFooter.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import Icon from "./Icon";
import Menu from "./Menu";

const NavFooter = ({ clicked, menuToggle, setMenuToggle, setData }) => {
  return (
    <>
      {menuToggle ? (
        <Menu
          setData={setData}
          menuToggle={menuToggle}
          setMenuToggle={setMenuToggle}
          style={{ height: "100%", bottom: "0%" }}
        />
      ) : (
        <Menu />
      )}
      <div id="burger" className={styles.mainWrapper}>
        <div className={styles.secondaryWrapper}>
          <div onClick={clicked}>
            <Icon IconName={GiHamburgerMenu} size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavFooter;
