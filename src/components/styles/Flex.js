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
  width: ${({ width }) => width};
`;

export const ToggleWrapper = styled(FlexRow)`
  @media (min-width: 768px) {
    width: 40%;
  }
`;
