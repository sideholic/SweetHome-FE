import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import NotFound from "./NotFound";
import Footer from "../components/footer/Footer";
import Search from "./Search";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />}>
          <Route path=":keyword" />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
      {/*<Footer />*/}
    </>
  );
}
