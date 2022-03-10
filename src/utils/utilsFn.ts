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
/**
 * 대한민국 행정구역 리스트
 * ###return : String[]
 **/
export const getKoreaAdminDivision = (): Array<string> => {
  return [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];
};
// 레이어 팝업시 스크롤을 막기 위함
export const preventScrolling = () => {
  const body = document.querySelector("body");
  body?.classList.add("prevent");
};
// 레이어 팝업 종료시 스크롤 재개
export const setScrolling = () => {
  const body = document.querySelector("body");
  body?.classList.remove("prevent");
};
