import { useEffect, useContext } from "react";
import { PlanStyled } from "./Plans.style";
import { AppContext } from "../context/AppContext";
import Buttons from "../components/Buttons";
import PlanContent from "../components/PlanContent";

import imgAdvanced from "../assets/icon-advanced.png";
import imgArcade from "../assets/icon-arcade.png";
import imgPro from "../assets/icon-advanced.png";

const plans = document.getElementsByClassName("plan");
const selectionPeriod = document.getElementById("selectPlanType");

export default function Plans() {
  const [appState, dispatch] = useContext(AppContext);

  const changeSelection = (e) => {
    Array.from(plans).forEach((plan) => {
      // REMOVENDO A ESTILIZAÇÃO DA DIV PLAN ATUALMENTE SELECIONADA
      plan.classList.remove("select");
    });
    dispatch({ type: "RESTART" }); // ATUALIZADO OS DADOS DO CONTEXTO DA APLICAÇÃO PARA OS VALORES INICIAIS
    dispatch({ type: "UPDATE_PERIOD", payload: e.target.value }); // ATUALIZANDO O 'PERIODO' NO CONTEXTO DA APLICAÇÃO
  };

  return (
    <section className="routes">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <PlanStyled>
        <div className="plan-container">
          <PlanContent
            plan="Arcade"
            price= {appState.period === "monthly" ? parseInt("9") : parseInt("90")}
            img={imgArcade}
          />
          <PlanContent
            plan="Advanced"
            price= {appState.period === "monthly" ? parseInt("12") : parseInt("120")}
            img={imgAdvanced}
          />
          <PlanContent
            plan="Pro"
            price= {appState.period === "monthly" ? parseInt("15") : parseInt("150")}
            img={imgPro}
          />
        </div>

        <div className="type-plan">
          <label>Select plan type:</label>
          <select
            name="select-type-plan"
            id="selectPlanType"
            onChange={changeSelection}
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </PlanStyled>

      <Buttons />
    </section>
  );
}
