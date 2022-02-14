import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: dodgerblue;
  margin-top: 22px;
  opacity: ${({ animationToggle }) => (animationToggle ? 1 : 0)};
  transition: opacity 0.4s ease;
`;
