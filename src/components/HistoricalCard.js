import { StyledCard } from "./styles/HistoricalCard.styled";
import { format, parseISO } from "date-fns";
const HistoricalCard = ({ cost, date, ownerName, accentColor }) => {
  return (
    <StyledCard borderColor={accentColor}>
      <div>{ownerName}</div>
      <div>{cost}</div>
      <div>{format(parseISO(date), "MM-d-yy")}</div>
    </StyledCard>
  );
};

export default HistoricalCard;
