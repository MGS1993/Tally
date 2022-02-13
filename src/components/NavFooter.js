import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import Icon from "./Icon";
import Menu from "./Menu";
import { Container, StyledFooter } from "./styles/NavFooter.styled";

const NavFooter = ({
  allUsers,
  clicked,
  menuToggle,
  setMenuToggle,
  setData,
}) => {
  return (
    <>
      {menuToggle ? (
        <Menu
          allUsers={allUsers}
          setData={setData}
          menuToggle={menuToggle}
          setMenuToggle={setMenuToggle}
          style={{ height: "100%", bottom: "0%" }}
        />
      ) : (
        <Menu />
      )}
      <StyledFooter>
        <Container>
          <div>
            <Icon IconName={BsFillBarChartLineFill} size={30} />
          </div>
          <div onClick={clicked}>
            <Icon IconName={GiHamburgerMenu} size={30} />
          </div>
        </Container>
      </StyledFooter>
    </>
  );
};

export default NavFooter;
