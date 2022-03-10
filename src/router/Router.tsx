import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import NotFound from "./NotFound";
import Search from "./Search";
import Detail from "./Detail";
import MyCurationList from "../components/curation/MyCurationList";
import CurationCreate from "../components/curation/CurationCreate";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/curation/create" element={<CurationCreate />} />
          <Route path="/curation/list" element={<MyCurationList />} />
        </Route>
        <Route path="search" element={<Search />}>
          <Route path=":keyword" />
        </Route>
        <Route path="detail" element={<Detail />}>
          <Route path=":id" />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
    </>
  );
}
