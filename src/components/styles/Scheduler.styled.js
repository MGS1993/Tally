import styled from "styled-components";

export const BreakDown = styled.div`
  background: linear-gradient(
    58deg,
    rgba(165, 112, 215, 1) 0%,
    rgba(105, 105, 218, 1) 53%,
    rgba(57, 176, 200, 1) 100%
  );
  border-radius: 10px;
  height: 100px;
  margin-top: 10px;
  padding: 8px;
  width: 97vw;

  div {
    margin-left: 20px;
  }
  div:nth-child(1) {
    font-size: 20px;
  }

  div:nth-child(2) {
    font-size: 36px;
  }
`;
