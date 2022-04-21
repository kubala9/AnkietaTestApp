import React from "react";
import { Summary } from "./Summary/SummaryPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Creator } from "./Creator/CreatorPage";
import { RulesProvider } from "../_context/rulesContext";

export const MainPage = () => {

  return (
    <RulesProvider>
      <Router>
        <AppRoutes />
      </Router>
    </RulesProvider>
  );
};

function AppRoutes() {
  return (
    <Routes >
      <Route path="/summary" element={<Summary />} />
      <Route path="/creator" element={<Creator />} />
      <Route path="*" element={<Summary />} />
    </Routes >
  );
}