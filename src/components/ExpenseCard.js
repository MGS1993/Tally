import { useState } from "react";
import { formatDate } from "../util/stringManipulation";
import {
  AnimationWrapper,
  CardLeft,
  CardRight,
  DeleteButtonWrapper,
  ExpenseAmount,
  TitleDivWrapper,
  ExpenseWrapper,
  MiscInfo,
  MiscItem,
  SummaryDiv,
  UserNameText,
} from "./styles/ExpenseCard.styled";

import { Divider } from "./styles/Divider.styled";
import DeleteButton from "./styles/DeleteButton.styled";
import { ExpenseButton } from "./styles/Button.styled";
//TODO make the username in expense absolute and center the post split value for a cleaner look
//TODO align button text
//TODO find out why buttons close in column formation
//TODO find a better way to randomize colors
const ExpenseCard = ({
  cost,
  title,
  date,
  description,
  clicked,
  ownerName,
  splitValue,
  initialCost,
  colorAccent,
}) => {
  const [isButtonToggled, setIsButtonToggled] = useState(false);

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
        <TitleDivWrapper
          colorAccent={colorAccent}
          toggle={isButtonToggled ? 1 : 0}
        >
          <AnimationWrapper toggle={isButtonToggled ? 1 : 0}>
            <div>
              <ExpenseButton onClick={clicked}>Delete</ExpenseButton>
              <ExpenseButton onClick={() => setIsButtonToggled(false)}>
                Cancel
              </ExpenseButton>
            </div>
          </AnimationWrapper>
          {isButtonToggled ? null : (
            <>
              <DeleteButtonWrapper>
                {<DeleteButton onClick={() => setIsButtonToggled(true)} />}
              </DeleteButtonWrapper>
              <div>{title?.length > 1 ? title : "No Title"}</div>
            </>
          )}
        </TitleDivWrapper>

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
