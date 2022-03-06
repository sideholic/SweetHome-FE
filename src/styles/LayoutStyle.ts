import styled, { css } from "styled-components";

/* Wrapper */
export const LayoutWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 50px;
  right: 50px;
`;
/* 우측하단 버튼 공통 */
const CommLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.greenColor.green4};
  width: 52px;
  height: 52px;
  cursor: pointer;
  border-radius: 50px;
`;
/* 화면 우측 하단 알람버튼 */
export const AlarmDiv = styled.div`
  ${CommLayout};
  img {
    width: 45%;
    height: 50%;
  }
`;
/* 화면 우측 하단 + 펼치기 버튼 */
export const SpreadBtn = styled.div`
  ${CommLayout};
  font-size: 38px;
  font-weight: 200;
  color: #fff;
  margin-top: 8px;
  z-index: 999;
`;
export const LayoutSpread = styled.ul`
  z-index: 998;
  overflow: hidden;
  height: 0;
  opacity: 0;

  &.show {
    height: 180px;
    opacity: 1;
  }
  &.active {
    overflow: visible;
  }
  transition-property: height, opacity;
  transition: 0.6s ease-in-out;
`;
/* 화면 우측 하단 큐레이션 버튼 */
export const LayoutList = styled.li`
  ${CommLayout};
  color: #fff;
  margin-top: 8px;
`;
