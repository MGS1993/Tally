import styled from "styled-components";

export const FlexCol = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FlexRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
`;
