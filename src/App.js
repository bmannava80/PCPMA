import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./styles/index.scss";
import { mainRoutes } from "./router";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate(mainRoutes[0].path);
    }
  }, [location.pathname]);
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
