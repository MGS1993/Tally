import React from "react";

import {
  StyledDisplay,
  TitleCard,
  Wrapper,
  ExpenseCard,
} from "./styles/TallyDisplay.styled";

const TallyDisplay = ({ data, currentUser, linkedUser }) => {
  //TODO add loading screen
  let balance =
    data?.calculatedUserExpenses - data?.calculatedOtherUserExpenses;
  return (
    <StyledDisplay>
      <Wrapper>
        <TitleCard>{`${currentUser}'s Expenses`}</TitleCard>
        <TitleCard>Balance</TitleCard>
        <TitleCard>{`${linkedUser}'s Expenses`}</TitleCard>
      </Wrapper>
      <Wrapper>
        <ExpenseCard>{data?.calculatedUserExpenses}</ExpenseCard>
        <ExpenseCard deficit={balance < 0}>{balance || 0}</ExpenseCard>
        <ExpenseCard>{data?.calculatedOtherUserExpenses}</ExpenseCard>
      </Wrapper>
    </StyledDisplay>
  );
};

export default TallyDisplay;
