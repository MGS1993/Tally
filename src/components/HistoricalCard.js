import { StyledCard } from "./styles/HistoricalCard.styled";
import { format, parseISO } from "date-fns";
const HistoricalCard = ({ cost, date, ownerName }) => {
  return (
    <StyledCard>
      <div>{ownerName}</div>
      <div>{cost}</div>
      <div>{format(parseISO(date), "MM-d-yy")}</div>
    </StyledCard>
  );
};

export default HistoricalCard;
