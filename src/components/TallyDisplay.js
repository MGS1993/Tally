import React, { useEffect, useContext } from "react";

import AuthContext from "../auth/context";
import { getExpenses } from "../util/getExpenses";
import useApi from "../hooks/useApi";

const TallyDisplay = () => {
  const userContext = useContext(AuthContext);
  const { data, error, loading, request: getExpenseData } = useApi(getExpenses);

  useEffect(() => {
    getExpenseData(userContext.user._id);
  }, []);
  console.log(data.calculatedUserExpenses);
  return data !== undefined ? (
    <div style={mainWrapper}>
      <div style={cardStyle}>
        <p style={text}>Your Expenses</p>
        <div id="difference" style={totalStyle}>
          {data.calculatedUserExpenses}
        </div>
      </div>

      <div style={cardStyle}>
        <p style={text}>BAL</p>
        <div id="difference" style={totalStyle}>
          {data.calculatedUserExpenses - data.calculatedOtherUserExpenses}
        </div>
      </div>

      <div style={cardStyle}>
        <p style={text}>Their Expenses</p>
        <div id="difference" style={totalStyle}>
          {data.calculatedOtherUserExpenses}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

const cardStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  margin: "10px",
};

const mainWrapper = {
  alignItems: "center",
  alignSelf: "center",
  borderRadius: "5px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  display: "flex",
  height: "100px",
  justifyContent: "center",
  marginTop: "25px",
  padding: "10px",
  width: "80vw",
};

const text = {
  color: "gray",
  fontSize: "14px",
};

const totalStyle = {
  color: "green",
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "10%",
};

export default TallyDisplay;
