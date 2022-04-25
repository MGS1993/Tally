import React, { useContext } from "react";
import AuthContext from "../contextApi/context";
import { LogoutBtn } from "./styles/Button.styled";
import { BiLogOut } from "react-icons/bi";
import StyledHeader from "./styles/Header.styled";

const Header = () => {
  const authContext = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("user");
    authContext.setUser(null);
  };

  return (
    <StyledHeader>
      <LogoutBtn onClick={() => logout()}>
        <BiLogOut color="white" />
      </LogoutBtn>
      <h1>Tally</h1>
    </StyledHeader>
  );
};

export default Header;
