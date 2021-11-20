import React, { useEffect, useContext } from "react";

import AuthContext from "../auth/context";
import { getExpenses } from "../util/getExpenses";
import useApi from "../hooks/useApi";

const TallyDisplay = ({ currentUser, otherUser }) => {
  const userContext = useContext(AuthContext);
  // console.log("context:", userContext);
  const { data, error, loading, request: getExpenseData } = useApi(getExpenses);

  useEffect(() => {
    getExpenseData(userContext.user._id);
  }, []);
  return (
    <div style={mainWrapper}>
      <div style={cardLeft}>
        <p style={text}>CURRENT BALANCE</p>
        <div id="difference" style={totalStyle}>
          {currentUser.paidFor - otherUser.paidFor}
        </div>
      </div>
      <div style={cardRight}></div>
    </div>
  );
};

const cardLeft = {
  display: "flex",
  flexDirection: "column",
  margin: "10px",
};

const cardRight = {
  display: "flex",
};

const mainWrapper = {
  alignSelf: "center",
  borderRadius: "5px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  display: "flex",
  height: "100px",
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
  fontSize: "24px",
  fontWeight: "bold",
  marginTop: "10%",
};

export default TallyDisplay;
