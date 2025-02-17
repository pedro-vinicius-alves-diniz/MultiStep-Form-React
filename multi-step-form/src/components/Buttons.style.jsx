import styled from "styled-components";


export const ButtonsStyled = styled.div`
    display:flex;
    align-items:center;
    margin-top:1rem;
    width: 100%;

  .btnNext {
    display: block;
    margin-left: auto;
    padding: 0.6rem;

    background-color: var(--Marine-blue);
    border: none;
    border-radius: 8px;

    color: var(--White);
    font-size: 0.8rem;

    cursor: pointer;

    transition: background-color 0.2s ease;
  }
  .btnNext:hover {
    background-color: var(--Purplish-blue);
  }

  .btnBack {
    cursor: pointer;

    border: none;

    background-color: transparent;
    color: var(--Cool-gray);

    font-size: 0.8rem;
    font-weight: 500;

    transition: color 0.1s ease-in-out;
  }
  .btnBack:hover {
    color: var(--Marine-blue);
  }
`;
