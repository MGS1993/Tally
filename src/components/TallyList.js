import React from "react";

import TallyExpense from "./TallyExpense";

const TallyList = ({ data, quantity }) => {
  const list = [];
  // console.log(data);
  const { userExpenses, otherUserExpenses } = data ?? {};

  // console.log(userExpenses, otherUserExpenses);
  // const mergedData = [...userExpenses, ...otherUserExpenses];

  // console.log(mergedData[0].date);

  //sort based on date
  // mergedData.sort((a,b) => {

  // } )

  // for(let i = 0; i < quantity; i++) {
  //   list.push(
  //     <TallyExpense />
  //   )
  // }

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
