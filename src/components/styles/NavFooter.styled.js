import styled from "styled-components";

export const StyledFooter = styled.footer`
  bottom: 0px;
  display: flex;
  height: 6vh;
  min-height: 30px;
  position: absolute;
  z-index: 4;
`;

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 -1px 4px rgb(0 0 0 / 12%), 0 1px 2px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100vw;

  & > div {
    margin: 0 15px;
  }
`;
