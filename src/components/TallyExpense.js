import React from "react";
import styles from "../cssModules/TallyExpense.module.css";

import { BsFillCircleFill } from "react-icons/bs";
import Icon from "./Icon";

const TallyExpense = ({ cost, title, date, description, clicked }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.date}>{date}</div>
        <div className={styles.iconWrapper} onClick={() => console.log("test")}>
          <Icon IconName={BsFillCircleFill} size="15" iconColor="red" />
        </div>
      </div>
      <div className={styles.midWrapper}>
        <div className={styles.title}>
          {title?.length > 1 ? title : "No Title"}
        </div>
        <div>Amount: {cost}</div>
      </div>

      <div className={styles.bottomWrapper}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TallyExpense;
