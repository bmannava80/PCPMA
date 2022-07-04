import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { mainRoutes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {mainRoutes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
