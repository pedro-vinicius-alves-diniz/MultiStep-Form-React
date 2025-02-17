import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function AddsContent({name, title, description,price}) {
  const [appState, dispatch] = useContext(AppContext);

  const changeCheckbox = (e) => {
    if(e.target.checked){
      dispatch({type: "UPDATE_CHECKED_ADD_AND_TOTAL", payload: {title: title, price: price, value: true}})
    }else{
      dispatch({type: "UPDATE_UNCHECKED_ADD_AND_TOTAL", payload: {title: title, price: price, value: false}})
    }
  };

  return (
    <div className="add-content">
      <div className="checkbox-custom">
        <input
          type="checkbox"
          name="check-add-ons"
          checked={appState[`add${name}`] || false} 
          className="checkboxs"
          onChange={changeCheckbox}
        />
        {/* <span className={appState[`add${name}`] ? 'check checkboxSelect' : 'check'}></span> */}
        <span className="check checkboxSelect"></span>
      </div>
      <div className="add-texts">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
      <div className="price-add">
        <span className="add-m" price="1">
          +${price}/{appState.period.slice(0, 2)}
        </span>
      </div>
    </div>
  );
}
