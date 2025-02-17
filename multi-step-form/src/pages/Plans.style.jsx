import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import imgAdvanced from "../assets/icon-advanced.png";
import imgArcade from "../assets/icon-arcade.png";
import imgPro from "../assets/icon-advanced.png";


const appState = () => {
  const [appState, dispatch] = useContext(AppContext)

  return appState
}


export const PlanStyled = styled.div`

  max-width: 31.25rem;

  .plan {
    border: 1px solid var(--Light-gray);
    border-radius: 8px;
    display: flex;
    gap: 0.8rem;

    margin-top: 0.5rem;
    padding: 1rem;

    cursor: pointer;

    transition: border-color 0.2s ease;
  }
  .plan:hover {
    border-color: var(--Marine-blue);
  }

  .select {
    border-color: var(--Marine-blue);
    background-color: var(--Magnolia);
  }

  .plan-info h4 {
    color: var(--Marine-blue);
    font-weight: 500;
  }
  .plan-info span {
    color: var(--Cool-gray);
    font-size: 0.9rem;
    display: block;
  }
  .plan-info span:not(:last-child) {
    margin-bottom: 0.2rem;
  }


  .type-plan {
    margin: 0 auto;
    margin-top:1rem;
    display:flex;
    justify-content:center;
  }
  .type-plan label {
    color: var(--Marine-blue);

    font-size: 1.1rem;
    font-weight: 500;

    margin-right: 0.2rem;
  }
  .type-plan select {
    background-color: var(--Light-blue);
    color: var(--Purplish-blue);
    border-color: var(--Strawberry-red);
    border: none;

    border-radius: 8px;

    padding: 0.2rem;
    font-size: 0.9rem;
    font-weight: 700;
    text-align: center;
  }
  .type-plan select:focus {
    outline: none;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    .plan-container {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .plan {
      width: 10rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .plan img {
      width: 3rem;
    }
  }
`;
