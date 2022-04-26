import styled from "styled-components";

export const ExpenseWrapper = styled.div`
  background-color: white;
  border: 1px solid #c9c9c9c9;
  border-radius: 6px;
  display: flex;
  flex: 0 0 100px;
  margin: 10px 0px;
  padding: 12px 2px;
  /* width: 88vw; */
`;

//Left Card /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
export const CardLeft = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const ExpenseAmount = styled.div`
  color: green;
  font-size: 1.6rem;
`;

export const UserNameText = styled.div`
  color: #808080;
  text-transform: capitalize;
`;

//Right Card /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
export const CardRight = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
`;

export const TitleDivWrapper = styled.div`
  //placeholder color
  align-items: center;
  background-color: ${({ toggle, colorAccent }) =>
    toggle === 1 ? "white" : colorAccent};
  border-radius: 8px;
  color: white;
  display: flex;
  font-size: 1.4rem;
  min-height: 40px;
  justify-content: center;
  position: relative;
  text-align: center;
  margin: 0 8px;

  @media (min-width: 768px) {
    margin: 0 15%;
  }
`;

export const Title = styled.div`
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AnimationWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ff6640;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;

  ${({ toggle }) =>
    toggle &&
    `
      transform: scaleX(1);
      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  `}
  //delete and cancel button post animation
  & > div:first-child {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 100%;
  }
`;

export const DeleteButtonWrapper = styled.div`
  position: absolute;
  height: 22px;
  width: 22px;
  left: 5px;
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
  margin-top: ${({ descPopulateChecker }) =>
    descPopulateChecker?.length > 1 ? "0px" : "5px"};

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
  margin: 0 8px;
  padding: 8px 0px;
  overflow: scroll;

  @media (min-width: 768px) {
    scrollbar-width: none; // firefox
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
`;
