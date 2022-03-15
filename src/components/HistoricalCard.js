import { StyledCard } from "./styles/HistoricalCard.styled";
import { FlexCol, FlexRow } from "./styles/Flex";
import { formatDate } from "../util/stringManipulation";
const HistoricalCard = ({ cost, date, ownerName }) => {
  return (
    <StyledCard>
      <div>{ownerName}</div>
      <div>{cost}</div>
      <div>{date}</div>
    </StyledCard>
  );
};

export default HistoricalCard;
