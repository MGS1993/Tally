import React from "react";
import { useForm } from "react-hook-form";

import styles from "../cssModules/LoginPage.module.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFunction = (data) => console.log(data);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.appTitleWrapper}>
        <h1>Tally</h1>
      </div>
      <form
        className={styles.formWrapper}
        onSubmit={handleSubmit(submitFunction)}
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
