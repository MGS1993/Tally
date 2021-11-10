import React, { useContext } from "react";
import styles from "../cssModules/LoginPage.module.css";
import { useForm } from "react-hook-form";

import auth from "../util/auth";
import AuthContext from "../auth/context";

const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginFunction = async (payload) => {
    const { response, data } = await auth.login(payload);
    if (response.status === 200) {
      console.log("Successfully logged in");

      localStorage.setItem("user", JSON.stringify(data));
      authContext.setUser(data);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.appTitleWrapper}>
        <h1>Tally</h1>
      </div>
      <form
        className={styles.formWrapper}
        onSubmit={handleSubmit(loginFunction)}
      >
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input
            className={styles.loginInput}
            type="text"
            placeholder="Username"
            name="username"
            {...register("username", { required: true })}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Password"
            name="password"
            {...register("password", { required: true })}
          />
        </div>
        <input className={styles.loginSubmit} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
