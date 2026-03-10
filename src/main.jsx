import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MailProvider } from "./context/MailContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MailProvider>
      <App />
    </MailProvider>
  </StrictMode>,
);
