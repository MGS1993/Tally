import { formatDate } from "../util/stringManipulation";
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
  splitValue,
  initialCost,
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
        <ExpenseTitle>{title?.length > 1 ? title : "No Title"}</ExpenseTitle>

        <SummaryDiv>
          {description?.length > 1 ? description : "No description provided"}
        </SummaryDiv>
        <MiscInfo>
          <MiscItem>
            <div>Date</div>
            <div>{formatDate(date)}</div>
          </MiscItem>
          <Divider />
          <MiscItem>
            <div>split by</div>
            <div>{splitValue}%</div>
          </MiscItem>
          <Divider />

          <MiscItem>
            <div>Total</div>
            {/* initial cost */}
            <div>${initialCost}</div>
          </MiscItem>
        </MiscInfo>
      </CardRight>
    </ExpenseWrapper>
  );
};

export default ExpenseCard;
