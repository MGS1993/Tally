import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ justifyContent }) => justifyContent};
`;
