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

/**
 * 현재일자 가져오기
 * ###returnType : String[]
 * ###return : [0] = x월 y일 [1] = 요일
 **/
export const getCurrentTime = (): Array<string> => {
  const now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[now.getDay()];

  return [
    `${Number(now.getMonth()) + 1}월 ${String(now.getDate()).padStart(
      2,
      "0"
    )}일`,
    `${dayOfWeek}요일`,
  ];
};
