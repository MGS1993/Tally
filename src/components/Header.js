import React, { useContext } from "react";
import AuthContext from "../auth/context";
import { LogoutBtn } from "./styles/Button.styled";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  const authContext = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("user");
    authContext.setUser(null);
  };

  return (
    <div style={mainWrapper}>
      <LogoutBtn onClick={() => logout()}>
        <BiLogOut color="white" />
      </LogoutBtn>
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
  position: "relative",
};

export default Header;
