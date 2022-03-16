import styled from "styled-components";

const MobileAlert = styled.div`
  //only displays if not on mobile
  display: none;
  @media (min-width: 768px) {
    display: flex;
    padding: 10px 10px 30px 10px;

    p {
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export default MobileAlert;
