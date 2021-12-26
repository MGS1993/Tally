import styled from "styled-components";

export const StyledToggleToken = styled.button`
  align-items: center;
  background-color: ${({ toggled }) => (toggled ? "dodgerblue" : "#bdbdbd")};
  border: 0px;
  border-radius: 12px;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 12px;
  padding: 8px;
  transition: background-color 0.4s ease;

  & > div {
    padding: 4px;
  }
`;
