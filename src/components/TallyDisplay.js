import React from "react";

const TallyDisplay = ({ data, userName }) => {
  let balance =
    data?.calculatedUserExpenses - data?.calculatedOtherUserExpenses;
  const nameSetFunc = () => {
    let otherUser;

    userName === "manuel" ? (otherUser = "victoria") : (otherUser = "manuel");
    return otherUser;
  };

  return (
    <div style={mainWrapper}>
      <div style={cardStyle}>
        <p style={text}>{`${userName}'s Expenses`}</p>
        <div style={totalStyle}>{data?.calculatedUserExpenses} </div>
      </div>

      <div style={cardStyle}>
        <p style={text}>Balance</p>
        <div id="difference" style={balance < 0 ? DeficitText : totalStyle}>
          {/* '|| 0' added as initial render value */}
          {balance || 0}
        </div>
      </div>

      <div style={cardStyle}>
        <p style={text}>{`${nameSetFunc()}'s Expenses`}</p>
        <div style={totalStyle}>{data?.calculatedOtherUserExpenses}</div>
      </div>
    </div>
  );
};

const cardStyle = {
  alignItems: "center",
  display: "flex",
  flex: "1",
  flexDirection: "column",
  margin: "10px",
  textAlign: "center",
  height: "100%",
  justifyContent: "center",
};

const mainWrapper = {
  alignItems: "center",
  alignSelf: "center",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  display: "flex",
  justifyContent: "center",
  marginTop: "25px",
  padding: "10px",
  width: "80vw",
};

const text = {
  color: "gray",
  fontSize: "14px",
  minHeight: "32px",
  textTransform: "capitalize",
};
const DeficitText = {
  color: "red",
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "10%",
};

const totalStyle = {
  color: "green",
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "10%",
};

export default TallyDisplay;
