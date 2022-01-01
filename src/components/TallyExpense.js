import React from "react";
import styles from "../cssModules/TallyExpense.module.css";

import { formatDate } from "../util/stringManipulation";
import DeleteButton from "./styles/DeleteButton.styled";

/* okay looks like we kinda figured out styled components in mui. seems finicky. 
try to use styled components more when making your own components and when
condensing multiple components into just one for less imports like the
DeleteButton. 

Next find a way to make the tallyexpenses look better. maybe with an mui card
component? */

const TallyExpense = ({
  cost,
  title,
  date,
  description,
  clicked,
  ownerName,
}) => {
  return (
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
  );
};

export default TallyExpense;
