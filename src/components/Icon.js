import React from "react";

import { StyledIconWrapper } from "./styles/MenuIcon.styled";

const Icon = ({ size = "20px", IconName, activeColor, color }) => {
  return (
    <StyledIconWrapper iconSize={size}>
      <IconName
        color={color || activeColor ? "#1976d2" : "black"}
        size={size}
      />
    </StyledIconWrapper>
  );
};

export default Icon;
