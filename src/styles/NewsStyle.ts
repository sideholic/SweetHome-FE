import styled from "styled-components";

/* Wrapper */
export const NewsWrapper = styled.div`
  height: 40.938rem;
`;
/* Wrapper */
export const NewsInner = styled.div`
  height: 26.563rem;
`;
/* 뉴스 grid Wrapper */
export const NewsGrid = styled.div`
  display: grid;
  grid-gap: 3rem;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    transform: rotateY(180deg);
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
