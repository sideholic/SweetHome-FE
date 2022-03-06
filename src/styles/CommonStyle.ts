import styled from "styled-components";

/* 더보기 버튼 */
export const CommonMoreBtn = styled.span`
  display: block;
  position: absolute;
  right: 0;
  bottom: 1.25rem;
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
