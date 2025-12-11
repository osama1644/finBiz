import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.tsx";
import ThemeContextProvider from "./context/ThemeContextProvider.tsx";
import ReactQueryWrapper from "./ProductsQueryProvider/ReactQueryWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <ReactQueryWrapper>
        <App />
      </ReactQueryWrapper>
    </ThemeContextProvider>
  </StrictMode>
);
