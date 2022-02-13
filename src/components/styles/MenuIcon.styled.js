import styled from "styled-components";

export const StyledIconWrapper = styled.div`
  display: flex;
  width: ${({ iconSize }) => iconSize};
  border-radius: parseInt(20px) / 2;
  justify-content: center;
  align-items: center;

  & > svg {
    transition: color 0.4s ease;
  }
`;
