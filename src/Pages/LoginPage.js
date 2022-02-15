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
import loginSchema from "../Validations/LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";

//TODO finish login validation errors
const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginFunction = async (formData) => {
    const { response, data } = await login(formData);
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(data));
      authContext.setUser(data);
    }

    // console.log("response:", response);
    // console.log("data:", data);
  };
  // console.log(errors);
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
            {...register("username")}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            {...register("password")}
          />
        </InputWrapper>
        <FormSubmitBtn type="submit">Log In</FormSubmitBtn>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
