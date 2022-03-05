import styled from "styled-components";

/* 더보기 버튼 */
export const CommonMoreBtn = styled.span`
  display: block;
  position: absolute;
  right: 0;
  bottom: 0.625rem;
  color: ${(props) => props.theme.greenColor.green4};
  &:after {
    content: " >";
  }
`;
/* 공통 제목 div */
export const CommonTitleDiv = styled.div`
  height: 8.875rem;
`;
/* 공통 제목 */
export const CommonTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.8rem;
  font-weight: bold;

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme.greenColor.green4};
  }
`;
/* 화면 우측 하단 bell 버튼 */
export const AlarmDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${(props) => props.theme.greenColor.green4};
  width: 70px;
  height: 70px;
  bottom: 50px;
  right: 50px;
  border-radius: 50px;
  cursor: pointer;
  z-index: 999;

  img {
    width: 45%;
    height: 50%;
  }
`;
