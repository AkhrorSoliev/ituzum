import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

import { GlobalContextProvider } from "./context/globalContext.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <Toaster />
  </GlobalContextProvider>
);
