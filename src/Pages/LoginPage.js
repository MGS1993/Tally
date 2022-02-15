import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  Title,
  LoginContainer,
  LoginForm,
} from "../components/styles/LoginPage.styled";
import { InputWrapper, StyledInput } from "../components/styles/Menu.styled";
import { FormSubmitBtn } from "../components/styles/Button.styled";
import { login } from "../util/auth";
import AuthContext from "../auth/context";

const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const loginFunction = async (payload) => {
    const { response, data } = await login(payload);
    if (response.status === 200) {
      console.log("Successfully logged in");

      localStorage.setItem("user", JSON.stringify(data));
      authContext.setUser(data);
    }
  };

  return (
    <LoginContainer>
      <Title>
        <h1>Tally</h1>
      </Title>
      <LoginForm onSubmit={handleSubmit(loginFunction)}>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Username"
            name="username"
            {...register("username", { required: true })}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            {...register("password", { required: true })}
          />
        </InputWrapper>
        <FormSubmitBtn type="submit">Log In</FormSubmitBtn>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
