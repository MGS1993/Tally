import { useState } from "react";
import {
  StyledCard,
  MinimizedContainer,
  ExpandableContainer,
} from "./styles/HistoricalCard.styled";
import { format, parseISO } from "date-fns";
import Icon from "./Icon";
import { BsChevronCompactDown } from "react-icons/bs";

const HistoricalCard = ({
  cost,
  date,
  ownerName,
  accentColor,
  title,
  initialCost,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledCard borderColor={accentColor}>
      <MinimizedContainer>
        <div>{ownerName}</div>
        <div>{cost}</div>
        <div>{format(parseISO(date), "MM-d-yy")}</div>
      </MinimizedContainer>
      <ExpandableContainer expanded={expanded}>
        <div> {title}</div>
        <div>TotalExpense: {initialCost} </div>
      </ExpandableContainer>
      <div onClick={() => setExpanded(!expanded)}>
        <Icon IconName={BsChevronCompactDown} />
      </div>
    </StyledCard>
  );
};

export default HistoricalCard;
