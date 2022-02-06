import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";

const StyledButton = styled.button`
  border: 0px solid white;
  border-radius: 11px;
  background-color: transparent;
  height: 100%;
  width: 100%;
  z-index: 5;

  & > :first-child {
    height: 100%;
    width: 100%;
  }
`;

const DeleteButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <MdOutlineDelete color="white" />
    </StyledButton>
  );
};

export default DeleteButton;
