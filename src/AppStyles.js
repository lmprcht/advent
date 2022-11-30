import styled from "styled-components";

export const StyledApp = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 0 40px 120px;
  
  @media screen and (max-width: 480px) {
    padding: 5%;
    grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
  }
`;