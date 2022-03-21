import { styled, Button } from "@mui/material";

export const StyledButton = styled(Button)`
  align-self: center;
  color: white;
  font-weight: bold;
  /* padding: 0px; */
  /* width: 90%; */
`;

export const FormSubmitBtn = styled(StyledButton)`
  padding: 10px;
  width: 90%;
`;

export const LogoutBtn = styled(StyledButton)`
  height: 35px;
  left: 0;
  position: absolute;

  & > :first-child {
    height: 100%;
    width: 100%;
  }
`;
