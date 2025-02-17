import { NavbarStyled } from "./Navbar.style";
import { useLocation } from "react-router-dom";


export const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarStyled>
      <div id="steps-container">
        <div className="step" id="step-1">
          <span className={location.pathname === "/" ? 'radio active' : 'radio'} id="radio1"> 1 </span>
          <div className="aside-texts">
            <span>Step 1</span>
            <p>Your info</p>
          </div>
        </div>
        <div className="step" id="step-2">
          <span className={location.pathname === "/plans" ? 'radio active' : 'radio'} id="radio2"> 2 </span>
          <div className="aside-texts">
            <span>Step 2</span>
            <p>Select plan</p>
          </div>
        </div>
        <div className="step" id="step-3">
          <span className={location.pathname === "/add" ? 'radio active' : 'radio'} id="radio3"> 3 </span>
          <div className="aside-texts">
            <span>Step 3</span>
            <p>Add-ons</p>
          </div>
        </div>
        <div className="step" id="step-4">
          <span className={location.pathname === "/finish" ? 'radio active' : 'radio'} id="radio4"> 4 </span>
          <div className="aside-texts">
            <span>Step 4</span>
            <p>Summary</p>
          </div>
        </div>
      </div>
    </NavbarStyled>
    
  );
};
