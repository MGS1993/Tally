import { useState } from "react";
import { FlexRow } from "./styles/Flex";
import ToggleToken from "./ToggleToken";

const SortableContainer = ({ list }) => {
  //accepts react elements, NOT regular arrays
  const [historicalList, setHistoricalList] = useState(list);

  const [expenseLowToHigh, setExpenseLowToHigh] = useState(false);
  const [expenseToggle, setExpenseToggle] = useState(false);

  const [dateOldToNew, setDateOldToNew] = useState(false);
  const [dateToggle, setDateToggle] = useState(false);

  const sortHighToLow = () => {
    let newList = [...historicalList];
    newList.sort((a, b) => b.props.cost - a.props.cost);
    setHistoricalList(newList);
    setExpenseLowToHigh(!expenseLowToHigh);
    setExpenseToggle(true);
    setDateToggle(false);
  };

  const sortLowToHigh = () => {
    let newList = [...historicalList];
    newList.sort((a, b) => a.props.cost - b.props.cost);
    setHistoricalList(newList);
    setExpenseLowToHigh(!expenseLowToHigh);
    setExpenseToggle(true);
    setDateToggle(false);
  };

  const sortDateOld = () => {
    let newList = [...historicalList];
    newList.sort((a, b) => new Date(b.props.date) - new Date(a.props.date));
    setHistoricalList(newList);
    setDateOldToNew(!dateOldToNew);
    setDateToggle(true);
    setExpenseToggle(false);
  };

  const sortDateNew = () => {
    let newList = [...historicalList];
    newList.sort((a, b) => new Date(a.props.date) - new Date(b.props.date));
    setHistoricalList(newList);
    setDateOldToNew(!dateOldToNew);
    setDateToggle(true);
    setExpenseToggle(false);
  };
  return (
    <div>
      <FlexRow justifyContent="space-around">
        <ToggleToken
          name={
            !dateToggle
              ? "Sort Date"
              : dateOldToNew
              ? "Old To New"
              : "New To Old"
          }
          toggled={dateToggle}
          clicked={dateOldToNew ? () => sortDateOld() : () => sortDateNew()}
        />
        <ToggleToken
          /* Sort is displayed initially. After toggle 
          the secondary ternary takes over naming  */
          name={
            !expenseToggle
              ? "Sort Expense"
              : expenseLowToHigh
              ? "High To Low"
              : "Low To High"
          }
          toggled={expenseToggle}
          clicked={
            expenseLowToHigh ? () => sortLowToHigh() : () => sortHighToLow()
          }
        />
      </FlexRow>

      {historicalList}
    </div>
  );
};

export default SortableContainer;
