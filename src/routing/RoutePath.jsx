import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home.page";
import VeganPage from "../pages/Vegan.page";
import MeatEaterPage from "../pages/MeatEater.page";
import DetailPage from "../pages/Detail.page";
import FallbackRoutesPage from "../pages/FallbackRoutes.page";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vegan" element={<VeganPage />} />
      <Route path="/meat-eater" element={<MeatEaterPage />} />
      <Route path="/recipes/:name" element={<DetailPage />} />

      {/* FallbackRoutesPage */}
      <Route path="*" element={<FallbackRoutesPage />} />
    </Routes>
  );
};

export default RoutePath;
