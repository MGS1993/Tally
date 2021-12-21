import React, { useContext, useState } from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";
import AuthContext from "../auth/context";

import { addExpense } from "../util/addExpense";
import { getExpenses } from "../util/getExpenses";
import getPercentage from "../util/getPercent";
import {
  StyledMenu,
  FormItem,
  FormButton,
  StyledForm,
} from "./styles/Menu.styled";
import ToggleToken from "./ToggleToken";
import Slider from "@mui/material/Slider";

const Menu = ({ setData, style }) => {
  /* NEXT SET BUTTON THAT ACTIVATES SPLIT COST STATE AND REVEALS SLIDER.
  ADD PERCENT FEEDBACK FROM SLIDER AND HAVE A 'FINISHED' BUTTON THAT CLOSES SLIDER
  AND USES SETVALUE FROM USEFORM HOOK TO SET COST BEFORE SUBMIT EXPENSES */
  const userContext = useContext(AuthContext);
  const [toggled, setToggled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const addExpenseAndState = async (data) => {
    console.log(data);
    await addExpense(data, userContext.user._id);
    const newExpenses = await getExpenses(userContext.user._id);
    setData(newExpenses);
    reset();
  };
  // console.log(getValues("cost"));

  const sliderFunc = (value) => {
    // console.log(getValues("cost"));
    let currentValue = getValues("cost");
    // console.log(value);
    console.log(getPercentage(value, currentValue));
    return getPercentage(value, currentValue);
  };
  return (
    <StyledMenu style={style}>
      <StyledForm
        id="form"
        // className={styles.formWrapper}
        onSubmit={handleSubmit((data) => addExpenseAndState(data))}
      >
        <>
          <FormItem>
            <div>
              Cost
              <ToggleToken
                toggled={toggled}
                name="Modify Split"
                clicked={() => setToggled(!toggled)}
              />
            </div>
            <input
              type="number"
              id="number-input"
              inputMode="numeric"
              placeholder="Cost (required)"
              name="cost"
              {...register("cost", { required: true })}
            />
            {errors.cost?.type === "required" && "Cost is required"}
            <Slider
              onChange={(value) => sliderFunc(value.target.value)}
              size="medium"
              min={0}
              max={100}
              defaultValue={50}
              aria-label="sliderPercent"
              step={5}
              valueLabelDisplay="auto"
              sx={{
                height: toggled ? "8px" : "0px",
                opacity: toggled ? "1" : "0",
                transition: "all 0.3s linear",
              }}
            />
          </FormItem>
        </>

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
