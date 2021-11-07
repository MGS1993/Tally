import React from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";

const Menu = ({ style }) => {
  const { register, handleSubmit, errors } = useForm();

  const submitFunction = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.mainWrapper} style={style}>
      <form id="form" onSubmit={handleSubmit(submitFunction)}>
        <input
          type="text"
          placeholder="Cost"
          name="cost"
          {...register("cost")}
        />
        <input
          type="date"
          placeholder="Date"
          name="date"
          {...register("date")}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          {...register("category")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Menu;
