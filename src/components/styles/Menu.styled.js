import styled from "styled-components";

export const StyledMenu = styled.div`
  background-color: #fff;
  bottom: -20vh;
  height: 0vh;
  position: fixed;
  transition: 0.5s ease-in-out;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20% 0px;
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  & > div {
    background-color: #f0f9fe;
    color: #5cb6e2;
    font-size: 28px;
    font-weight: bold;
    padding: 10px 12px;
    text-transform: uppercase;
  }

  & > input {
    border: 2px solid #5cb6e2;
    color: #38334ccc;
    font-size: 26px;
    margin-top: 10px;
    padding: 8px 12px;
  }

  & > textarea {
    border: 2px solid #5cb6e2;
    color: #38334ccc;

    font-size: 18px;
    padding: 8px 12px;
  }
`;

export const FormButton = styled.input`
  align-self: center;
  background-color: #5cb6e2;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  height: 40px;
  margin: 10px;
  width: 80%;
`;
