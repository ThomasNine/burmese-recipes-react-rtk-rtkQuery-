import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/Home.page";
import VeganPage from "../pages/Vegan.page";
import MeatEaterPage from "../pages/MeatEater.page";
import DetailPage from "../pages/Detail.page";
import FallbackRoutesPage from "../pages/FallbackRoutes.page";
import SearchPage from "../pages/Search.Page";
import { AnimatePresence } from "framer-motion";

const RoutePath = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-recipes/page/:page" element={<HomePage />} />
        <Route path="/meat-eater/page/:page" element={<MeatEaterPage />} />
        <Route path="/vegan/page/:page" element={<VeganPage />} />
        <Route path="/recipes/:id" element={<DetailPage />} />
        <Route path="/search/page/:page" element={<SearchPage />} />

        {/* FallbackRoutesPage */}
        <Route path="*" element={<FallbackRoutesPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutePath;
