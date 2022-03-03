import Header from "../components/header/Header";
import CurationList from "../components/main/CurationList";
import DeadLineList from "../components/main/DeadLineList";

export default function Home() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 청약 큐레이션 */}
      <CurationList />
      {/* 마감 임박 */}
      <DeadLineList />
    </>
  );
}
