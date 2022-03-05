import CurationList from "../components/main/CurationList";
import DeadLineList from "../components/main/DeadLineList";
import LocationList from "../components/main/LocationList";
import NewsList from "../components/main/NewsList";
import Header from "../components/header/Header";
import React from "react";

export default function Home() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 청약 큐레이션 */}
      <CurationList />
      {/* 마감 임박 */}
      <DeadLineList />
      {/* 내 위치 근처 */}
      <LocationList />
      {/* 뉴스 */}
      <NewsList />
    </>
  );
}
