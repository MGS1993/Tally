import styled from "styled-components";

export const StyledCard = styled.div`
  align-items: center;
  background-color: #fff;
  border: 2px solid ${({ borderColor }) => borderColor || "#c9c9c9c9"};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0px;
  width: 85vw;
`;

export const MinimizedContainer = styled.div`
  padding: 20px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
`;

export const ExpandableContainer = styled(MinimizedContainer)`
  height: ${({ expanded }) => (expanded ? "35px" : "0px")};
  opacity: ${({ expanded }) => (expanded ? "1" : "0")};
  padding: ${({ expanded }) => (expanded ? "20px 20px 10px 20px" : "0px")};
  transition: all 0.3s ease;
`;

export const ExpandBtn = styled.div`
  padding: 5px 25px;
  transition: all 0.3s ease;
  transform: ${({ expanded }) =>
    expanded ? "rotate(180deg)" : "rotate(0deg)"};
`;
