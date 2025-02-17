import styled from "styled-components";

import bgMobile from "../assets/bg-sidebar-mobile.png";
import bgDesktop from "../assets/bg-sidebar-desktop.png";

export const NavbarStyled = styled.div`
  width: 100%;
  height: 11rem;

  background-image: url(${bgMobile});
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  object-fit: cover;

  #steps-container {
    display: flex;
    justify-content: center;
    gap: 2rem;

    padding-top: 1rem;
  }

  .aside-texts {
    display: none;
  }

  .radio {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--White);
    border-radius: 50%;
    background-color: var(--);

    color: var(--White);
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: none;

    transition: 0.3s;
  }

  .active {
    border: none;
    background-color: var(--Light-blue);
    color: var(--Marine-blue);
  }

  @media (min-width: 768px) {
    height: 100%;
    max-width: 25rem;
    background-image: url(${bgDesktop});
    border-radius: 8px;

    #steps-container {
      flex-direction: column;
      padding: 2rem 0 0 2rem;
    }

    .step {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .aside-texts {
      display: block;
      text-transform: uppercase;
      font-size: 0.9rem;
    }
    .aside-texts span {
      color: var(--Cool-gray);
    }
    .aside-texts p {
      color: var(--Alabaster);
      font-weight: 500;
    }
  }
`;
