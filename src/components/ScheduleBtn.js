import styled from "styled-components";
import Icon from "./Icon";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const StyledScheduleBtn = styled.button`
  align-items: center;
  background-color: #bfe0ff;
  bottom: 0px;
  border: 0px solid white;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  height: 45px;
  justify-self: flex-end;
  margin-bottom: 10px;
  position: absolute;
  width: 45px;
`;

const ScheduleBtn = ({ onClick, color }) => {
  return (
    <StyledScheduleBtn onClick={onClick}>
      <Icon IconName={AiOutlineAppstoreAdd} color={color} size="90%" />
    </StyledScheduleBtn>
  );
};

export default ScheduleBtn;
