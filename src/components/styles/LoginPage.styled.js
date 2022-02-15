import styled from "styled-components";

export const Title = styled.div`
  position: absolute;
  font-family: "Dancing Script", cursive;
  left: 0;
  right: 0;
  font-size: 35px;
  color: white;
  margin-left: 0;
  margin-right: 0;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  top: 10vh;
`;

export const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  background: rgb(165, 112, 215);
  background: linear-gradient(
    58deg,
    rgba(165, 112, 215, 1) 0%,
    rgba(105, 105, 218, 1) 53%,
    rgba(57, 176, 200, 1) 100%
  );
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  /* margin-top: 30vh; */
  width: 80vw;

  div {
    margin: 10px 0px;
  }

  button {
    font-size: 18px;
    margin-top: 10px;
  }
`;
