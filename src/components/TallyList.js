import React from "react";

import arrayManipulation from "../util/arrayManipulation";
import { deleteExpense } from "../util/deleteExpense";
import { getExpenses } from "../util/getExpenses";
import TallyExpense from "./TallyExpense";

const TallyList = ({ data, userId, setData }) => {
  let list = [];

  const mergedArray = arrayManipulation.mergeArray(
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
      <TallyExpense
        key={index}
        cost={item.cost}
        title={item.title}
        date={item.date}
        description={item.description}
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
  maxHeight: "100vh",
};

const listStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  maxHeight: "65%",
  overflow: "scroll",
};

export default TallyList;
