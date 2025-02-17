import styled from "styled-components";

export const FinishStyled = styled.div`
    margin-top:2rem;

  .subtotal {
    background-color: var(--Magnolia);
    padding: 1rem;
    border-radius: 8px;
  }

  .total-plan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--Light-gray);
  }
  .total-plan span {
    color: var(--Marine-blue);
    font-weight: 500;
  }

  .total-plan .total-plan-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  .total-plan .total-plan-content h4 {
    color: var(--Marine-blue);
    font-weight: 500;
  }
  .total-plan .total-plan-content a {
    color: var(--Cool-gray);
    font-size: 0.9rem;
  }

  #total-adds {
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  #total-adds div {
    display: flex;
    justify-content: space-between;
  }
  #total-adds div p {
    font-size: 0.9rem;
  }
  #total-adds div span {
    color: var(--Marine-blue);
    font-weight: 400;
    font-size: 0.9rem;
  }

  .total {
    margin-top:1rem;
    display: flex;
    justify-content: space-between;
  }
  .total span:first-child {
    color: var(--Cool-gray);
    font-size: 0.9rem;
    font-weight: 700;
  }
  .total span {
    color: var(--Purplish-blue);
    font-weight: 700;
  }
`;
