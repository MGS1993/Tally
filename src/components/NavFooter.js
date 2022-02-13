import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import Icon from "./Icon";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { Container, StyledFooter } from "./styles/NavFooter.styled";
//TODO find a way to make icon change color based on route
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
            {/* disables history link if menu is toggled */}
            {menuToggle ? (
              <Icon IconName={BsFillBarChartLineFill} size={30} />
            ) : (
              <Link to="/history">
                <Icon IconName={BsFillBarChartLineFill} size={30} />
              </Link>
            )}
          </div>
          <div onClick={clicked}>
            <Icon
              IconName={GiHamburgerMenu}
              size={30}
              activeColor={menuToggle}
            />
          </div>
        </Container>
      </StyledFooter>
    </>
  );
};

export default NavFooter;
