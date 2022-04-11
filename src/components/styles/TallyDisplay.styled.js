import styled from "styled-components";

export const StyledDisplay = styled.div`
  align-self: center;
  background-color: dodgerblue;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  width: 97vw;
`;

export const TitleCard = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  font-size: 18px;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const ExpenseCard = styled(TitleCard)`
  color: ${({ deficit }) => (deficit ? "#b82500" : "#fff")};
  font-size: 26px;
  font-weight: bold;
  margin: 10px 20px 10px 20px;
`;
