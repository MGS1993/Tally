import styled from "styled-components";

export const StyledMenu = styled.div`
  background-color: #fff;
  bottom: -50vh;
  display: flex;
  flex-direction: column;
  height: 0vh;
  justify-content: center;
  padding: 10px;
  position: fixed;
  transition: 0.5s ease-in-out;
  width: 100%;
  z-index: 4;

  @media (min-width: 768px) {
    background-color: transparent;
    border-radius: 15px;
    left: 0;
    margin: 0 auto;
    right: 0;
    width: 60%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  /* overflow-y: scroll; */

  @media (min-width: 768px) {
    align-items: center;
    background-color: #fff;
    height: 80%;
    justify-content: center;
  }
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  & > textarea {
    border: 2px solid #5cb6e2;
    border-radius: 8px;
    color: #38334ccc;
    font-family: "Roboto";
    font-size: 18px;
    padding: 8px 12px;
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const StyledInput = styled.input`
  border: 2px solid #5cb6e2;
  border-radius: 10px;
  color: #38334ccc;
  font-size: 26px;
  padding: 8px 12px;
  /* width: inherit; */

  ::placeholder {
    font-family: "Roboto", sans-serif;
  }

  @media (min-width: 768px) {
    &::placeholder {
      text-align: center;
    }
  }
`;

export const InputMod = styled.div`
  align-items: center;
  background-color: #fff;
  color: #5cb6e2;
  display: flex;
  justify-content: space-evenly;
  font-size: 28px;
  font-weight: bold;
  padding: 10px 12px;
  text-transform: uppercase;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const StyledInputDisplay = styled.div`
  color: #38334ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 18px;
  top: 0px;
  right: 0px;
  height: 100%;
  padding: 8px;
  width: 30%;
`;
