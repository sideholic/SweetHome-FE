import React from "react";

/* 브라우저 우측 하단 펼치기 버튼 클릭시 */
export const layoutBtnClick = (event: React.MouseEvent<HTMLDivElement>) => {
  const ulSpread = document.querySelector(".spread");
  ulSpread?.classList.remove("active");
  ulSpread?.classList.toggle("show");

  event.currentTarget.classList.toggle("show");

  const timerAddClass = setTimeout(() => {
    ulSpread?.classList.add("active");
  }, 700);

  if (!ulSpread?.classList.contains("show")) {
    clearTimeout(timerAddClass);
  }
};
