import styled from "styled-components";

/* Wrapper */
export const NewsWrapper = styled.div`
  height: 37.5rem;
`;
/* Wrapper */
export const NewsInner = styled.div`
  height: 28.625rem;
`;
/* 뉴스 grid Wrapper */
export const NewsGrid = styled.div`
  display: grid;
  grid-gap: 3rem;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);

  .newsImgDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    overflow: hidden;
  }
`;
/* 뉴스 제목 리스트 */
export const NewsTitleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;
/* 뉴스 제목 */
export const NewsTitle = styled.p`
  display: block;
  width: 100%;
  margin: 10px 0;
  line-height: 1.2;
`;
