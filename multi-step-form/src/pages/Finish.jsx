import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { FinishStyled } from "./Finish.style";
import Buttons from "../components/Buttons";

export default function Finish() {
  const [appState, dispatch] = useContext(AppContext);
  console.log(appState);

  return (
    <section className="routes">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <FinishStyled>
        <div className="subtotal">
          <div className="total-plan">
            <div className="total-plan-content">
              <h4 className="total-type">
                <span id="typePlan">{appState.plan}</span> (
                <span className="typePeriod">{appState.period}</span>)
              </h4>
            </div>
            <span id="subtotalCart">${appState.subtotal}/mo</span>
          </div>

          <div id="total-adds">
            {appState.addService && (
              <div id="divService">
                <p>Online service</p>
                {appState.period === "monthly" ? <span>$1/mo</span> : <span>$10/ye</span>}
              </div>
            )}
            {appState.addStorage && (
              <div id="divStorage">
                <p>Larger storage</p>
                {appState.period === "monthly" ? <span>$2/mo</span> : <span>$20/ye</span>}
              </div>
            )}
            {appState.addProfile && (
              <div id="divProfile">
                <p>Customizable Profile</p>
                {appState.period === "monthly" ? <span>$2/mo</span> : <span>$20/ye</span>}
              </div>
            )}
          </div>
        </div>

        <div className="total">
          <span>
            Total
          </span>
          <span id="totalCart">${appState.total}/{appState.period.slice(0, 2)}</span>
        </div>
      </FinishStyled>
      
      <Buttons/>
    </section>
  );
}
