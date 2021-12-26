import React, { useContext, useState } from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";
import AuthContext from "../auth/context";

import { addExpense } from "../util/addExpense";
import { getExpenses } from "../util/getExpenses";
import getPercentage from "../util/getPercent";
import InputDisplay from "./InputDisplay";
import {
  FormButton,
  FormItem,
  InputWrapper,
  StyledForm,
  StyledInput,
  StyledMenu,
  TitleDiv,
} from "./styles/Menu.styled";
import ToggleToken from "./ToggleToken";
import Slider from "@mui/material/Slider";

const Menu = ({ setData, style }) => {
  /* TYPING IN INPUT IS NOT FIRING ON CHANGE WHICH WE NEED TO USE TO UPDATE FORM DATA
  WITHOUT HAVING TO CLICK OUT OF THE BOX WHICH ACTIVATES THE SLIDER. SIMPLY PUT WE ARE
  RELYING ON THE SLIDER TO NOT HAVE AN UNDEFINED COST WHEN IT SHOULD BE AN ACESSORY NOT
  A STRUCTURAL PIECE OF CODE.
  
  WE MIGHT NEED TO ALSO USE SETVALUE FROM THE FORM HOOK RATHER THAT MUDATING DATA MANUALLY
  NEED MORE TESTING TO SEE IF IT'LL CAUSE ISSUES.*/

  const userContext = useContext(AuthContext);
  const [toggled, setToggled] = useState(false);
  const [calculatedExpense, setCalculatedExpense] = useState();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const addExpenseAndState = async (data) => {
    data.cost = calculatedExpense;
    await addExpense(data, userContext.user._id);
    const newExpenses = await getExpenses(userContext.user._id);
    setData(newExpenses);
    reset();
  };

  const sliderFunc = (value) => {
    let currentValue = getValues("cost");
    let calculatedExpense = getPercentage(value, currentValue);
    setCalculatedExpense(calculatedExpense);
  };

  const inputCalculator = (value) => {
    let currentValue = parseInt(value.target.value);
    let calculatedExpense = getPercentage(currentValue, 50);
    console.log(calculatedExpense);
    setCalculatedExpense(calculatedExpense);
  };

  return (
    <StyledMenu style={style}>
      <StyledForm
        id="form"
        onSubmit={handleSubmit((data) => addExpenseAndState(data))}
      >
        <>
          <FormItem>
            <TitleDiv>
              Cost
              <ToggleToken
                toggled={toggled}
                name="Modify Split"
                clicked={() => setToggled(!toggled)}
              />
            </TitleDiv>
            <InputWrapper>
              <StyledInput
                type="number"
                id="number-input"
                inputMode="numeric"
                placeholder="Cost (required)"
                name="cost"
                onInput={(value) => inputCalculator(value)}
                {...register("cost", { required: true })}
              />
              <InputDisplay calculatedSplit={calculatedExpense} />
            </InputWrapper>
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
          <TitleDiv>Title</TitleDiv>
          <StyledInput
            type="text"
            id="title-input"
            name="title"
            placeholder="Title"
            {...register("title")}
          />
        </FormItem>
        <FormItem className={styles.dateWrapper}>
          <TitleDiv>Date</TitleDiv>
          <StyledInput
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
