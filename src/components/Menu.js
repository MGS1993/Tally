import React, { useState, useContext } from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";

import { addExpense } from "../util/addExpense";
import { getExpenses } from "../util/getExpenses";
import getPercentage from "../util/getPercent";
import InputDisplay from "./InputDisplay";
import {
  FormItem,
  InputWrapper,
  StyledForm,
  StyledInput,
  StyledMenu,
  InputMod,
} from "./styles/Menu.styled";
import ToggleToken from "./ToggleToken";
import Slider from "@mui/material/Slider";
import { FormSubmitBtn } from "./styles/Button.styled";
import colors from "../util/colorArray";
import MenuContext from "../contextApi/menuContext";

const Menu = ({ currentUser, linkedUsers, style }) => {
  const [toggled, setToggled] = useState(false);
  const [calculatedExpense, setCalculatedExpense] = useState();
  const [initialCost, setInitialCost] = useState("");
  const [splitValue, setSplitValue] = useState(50);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [designatedToggle, setDesignatedToggle] = useState(false);
  const [designation, setDesignation] = useState("");
  const [loopClick, setLoopClick] = useState(0);
  //input type used for date
  const [inputType, setInputType] = useState("text");
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const { menuToggle, setMenuToggle, setData } = useContext(MenuContext);

  const changeOwner = () => {
    setDesignatedToggle(true);
    /* changes owner based on modulus */
    setLoopClick((prevState) => prevState + 1);
    const isEven = loopClick % 2 === 0 ? 1 : 0;
    setDesignation(linkedUsers[isEven]);
  };

  const handleInputStatus = (value) => {
    value.length <= 0 ? setIsInputEmpty(true) : setIsInputEmpty(false);
  };

  const addExpenseAndState = async (data) => {
    let exLabelColor = colors[Math.floor(Math.random() * colors.length)];
    data.cost = calculatedExpense;
    data.splitValue = splitValue;
    data.initialCost = initialCost;
    data.exLabelColor = exLabelColor;
    //if designation button isn't active it charges currentUser
    designation !== ""
      ? await addExpense(data, designation._id)
      : await addExpense(data, currentUser._id);
    //retrieves new expense data and updates state
    const newExpenses = await getExpenses(currentUser._id);
    setData(newExpenses);

    reset();
    //Post reset form cleanup
    setSplitValue(50);
    setCalculatedExpense(null);
    setIsInputEmpty(true);
    setMenuToggle(!menuToggle);
    setInitialCost("");
    setInputType("text");
  };

  const sliderFunc = (value) => {
    let currentValue = getValues("cost");
    let calculatedExpense = getPercentage(value, currentValue);
    setCalculatedExpense(calculatedExpense);
    setSplitValue(value);
  };

  const inputCalculator = (value) => {
    handleInputStatus(value.target.value);
    let currentValue = parseInt(value.target.value);
    let calculatedExpense = getPercentage(currentValue, 50);
    setCalculatedExpense(calculatedExpense);
    setInitialCost(value.target.value);
  };

  return (
    <StyledMenu style={style}>
      <StyledForm
        id="form"
        onSubmit={handleSubmit((data) => addExpenseAndState(data))}
      >
        <>
          <FormItem>
            <InputMod>
              {/* Cost */}
              <ToggleToken
                disabled={isInputEmpty}
                toggled={toggled}
                name="Modify Split"
                clicked={() => setToggled(!toggled)}
              />
              <ToggleToken
                name={designation.userName || "Charge to other"}
                toggled={designatedToggle}
                clicked={() => changeOwner()}
              />
            </InputMod>
            <InputWrapper>
              <StyledInput
                type="number"
                id="number-input"
                inputMode="numeric"
                placeholder="Cost (required)"
                name="cost"
                step="0.01"
                onInput={(value) => inputCalculator(value)}
                {...register("cost", { required: true })}
              />
              <InputDisplay calculatedSplit={calculatedExpense} />
            </InputWrapper>
            {errors.cost?.type === "required" && "Cost is required"}
            <Slider
              disabled={!toggled}
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
          {/* <TitleDiv>Title</TitleDiv> */}
          <StyledInput
            type="text"
            id="title-input"
            name="title"
            placeholder="Title"
            {...register("title")}
          />
        </FormItem>
        <FormItem className={styles.dateWrapper}>
          {/* <TitleDiv>Date</TitleDiv> */}
          <StyledInput
            type={inputType}
            id="date-picker"
            name="date"
            placeholder="Date"
            onFocus={() => setInputType("date")}
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

        <FormSubmitBtn variant="contained" type="submit">
          Submit Expense
        </FormSubmitBtn>
      </StyledForm>
    </StyledMenu>
  );
};

export default Menu;
