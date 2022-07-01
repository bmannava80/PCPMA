import React from "react";

import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
