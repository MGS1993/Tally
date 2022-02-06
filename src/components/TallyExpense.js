import React from "react";
import styles from "../cssModules/TallyExpense.module.css";

import { formatDate } from "../util/stringManipulation";
import DeleteButton from "./styles/DeleteButton.styled";
import {
  CardLeft,
  CardRight,
  ExpenseWrapper,
  UserNameText,
} from "./styles/ExpenseCard.styled";

import { Divider } from "./styles/Divider.styled";

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
      <ExpenseWrapper>
        <CardLeft>
          <UserNameText>
            <p>-Manuel-</p>
          </UserNameText>
          <div>
            <p>$50</p>
          </div>
        </CardLeft>
        <Divider />
        <CardRight>
          <div>
            <div>January 28th</div>
            <div>Summary</div>
          </div>
          <div>
            <div>split by: 50%</div>
            <div>Total: $75</div>
          </div>
        </CardRight>
      </ExpenseWrapper>
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
