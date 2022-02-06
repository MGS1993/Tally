import React from "react";

import { mergeArray } from "../util/arrayManipulation";
import { deleteExpense } from "../util/deleteExpense";
import { getExpenses } from "../util/getExpenses";
import TallyExpense from "./TallyExpense";
import ExpenseCard from "./ExpenseCard";

const TallyList = ({ data, userId, setData }) => {
  let list = [];

  const mergedArray = mergeArray(
    data?.userExpenses,
    data?.otherUserExpenses,
    "descending"
  );

  const delExpenseAndUpdateState = async (userId, itemId) => {
    await deleteExpense(userId, itemId);
    const newExpenses = await getExpenses(userId);
    setData(newExpenses);
  };

  mergedArray?.forEach((item, index) => {
    list.push(
      <ExpenseCard
        key={index}
        cost={item.cost}
        title={item.title}
        date={item.date}
        description={item.description}
        ownerName={item.ownerName}
        splitValue={item.splitValue}
        initialCost={item.initialCost}
        clicked={() => delExpenseAndUpdateState(userId, item._id)}
      />
    );
  });

  return (
    <div style={listWrapper}>
      <div style={listStyle}>{list}</div>
    </div>
  );
};

const listWrapper = {
  alignItems: "center",
  paddingTop: "20px",
  // maxHeight: "100vh",
};

const listStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  maxHeight: "65vh",
  overflow: "scroll",
};

export default TallyList;
