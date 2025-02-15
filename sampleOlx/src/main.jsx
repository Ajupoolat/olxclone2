import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoadingProvider } from "./contextAPI/Loadingcontext.jsx";
import { AddproductProvider } from "./contextAPI/Addproductcontext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <AddproductProvider >
        <LoadingProvider >
        <App />
        </LoadingProvider>
        
      </AddproductProvider>
    
  </StrictMode>
);
