import React, { useContext } from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";
import AuthContext from "../auth/context";

import { addExpense } from "../util/addExpense";

const Menu = ({ style }) => {
  const userContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addExpenseAndState = (data) => {
    addExpense(data, userContext.user._id);
  };

  return (
    <div className={styles.mainWrapper} style={style}>
      <form
        id="form"
        className={styles.formWrapper}
        onSubmit={handleSubmit((data) => addExpenseAndState(data))}
      >
        <div className={styles.costInputWrapper}>
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="Cost"
            name="cost"
            {...register("cost", { required: true })}
          />
          {errors.cost?.type === "required" && "Cost is required"}
        </div>
        <div className={styles.titleDateWrapper}>
          <div className={styles.titleWrapper}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              {...register("title")}
            />
          </div>
          <div className={styles.dateWrapper}>
            <label style={{ opacity: "1", color: "white" }} htmlFor="date">
              Date
            </label>
            <input
              id="date-picker"
              type="date"
              name="date"
              {...register("date")}
            />
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <label htmlFor="description">Description (optional)</label>
          <textarea
            cols="15"
            rows="2"
            placeholder="Description"
            name="description"
            {...register("description")}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Menu;
