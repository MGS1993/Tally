import React, { useContext } from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";
import AuthContext from "../auth/context";

import { addExpense } from "../util/addExpense";
import { getExpenses } from "../util/getExpenses";
import {
  StyledMenu,
  FormItem,
  FormButton,
  StyledForm,
} from "./styles/Menu.styled";

const Menu = ({ setData, style }) => {
  const userContext = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addExpenseAndState = async (data) => {
    await addExpense(data, userContext.user._id);
    const newExpenses = await getExpenses(userContext.user._id);
    setData(newExpenses);
    reset();
  };

  return (
    <StyledMenu style={style}>
      <StyledForm
        id="form"
        // className={styles.formWrapper}
        onSubmit={handleSubmit((data) => addExpenseAndState(data))}
      >
        <FormItem>
          <div>Cost</div>
          <input
            type="number"
            id="number-input"
            inputMode="numeric"
            placeholder="Cost (required)"
            name="cost"
            {...register("cost", { required: true })}
          />
          {errors.cost?.type === "required" && "Cost is required"}
        </FormItem>

        <FormItem className={styles.titleWrapper}>
          <div>Title</div>
          <input
            type="text"
            id="title-input"
            name="title"
            placeholder="Title"
            {...register("title")}
          />
        </FormItem>
        <FormItem className={styles.dateWrapper}>
          <div>Date</div>
          <input
            type="date"
            id="date-picker"
            name="date"
            {...register("date")}
          />
        </FormItem>

        <FormItem>
          <textarea
            cols="15"
            rows="2"
            id="textarea-input"
            placeholder="Description"
            name="description"
            {...register("description")}
          />
        </FormItem>

        <FormButton id="submitBtn" type="submit" value="Submit Expense" />
      </StyledForm>
    </StyledMenu>
  );
};

export default Menu;
