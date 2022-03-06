import {
  AlarmDiv,
  LayoutList,
  LayoutSpread,
  LayoutWrapper,
  SpreadBtn,
} from "../styles/LayoutStyle";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  /* 펼치기 버튼 토글 */
  const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const ulSpread = document.querySelector(".spread");
    ulSpread?.classList.remove("active");
    ulSpread?.classList.toggle("show");

    const timerAddClass = setTimeout(() => {
      ulSpread?.classList.add("active");
    }, 700);

    if (!ulSpread?.classList.contains("show")) {
      clearTimeout(timerAddClass);
    }
  }, []);

  return (
    <LayoutWrapper>
      {/* 큐레이션 */}
      <LayoutSpread className="spread">
        <LayoutList>1</LayoutList>
        <LayoutList>2</LayoutList>
        <LayoutList>
          {/* 알람버튼 link 임시 */}
          <Link to="/search">
            <AlarmDiv>
              <img src={require("../images/bell-white.png")} alt="AlarmBell" />
            </AlarmDiv>
          </Link>
        </LayoutList>
      </LayoutSpread>
      {/* 펼치기 */}
      <SpreadBtn onClick={onClick}>+</SpreadBtn>
    </LayoutWrapper>
  );
}
