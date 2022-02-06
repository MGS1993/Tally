import React from "react";
import styles from "../cssModules/TallyExpense.module.css";

import { formatDate } from "../util/stringManipulation";
import DeleteButton from "./styles/DeleteButton.styled";
import ExpenseCard from "./ExpenseCard";

const TallyExpense = ({
  cost,
  title,
  date,
  description,
  clicked,
  ownerName,
}) => {
  return (
    <>
      <ExpenseCard />
      <div className={styles.mainWrapper}>
        <div className={styles.ownerNameWrapper}>-{ownerName}-</div>
        <div className={styles.topWrapper}>
          <div className={styles.date}>{formatDate(date)}</div>
          <DeleteButton onClick={clicked} />
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
    </>
  );
};

export default TallyExpense;
