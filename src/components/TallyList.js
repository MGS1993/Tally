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

  mergedArray?.forEach((item, index) => {
    list.push(
      <TallyExpense
        key={item.index}
        cost={item.cost}
        title={item.title}
        date={item.date}
        description={item.description}
        clicked={item.clicked}
      />
    );
  });
  return <div style={listStyle}>{list}</div>;
};

const listStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "20px",
};

export default TallyList;
