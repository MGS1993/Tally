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
  color: #808080;
  text-align: center;
  text-transform: capitalize;
`;

//Right Card /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
export const CardRight = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
`;

export const ExpenseTitle = styled.div`
  //placeholder color
  align-items: center;
  background-color: ${({ colorAccent }) => colorAccent};
  border-radius: 8px;
  color: white;
  display: flex;
  font-size: 1.4rem;
  height: 40px;
  justify-content: center;
  position: relative;
  text-align: center;

  & > :first-child {
    //targets delete button div
    position: absolute;
    height: 22px;
    width: 22px;
    left: 5px;
  }

  & > :nth-child(2) {
    display: block;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const MiscItem = styled.div`
  & > :first-child {
    /* grey is color placeholder */
    color: grey;
  }
`;

export const MiscInfo = styled.div`
  display: flex;
  flex-basis: 40%;
  justify-content: space-evenly;

  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SummaryDiv = styled.div`
  color: #6e6e6e;
  flex-basis: 60%;
  min-height: 65px;
  padding: 8px 4px;
  overflow: scroll;
`;
