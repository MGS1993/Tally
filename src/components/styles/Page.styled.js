import styled from "styled-components";

export const StyledPage = styled.div`
  align-items: ${({ align }) => align};
  display: flex;
  flex: 1;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ direction }) => direction};
  position: relative;
  /* overflow: scroll; */
`;
