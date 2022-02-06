import React from "react";
import styles from "../cssModules/TallyExpense.module.css";

import { formatDate } from "../util/stringManipulation";
import DeleteButton from "./styles/DeleteButton.styled";
import {
  CardLeft,
  CardRight,
  MiscItem,
  ExpenseWrapper,
  UserNameText,
  ExpenseAmount,
  SummaryDiv,
  MiscInfo,
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
          <ExpenseAmount>
            <p>$50</p>
          </ExpenseAmount>
        </CardLeft>
        <Divider />
        <CardRight>
          <SummaryDiv>
            <p>
              Car ride to and from multiple bars in houston. thanks! testing for
              other things such as very long summaries
            </p>
          </SummaryDiv>
          <MiscInfo>
            <MiscItem>
              <div>Date</div>
              <div>May 1st</div>
            </MiscItem>
            <Divider />
            <MiscItem>
              <div>split by</div>
              <div>50%</div>
            </MiscItem>
            <Divider />

            <MiscItem>
              <div>Total</div>
              <div>$75</div>
            </MiscItem>
          </MiscInfo>
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
