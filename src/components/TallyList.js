import React from "react";

import TallyExpense from "./TallyExpense";

const TallyList = ({ data, quantity }) => {
  let list = [];
  const userExpenses = data?.userExpenses;
  const otherUserExpenses = data?.otherUserExpenses;

  let mergedExpenses;

  userExpenses && otherUserExpenses
    ? (mergedExpenses = [...userExpenses, ...otherUserExpenses])
    : (mergedExpenses = null);

  console.log(userExpenses, otherUserExpenses);
  console.log("merged expenses:", mergedExpenses);

  return <div style={listStyle}></div>;
};

const listStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "20px",
};

export default TallyList;
