import React, { useContext } from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";
import AuthContext from "../auth/context";

import { addExpense } from "../util/addExpense";
import { getExpenses } from "../util/getExpenses";
import useApi from "../hooks/useApi";
import { useEffect } from "react/cjs/react.development";

const Menu = ({ style }) => {
  const userContext = useContext(AuthContext);
  const { setData, request: getExpenseData } = useApi(getExpenses);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getExpenseData(userContext?.user._id);
  }, []);

  const addExpenseAndState = async (data) => {
    await addExpense(data, userContext.user._id);
    const newExpenses = await getExpenses(userContext.user._id);
    setData(newExpenses);
    reset();
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
            id="number-input"
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
              id="title-input"
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
              type="date"
              id="date-picker"
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
            id="textarea-input"
            placeholder="Description"
            name="description"
            {...register("description")}
          />
        </div>

        <input className={styles.submitBtn} id="submitBtn" type="submit" />
      </form>
    </div>
  );
};

export default Menu;
