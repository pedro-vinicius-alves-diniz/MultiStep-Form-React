import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./Global.style";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppProvider.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);
