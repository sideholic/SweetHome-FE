import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface IBoxWrapper {
  paddingSize?: string;
}

/* Wrapper */
export const LayoutWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99;
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
  position: relative;
  ${CommLayout};
  font-size: 38px;
  font-weight: 200;
  color: #fff;
  margin-top: 8px;
  z-index: 99;
  &.show {
    transform: rotateZ(360deg);
    &:after {
      content: "";
      position: absolute;
      opacity: 0;
      left: 50%;
      top: 50%;
      width: 2px;
      height: 16px;
      margin-top: -8px;
      margin-left: -1px;
      background-color: #fff;
      transition: opacity 0.6s ease-in-out;
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 16px;
    margin-top: -8px;
    margin-left: -1px;
    background-color: #fff;
    transform: rotate(-90deg);
    transition: opacity 0.6s ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    opacity: 1;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 16px;
    margin-top: -8px;
    margin-left: -1px;
    background-color: #fff;
    transition: opacity 0.6s ease-in-out;
  }
  transition: all 0.6s ease-in-out;
`;
export const LayoutSpread = styled.ul`
  z-index: 98;
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
export const LayoutList = styled(motion.li)`
  ${CommLayout};
  color: #fff;
  margin-top: 8px;
`;
/* 레이어 팝업 뒷배경 */
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 998;
`;
/* 큐레이션 생성 팝업 */
export const CurationCreatePop = styled(motion.div)`
  position: absolute;
  width: 50vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
  overflow-y: auto;
  z-index: 999;

  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: darkgray;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;
/* checkbox wrapper */
export const CurationCheckBoxWrapper = styled.div<IBoxWrapper>`
  display: inline-block;
  position: relative;
  padding: ${(props) => props.paddingSize ?? "1.25rem"};
  border-radius: 0.4rem;
  margin: 0.5rem;
  background-color: #f2f2f2;
  transition: all 0.2s;
  &.checked {
    font-weight: bold;
    background-color: ${(props) => props.theme.greenColor.green3};
  }
  label {
    span {
      display: block;
      text-align: center;
      &:nth-of-type(1) {
        width: 100%;
      }
      &:nth-of-type(2) {
        margin-top: 10px;
        width: 100%;
      }
    }
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  }
`;
/* 체크박스 */
export const CurationCheckBox = styled.input`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
/* 카테고리 */
export const CCCategoryTitle = styled.span`
  display: block;
  width: 100%;
  font-size: 1.5rem;
  margin: 0.417em 0.333em;
`;
/* 큐레이션 생성 > 헤더 프로그레스 */
export const CCProgress = styled.div`
  height: 8rem;
  text-align: center;

  h2 {
    font-size: 1.875rem;
    font-weight: bold;
    padding-top: 1em;
  }

  h3 {
    font-size: 1rem;
    padding-top: 1em;
    color: #656565;
  }
`;
/* 큐레이션 생성 > inner */
export const CCInner = styled.div`
  padding: 1.875rem;
`;
export const ConfirmWrapper = styled.div`
  padding: 4.2rem 2.2rem;
  text-align: center;
`;
/* 완료버튼 */
export const ConfirmBtn = styled.button`
  padding: 1.5rem 6rem;
  border: none;
  border-radius: 0.4rem;
  color: #fff;
  font-size: 18px;
  margin: 0.5rem;
  background-color: ${(props) => props.theme.greenColor.green3};
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  }
`;
