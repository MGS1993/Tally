import styled from "styled-components";

export const StyledMenu = styled.div`
  background-color: #fff;
  bottom: -50vh;
  display: flex;
  flex-direction: column;
  height: 0vh;
  justify-content: center;
  position: fixed;
  transition: 0.5s ease-in-out;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  overflow-y: scroll;
  /* margin: 20% 0px; */
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  & > textarea {
    border: 2px solid #5cb6e2;
    color: #38334ccc;

    font-size: 18px;
    padding: 8px 12px;
  }
`;

export const StyledInput = styled.input`
  border: 2px solid #5cb6e2;
  color: #38334ccc;
  font-size: 26px;
  padding: 8px 12px;
  width: inherit;
`;

export const TitleDiv = styled.div`
  align-items: center;
  background-color: #f0f9fe;
  color: #5cb6e2;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: bold;
  padding: 10px 12px;
  text-transform: uppercase;
`;

export const InputWrapper = styled.div`
  display: flex;
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
