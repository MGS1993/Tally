import styled from "styled-components";

export const Divider = styled.div`
  align-self: center;
  border-left: 2px solid ${({ theme }) => theme.colors.main};
  display: flex;
  height: 90%;
  width: 8px;
`;
