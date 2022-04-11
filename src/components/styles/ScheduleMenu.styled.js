import styled from "styled-components";

export const StyledScheduleMenu = styled.div`
  align-items: center;
  background-color: dodgerblue;
  bottom: ${({ toggle }) => (toggle ? "15%" : "-50vh")};
  display: flex;
  flex-direction: column;
  height: ${({ toggle }) => (toggle ? "50vh" : "0vh")};
  /* justify-content: center; */
  position: fixed;
  transition: 0.5s ease-in-out;
  width: 100%;
  z-index: 4;
`;

export const Header = styled.div`
  align-self: center;
  color: white;
  font-size: ${({ size }) => (size ? size : "32px")};
  margin-top: 10px;
`;
