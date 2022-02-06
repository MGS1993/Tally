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

const ExpenseCard = () => {
  return (
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
  );
};

export default ExpenseCard;
