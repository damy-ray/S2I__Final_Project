import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import HeadContent from "./HeadContent";

function App() {
  return (
    <div>
      <HeadContent />
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
