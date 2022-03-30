import React from "react";
import { Link } from "react-router-dom";
import { StyledIconWrapper } from "./styles/MenuIcon.styled";

const Icon = ({
  size = "20px",
  IconName,
  activeColor,
  color,
  clicked,
  LinkTo,
}) => {
  if (LinkTo === undefined) {
    return (
      <StyledIconWrapper iconSize={size} tempColor onClick={clicked}>
        <IconName
          color={color || activeColor ? "#1976d2" : "black"}
          size={size}
        />
      </StyledIconWrapper>
    );
  } else {
    return (
      <Link to={LinkTo}>
        <StyledIconWrapper iconSize={size} tempColor onClick={clicked}>
          <IconName
            color={color || activeColor ? "#1976d2" : "black"}
            size={size}
          />
        </StyledIconWrapper>
      </Link>
    );
  }
};

export default Icon;
