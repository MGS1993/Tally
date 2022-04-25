import React from "react";

import { mergeArray } from "../util/arrayManipulation";
import { deleteExpense } from "../util/deleteExpense";
import { getExpenses } from "../util/getExpenses";
import ExpenseCard from "./ExpenseCard";
import { v4 as uuidv4 } from "uuid";
import { List } from "./styles/TallyList.styled";

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
        key={uuidv4()}
        cost={item.cost}
        title={item.title}
        date={item.date}
        description={item.description}
        ownerName={item.ownerName}
        splitValue={item.splitValue}
        initialCost={item.initialCost}
        clicked={() => delExpenseAndUpdateState(userId, item._id)}
        colorAccent={item.exLabelColor}
      />
    );
  });

  return <List>{list}</List>;
};

export default TallyList;
