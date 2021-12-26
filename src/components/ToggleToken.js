import React from "react";

import { StyledToggleToken } from "./styles/ToggleToken.styled";

const ToggleToken = ({ clicked, disabled, name, toggled }) => {
  return (
    <StyledToggleToken
      type="button"
      disabled={disabled}
      toggled={toggled}
      onClick={clicked}
    >
      <div>{name}</div>
    </StyledToggleToken>
  );
};

export default ToggleToken;
