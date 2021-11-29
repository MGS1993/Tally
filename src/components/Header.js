import React from "react";

const Header = () => {
  return (
    <div style={mainWrapper}>
      <h1>Tally</h1>
    </div>
  );
};

const mainWrapper = {
  alignItems: "center",
  backgroundColor: "dodgerblue",
  color: "white",
  display: "flex",
  height: "6%",
  justifyContent: "center",
  minHeight: "38px",
};

export default Header;
