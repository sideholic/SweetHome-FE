import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import NotFound from "./NotFound";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
      <Footer />
    </>
  );
}
