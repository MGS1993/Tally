import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #fff;
  border: 1px solid #c9c9c9c9;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;

  margin: 10px 0px;
  width: 85vw;

  & > div {
    padding: 20px 20px;
    text-transform: capitalize;
  }
`;
