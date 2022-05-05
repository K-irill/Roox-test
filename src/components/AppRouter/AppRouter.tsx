import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import { publicRoutes } from "./router";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}
      <Route path="*" element={<Home />} />;
    </Routes>
  );
};

export default AppRouter;
