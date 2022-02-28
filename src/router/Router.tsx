import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import NotFound from "./NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} /> {/* 404 */}
    </Routes>
  );
}
