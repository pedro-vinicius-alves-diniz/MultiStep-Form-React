import { Navbar } from "./components/Navbar";
import Add from "./pages/Add";
import Confirmed from "./pages/Confirmed";
import Finish from "./pages/Finish";
import Info from "./pages/Info";
import Plans from "./pages/Plans";
import Buttons from "./components/Buttons";

import { Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

import "./App.css";

function App() {
  let location = useLocation();
  

  return (
    <div className="containerMain">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/add" element={<Add />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/confirmed" element={<Confirmed />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
