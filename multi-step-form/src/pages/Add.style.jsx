import styled from "styled-components";

export const AddStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;

  .add-content {
    display: flex;
    align-items: center;
    gap: 1rem;

    border: 1px solid var(--Cool-gray);
    border-radius: 8px;
    padding: 1rem;
  }
  .add-content:hover {
    border: 1px solid var(--Purplish-blue);
  }

  .add-content .checkbox-custom {
    position: relative;
  }

  .add-content .checkbox-custom input {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  .add-content .checkbox-custom .check {
    width: 1rem;
    height: 1rem;
    background-color: var(--White);
    border: 1px solid var(--Cool-gray);
    border-radius: 6px;
    cursor: pointer;
    padding: 0.1rem 0.6rem;

    transition: border 0.1s ease-in-out;
  }

  .add-content .checkbox-custom input:checked + .check {
    border: none;
    outline: none;
    background-color: var(--Purplish-blue);
  }
  .add-content:has(input[type="checkbox"]:checked) {
    border: 1px solid var(--Purplish-blue);
    background-color: var(--Magnolia);
  }

  /* .addContentSelect {
    border: 1px solid var(--Purplish-blue);
    background-color: var(--Magnolia);
  }
  .checkboxSelect{
    border: none;
    outline: none;
    background-color: var(--Purplish-blue);
  } */

  .add-content .price-add {
    margin-left: auto;
    color: var(--Purplish-blue);

    font-weight: 400;
    font-size: 0.9rem;
  }

  .add-content .price-add span {
    display: block;
  }

  .add-texts h4 {
    color: var(--Marine-blue);
  }
  .add-texts span {
    color: var(--Cool-gray);
    font-size: 0.9rem;
  }
`;
