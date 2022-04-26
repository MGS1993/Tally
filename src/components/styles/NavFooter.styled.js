import styled from "styled-components";

export const StyledFooter = styled.footer`
  bottom: 0px;
  display: flex;
  height: 6vh;
  min-height: 30px;
  position: absolute;
  z-index: 4;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: center;
    width: 75%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 -1px 4px rgb(0 0 0 / 12%), 0 1px 2px;
  display: flex;
  justify-content: space-between;
  width: inherit;

  & > div {
    margin: 0 15px;
  }
`;
