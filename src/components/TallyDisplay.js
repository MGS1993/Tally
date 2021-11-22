import React from "react";

const TallyDisplay = ({ data }) => {
  return (
    <div style={mainWrapper}>
      <div style={cardStyle}>
        <p style={text}>Your Expenses</p>
        <div style={totalStyle}>{data?.calculatedUserExpenses} </div>
      </div>

      <div style={cardStyle}>
        <p style={text}>BAL</p>
        <div id="difference" style={totalStyle}>
          {/* '|| 0' added as initial render value */}
          {data?.calculatedUserExpenses - data?.calculatedOtherUserExpenses ||
            0}
        </div>
      </div>

      <div style={cardStyle}>
        <p style={text}>Their Expenses</p>
        <div style={totalStyle}>{data?.calculatedOtherUserExpenses}</div>
      </div>
    </div>
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
