import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { MdSchedule } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import Icon from "./Icon";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { Container, StyledFooter } from "./styles/NavFooter.styled";
import { useLocation } from "react-router-dom";
const NavFooter = ({ currentUser, linkedUsers, clicked, menuToggle }) => {
  //path location is used as a variable for AdaptiveLink
  const location = useLocation();

  const AdaptiveLink = () => {
    let AdaptiveIcon;
    if (location.pathname === "/history") AdaptiveIcon = AiFillHome;
    else AdaptiveIcon = BsFillBarChartLineFill;

    let adaptiveColor = () => {
      let color;
      location.pathname === "/history"
        ? (color = "#1976d2")
        : (color = "black");
      return color;
    };

    if (menuToggle) {
      return <Icon color={adaptiveColor} IconName={AdaptiveIcon} size={30} />;
    } else {
      return (
        <div>
          <Link to={location.pathname === "/history" ? "/" : "/history"}>
            <Icon color={adaptiveColor} IconName={AdaptiveIcon} size={30} />
          </Link>
        </div>
      );
    }
  };
  return (
    <>
      {menuToggle ? (
        <Menu
          currentUser={currentUser}
          linkedUsers={linkedUsers}
          style={{ height: "100%", bottom: "0%" }}
        />
      ) : (
        <Menu />
      )}
      <StyledFooter>
        <Container>
          <AdaptiveLink />
          <Icon
            IconName={GiHamburgerMenu}
            size={30}
            activeColor={menuToggle}
            clicked={clicked}
          />
        </Container>
      </StyledFooter>
    </>
  );
};

export default NavFooter;
