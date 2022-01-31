import React, { useContext, useState } from "react";
import styles from "../cssModules/Menu.module.css";
import { useForm } from "react-hook-form";
import AuthContext from "../auth/context";

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
  TitleDiv,
} from "./styles/Menu.styled";
import ToggleToken from "./ToggleToken";
import Slider from "@mui/material/Slider";
import { StyledButton } from "./styles/Button.styled";

const Menu = ({ allUsers, setData, setMenuToggle, menuToggle, style }) => {
  const userContext = useContext(AuthContext);
  const [toggled, setToggled] = useState(false);
  const [calculatedExpense, setCalculatedExpense] = useState();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [designatedToggle, setDesignatedToggle] = useState(false);
  const [designation, setDesignation] = useState("");
  const [loopClick, setLoopClick] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const changeOwner = (e) => {
    setDesignatedToggle(true);
    /* used click counter to determine even or false and
    used to loop thorough array and set designated state via clicks */
    setLoopClick((prevState) => prevState + 1);
    const isEven = loopClick % 2 === 0 ? 1 : 0;
    setDesignation(allUsers[isEven]);
  };

  const handleInputStatus = (value) => {
    value.length <= 0 ? setIsInputEmpty(true) : setIsInputEmpty(false);
  };

  const addExpenseAndState = async (data) => {
    data.cost = calculatedExpense;
    await addExpense(data, userContext.user._id);
    const newExpenses = await getExpenses(userContext.user._id);
    setData(newExpenses);
    reset();
    setCalculatedExpense(null);
    setIsInputEmpty(true);
    setMenuToggle(!menuToggle);
  };

  const sliderFunc = (value) => {
    let currentValue = getValues("cost");
    let calculatedExpense = getPercentage(value, currentValue);
    setCalculatedExpense(calculatedExpense);
  };

  const inputCalculator = (value) => {
    handleInputStatus(value.target.value);
    let currentValue = parseInt(value.target.value);
    let calculatedExpense = getPercentage(currentValue, 50);
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
                disabled={isInputEmpty}
                toggled={toggled}
                name="Modify Split"
                clicked={() => setToggled(!toggled)}
              />
              <ToggleToken
                name={designation.userName || "Designate Expense"}
                toggled={designatedToggle}
                clicked={(e) => changeOwner(e)}
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

        <StyledButton variant="contained" type="submit">
          Submit Expense
        </StyledButton>
      </StyledForm>
    </StyledMenu>
  );
};

export default Menu;
