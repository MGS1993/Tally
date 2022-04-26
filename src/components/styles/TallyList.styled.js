import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  overflow: scroll;
  padding-bottom: 7vh;
  width: 88%;

  @media (min-width: 768px) {
    width: 50%;
    scrollbar-width: none; // firefox
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
`;
