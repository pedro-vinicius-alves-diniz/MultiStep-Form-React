import React from "react";
import { ButtonsStyled } from "./Buttons.style";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Buttons() {
  const [appState, dispatch] = useContext(AppContext)
  const location = useLocation();
  const navigate = useNavigate();

  const clickNext = () => {
    if(appState.plan === ""){
      alert("Choose a plan")
    }else{

      switch (location.pathname) {
        case "/":
          navigate("/plans");
          break;
  
        case "/plans":
          navigate("/add");
          break;
  
        case "/add":
          navigate("/finish");
          break;
  
        case "/finish":
          navigate("/confirmed");
          break
  
        default:
          console.log(
            "Erro ao avançar para a próxima página. Tente novamente. Se o erro persistir entre em contato com o nosso suporte."
          );
      }
    }
  };

  const clickBack = () => {
    switch (location.pathname) {
      case "/plans":
        navigate("/");
        break;

      case "/add":
        navigate("/plans");
        break;

      case "/finish":
        navigate("/add");
        break

      default:
        console.log(
          "Erro ao voltar para a página anterior. Tente novamente. Se o erro persistir entre em contato com o nosso suporte."
        );
    }
  };

  return (
    <ButtonsStyled>
      <button className="btnBack" onClick={clickBack}>
        Go Back
      </button>

      <button className="btnNext"   onClick={clickNext}>
        Next
      </button>
    </ButtonsStyled>
  );
}
