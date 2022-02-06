import styled from "styled-components";

export const ExpenseWrapper = styled.div`
  background-color: white;
  border: 1px solid #c9c9c9c9;
  border-radius: 6px;
  display: flex;
  flex: 0 0 100px;
  margin: 10px 0px;
  padding: 12px 2px;
  width: 85vw;
`;

//Left Card /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
export const CardLeft = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
`;

export const ExpenseAmount = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;

  & > p {
    color: green;
    font-size: 1.6rem;
  }
`;

export const UserNameText = styled.div`
  text-align: center;
  color: #808080;
`;

// export const ExpenseContribution

//Right Card /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
export const CardRight = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
`;

export const SummaryDiv = styled.div`
  color: #6e6e6e;
  flex-basis: 60%;
  min-height: 90px;
  padding: 8px 4px;
`;

export const MiscInfo = styled.div`
  display: flex;
  flex-basis: 40%;

  & > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
