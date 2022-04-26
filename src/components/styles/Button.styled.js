import { styled, Button } from "@mui/material";

export const StyledButton = styled(Button)`
  align-self: center;
  color: white;
  font-weight: bold;
`;

export const FormSubmitBtn = styled(StyledButton)`
  padding: 10px;
  width: 90%;

  @media (min-width: 765px) {
    width: 30%;
  }
`;

export const LogoutBtn = styled(StyledButton)`
  height: 35px;
  left: 0px;
  position: absolute;

  & > :first-child {
    height: 100%;
    width: 100%;
  }
`;
