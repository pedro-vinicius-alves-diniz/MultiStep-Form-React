import styled from "styled-components";

export const ConfirmedStyled = styled.section`
  text-align: center;
  padding: 5rem 0;

  img {
    margin: 0 auto;
  }

  .confirmed-texts p {
    text-align: center;
  }
  .confirmed-texts p:first-child {
    margin-bottom: 0.2rem;
  }

  @media (min-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:1rem;
    img {
      width: 4rem;
    }
  }
`;
