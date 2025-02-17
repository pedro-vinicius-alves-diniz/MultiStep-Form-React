import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function PlanContent({plan, img, price }) {
  const [appState, dispatch] = useContext(AppContext);

  const onClickDiv = () => {
    //ATUALIZANDO O 'PLAN' NO CONTEXTO DA APLICAÇÃO BASEADO NO PLANO CLICADO
    dispatch({
      type: "UPDATE_PLAN",
      payload: plan,
    });

    // ATUALIZANDO O 'SUBTOTAL' E O 'TOTAL' NO CONTEXTO DA APLICAÇÃO DE ACORDO COM O PERIODO ATUAL
    dispatch({type: "UPDATE_SUBTOTAL_total", payload: price})

  }

  return (
    <div 
      className={appState.plan === plan ? 'plan select' : 'plan'} 
      plan={plan} 
      onClick={onClickDiv}
    >
      <img src={img} alt="Icon of Arcade Plan" />
      <div className="plan-info">
        <h4>{plan}</h4>
        <span price="90">${price}/{appState.period.slice(0, 2)}</span>

        {appState.period === "yearly" && (
          <span className="months-free">2 months free</span>
        )}
      </div>
    </div>
  );
}
