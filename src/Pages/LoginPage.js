import React, { useContext, useState } from "react";
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
import loginSchema from "../Validations/LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import MobileAlert from "../components/styles/MobileAlert";
import ErrorAlert from "../components/styles/ErrorAlert";

//TODO finish login validation errors
const LoginPage = () => {
  const [failedLogin, setFailedLogin] = useState(false);
  const authContext = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginFunction = async (formData) => {
    const { response, data } = await login(formData);
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      authContext.setUser(data);
    }

    if (!response.ok) {
      setFailedLogin(true);
    }
  };
  return (
    <LoginContainer>
      <Title>
        <h1>Tally</h1>
      </Title>
      <MobileAlert>
        <p>Hello! This website is best used on mobile</p>
      </MobileAlert>
      {failedLogin ? <ErrorAlert>Invalid login</ErrorAlert> : null}
      <LoginForm onSubmit={handleSubmit(loginFunction)}>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Username"
            name="username"
            {...register("username")}
          />
          <ErrorAlert>{errors.username?.message}</ErrorAlert>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            {...register("password")}
          />
          <ErrorAlert>{errors.password?.message}</ErrorAlert>
        </InputWrapper>
        <FormSubmitBtn type="submit">Log In</FormSubmitBtn>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
