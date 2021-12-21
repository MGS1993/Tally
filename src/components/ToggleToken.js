import React, { useState } from "react";

import { StyledToggleToken } from "./styles/ToggleToken.styled";

const ToggleToken = ({ clicked, name, toggled }) => {
  return (
    <StyledToggleToken toggled={toggled} onClick={clicked}>
      <div>{name}</div>
    </StyledToggleToken>
  );
};

export default ToggleToken;
