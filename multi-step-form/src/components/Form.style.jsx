import styled from "styled-components";

export const FormStyled = styled.form`
  margin-top: 2rem;
  max-width: 31.25rem;

  .form-content {
    margin-top: 1rem;
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    gap: 0.3rem;
  }
  .form-content label {
    color: var(--Marine-blue);
    font-size: 0.8rem;
    font-weight: 400;
  }
  .form-content input {
    padding: 0.6rem;
    border-radius: 6px;
    border: 1px solid var(--Cool-gray);
    color: var(--Marine-blue);
    font-weight: 500;
  }
  .form-content input:focus {
    outline: 1px solid var(--Marine-blue);
  }

  .labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .labels span {
    color: var(--Strawberry-red);
    font-size: 0.8rem;
    font-weight: 700;
  }

  .btnNext {
    display: block;
    margin-left: auto;
    margin-top: 1rem;
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
`;
