import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  //  <StrictMode>
  <AuthProvider>
      <BrowserRouter>
      <ToastContainer />
        <App />
      </BrowserRouter>
    </AuthProvider>,
  {/* // </StrictMode>, */}
);
