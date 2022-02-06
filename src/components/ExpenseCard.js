import {
  CardLeft,
  CardRight,
  ExpenseAmount,
  ExpenseTitle,
  ExpenseWrapper,
  MiscInfo,
  MiscItem,
  SummaryDiv,
  UserNameText,
} from "./styles/ExpenseCard.styled";

import { Divider } from "./styles/Divider.styled";

const ExpenseCard = ({
  cost,
  title,
  date,
  description,
  clicked,
  ownerName,
}) => {
  return (
    <ExpenseWrapper>
      <CardLeft>
        <UserNameText>
          <p>-{ownerName}-</p>
        </UserNameText>
        <ExpenseAmount>
          <p>${cost}</p>
        </ExpenseAmount>
      </CardLeft>
      <Divider />
      <CardRight>
        <ExpenseTitle>{title}</ExpenseTitle>

        <SummaryDiv>
          <p>{description}</p>
        </SummaryDiv>
        <MiscInfo>
          <MiscItem>
            <div>Date</div>
            <div>{/*formatDate(date)*/}</div>
          </MiscItem>
          <Divider />
          <MiscItem>
            {/* split by */}
            <div>split by</div>
            <div>50%</div>
          </MiscItem>
          <Divider />

          <MiscItem>
            <div>Total</div>
            {/* initial cost */}
            <div>$75</div>
          </MiscItem>
        </MiscInfo>
      </CardRight>
    </ExpenseWrapper>
  );
};

export default ExpenseCard;
