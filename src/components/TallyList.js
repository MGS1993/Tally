import React from "react";
import arrayManipulation from "../util/arrayManipulation";
import TallyExpense from "./TallyExpense";

const TallyList = ({ data }) => {
  let list = [];

  const mergedArray = arrayManipulation.mergeArray(
    data?.userExpenses,
    data?.otherUserExpenses,
    "descending"
  );

  mergedArray?.forEach((item, index) => {
    list.push(
      <TallyExpense
        key={index}
        cost={item.cost}
        title={item.title}
        date={item.date}
        description={item.description}
        clicked={item.clicked}
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
};

const listStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  maxHeight: "55%",
  overflow: "scroll",
};

export default TallyList;
