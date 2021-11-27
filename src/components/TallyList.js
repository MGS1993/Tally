import React, { useContext, useEffect } from "react";

import arrayManipulation from "../util/arrayManipulation";
import AuthContext from "../auth/context";
import { getExpenses } from "../util/getExpenses";
import TallyExpense from "./TallyExpense";
import useApi from "../hooks/useApi";

const TallyList = ({ quantity }) => {
  let list = [];
  const authContext = useContext(AuthContext);
  const { data, setData, request: getExpenseData } = useApi(getExpenses);

  useEffect(() => {
    getExpenseData(authContext?.user._id);
  }, []);
  const mergedArray = arrayManipulation.mergeArray(
    data.userExpenses,
    data.otherUserExpenses
  );

  if (mergedArray) {
    for (let i = 0; i < quantity; i++) {
      list.push(
        <TallyExpense
          key={i}
          cost={mergedArray[i].cost}
          title={mergedArray[i].title}
          date={mergedArray[i].date}
          description={mergedArray[i].description}
          clicked={mergedArray[i].clicked}
        />
      );
    }
  }
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
  maxHeight: "45%",
  overflow: "scroll",
};

export default TallyList;
