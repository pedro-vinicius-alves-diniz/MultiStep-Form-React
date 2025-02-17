import Buttons from "../components/Buttons";
import { AddStyled } from "./Add.style";
import AddsContent from "../components/AddsContent";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Add() {
  const [appState, dispatch] = useContext(AppContext);
  

  return (
    <section className="routes">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <AddStyled>
        <AddsContent 
          name="Service"
          title="Online Service" 
          description="Access to multiplayer games"
          price= {appState.period === "monthly" ? parseInt("1") : parseInt("10")}
        />

        <AddsContent 
          name="Storage"
          title="Larger storage" 
          description="Extra 1TB of cloud save"
          price= {appState.period === "monthly" ? parseInt("2") : parseInt("20")}
        />

        <AddsContent
          name="Profile"
          title="Customizable Profile" 
          description="Custom theme on your profile"
          price= {appState.period === "monthly" ? parseInt("2") : parseInt("20")}
        />
      </AddStyled>

      <Buttons />
    </section>
  );
}
