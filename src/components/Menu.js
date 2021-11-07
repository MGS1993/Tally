import React from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";

const Menu = ({ style }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFunction = (data) => console.log(data);

  return (
    <div className={styles.mainWrapper} style={style}>
      <form
        id="form"
        className={styles.formWrapper}
        onSubmit={handleSubmit(submitFunction)}
      >
        <div className={styles.costInputWrapper}>
          <div>
            <p>USD</p>
          </div>
          <input
            type="text"
            placeholder="Cost"
            name="cost"
            {...register("cost", { required: true })}
          />
          {errors.cost?.type === "required" && "Cost is required"}
        </div>

        <input id="date-picker" type="date" name="date" {...register("date")} />

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
