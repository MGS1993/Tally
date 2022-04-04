import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { MdSchedule } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import Icon from "./Icon";
import Menu from "./Menu";
import { Container, StyledFooter } from "./styles/NavFooter.styled";
import { useLocation } from "react-router-dom";
const NavFooter = ({
  currentUser,
  linkedUsers,
  clicked,
  menuToggle,
  schedulerToggle,
  setSchedulerToggle,
}) => {
  //TODO check to see if it's better to use state rather than AdaptiveLink for color
  //path location is used as a variable for AdaptiveLink

  const location = useLocation();

  const AdaptiveLink = () => {
    let AdaptiveIcon;
    if (location.pathname === "/history" || location.pathname === "/scheduler")
      AdaptiveIcon = AiFillHome;
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
        <Icon
          color={adaptiveColor}
          IconName={AdaptiveIcon}
          size={30}
          LinkTo={
            location.pathname === "/history" ||
            location.pathname === "/scheduler"
              ? "/"
              : "/history"
          }
        />
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
          <div onClick={() => setSchedulerToggle(!schedulerToggle)}>
            <Icon
              IconName={MdSchedule}
              size={30}
              activeColor={location.pathname === "/scheduler"}
              LinkTo="/scheduler"
            />
          </div>

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
