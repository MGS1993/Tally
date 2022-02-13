import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  height: 6%;
  min-height: 30px;
  z-index: 4;
`;

export const Container = styled.div`
  align-items: center;
  box-shadow: 0 -3px 4px rgba(0, 0, 0, 0.12), 0 1px 2px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100vw;
  /* z-index: 1; */

  & > div {
    margin: 0 15px;
  }
`;
