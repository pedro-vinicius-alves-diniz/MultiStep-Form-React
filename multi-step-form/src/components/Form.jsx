import { FormStyled } from "./Form.style";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Form() {
  const [appState, dispatch] = useContext(AppContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    switch (e.target.type) {
      case "text": // CASO O VALOR MUDADO SEJA O INPUT 'NAME', ATUALIZA O VALOR 'NAME' PRESENTE NO CONTEXTO DA APLICAÇÃO
        setName(e.target.value);
        dispatch({ type: "UPDATE_NAME", payload: e.target.value });
        break;

      case "email": // CASO O VALOR MUDADO SEJA O INPUT 'EMAIL', ATUALIZA O VALOR 'EMAIL' PRESENTE NO CONTEXTO DA APLICAÇÃO
        dispatch({ type: "UPDATE_EMAIL", payload: e.target.value });
        break;

      case "tel": // CASO O VALOR MUDADO SEJA O INPUT 'PHONE', ATUALIZA O VALOR 'PHONE' PRESENTE NO CONTEXTO DA APLICAÇÃO
        dispatch({ type: "UPDATE_PHONE", payload: e.target.value });
        break;

      default: // CASO ALGO DER ERRADO!
        console.log("Qualcosa è andato storto.");
    }
  };

  return (
    <FormStyled
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/plans");
      }}
    >
      <div className="form-content">
        <div className="labels">
          <label htmlFor="name">Name</label>
          {name === "" && ( //SE O INPUT TYPE "TEXT" ESTIVER VÁZIO, RENDERIZA NA PÁGINA O ALERTA DE 'REQUIRED'
            <span className="alertInput">This Field is required</span>
          )}
        </div>
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          onChange={(e) => {
            onChangeInput(e);
          }}
          required
        />
      </div>
      <div className="form-content">
        <div className="labels">
          <label htmlFor="name">Email Address</label>
          {appState.email === "" && ( //SE O INPUT TYPE "EMAIL" ESTIVER VÁZIO, RENDERIZA NA PÁGINA O ALERTA DE 'REQUIRED'
            <span className="alertInput">This Field is required</span>
          )}
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => {
            onChangeInput(e);
          }}
          required
        />
      </div>
      <div className="form-content">
        <div className="labels">
          <label htmlFor="name">Phone Number</label>
          {appState.phone === "" && ( //SE O INPUT TYPE "TEL" ESTIVER VÁZIO, RENDERIZA NA PÁGINA O ALERTA DE 'REQUIRED'
            <span className="alertInput">This Field is required</span>
          )}
        </div>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => {
            onChangeInput(e);
          }}
          required
        />
      </div>

      <button className="btnNext">Next</button>
    </FormStyled>
  );
}
