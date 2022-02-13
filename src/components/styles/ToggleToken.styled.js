import styled from "styled-components";

export const StyledToggleToken = styled.button`
  align-items: center;
  background-color: ${({ toggled }) => (toggled ? "dodgerblue" : "#fff")};
  border: ${({ toggled }) => (toggled ? "0px" : "2px solid dodgerblue")};
  border-radius: 12px;
  color: ${({ toggled }) => (toggled ? "#fff" : "#4a4a4a")};
  display: flex;
  font-size: 12px;
  justify-content: center;
  min-width: 116.5px;
  padding: ${({ toggled }) => (toggled ? "10px" : "8px")};
  text-transform: capitalize;
  transition: background-color 0.4s ease, color 0.4s ease;

  & > div {
    padding: 4px;
  }
`;
