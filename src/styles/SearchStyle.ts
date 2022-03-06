import styled from "styled-components";

interface ISearchRInfo {
  fontSize?: string;
  fontWeight?: string;
}
/* 카테고리 영역 */
export const SearchCategory = styled.div`
  width: 100%;
  margin-top: 1.25rem;
  display: grid;
  align-items: center;
  text-align: center;
`;
/* 검색결과 */
export const SearchResultCnt = styled.span`
  width: 100%;
  font-size: 1.3rem;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5em 0 1.5em;

  span {
    color: ${(props) => props.theme.greenColor.green5};
    margin-left: 0.25em;
  }
`;
/* 메뉴바 */
export const SearchResultMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.05rem;
  height: 4em;
  background-color: #f2f2f2;
  position: relative;
  cursor: pointer;
  border: 1px solid lightgray;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-left: 1px solid lightgray;
    &:first-child {
      border-left: none;
    }
    &:last-child {
      border-right: none;
    }
  }
`;
/* 검색결과 카드 리스트 */
export const SearchResultList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 45px;
`;
/* 검색결과 카드 */
export const SearchResultCard = styled.div`
  width: 330px; // 고정
  background-color: #f2f2f2;
  border-radius: 0.4rem;

  &:nth-of-type(1),
  &:nth-of-type(2),
  &:nth-of-type(3) {
    margin-top: 45px;
  }

  img {
    display: block;
    width: 100%;
    height: 12.5rem;
    border-radius: 0.4rem 0.4rem 0 0;
  }
`;
/* 검색결과 카드내용 Wrapper */
export const CardTextWrapper = styled.div`
  padding: 0.938rem;
`;
/* 카드내용 Wrapper */
export const CardTextInnerWrapper = styled.div`
  &:first-child {
    border-bottom: 1px solid lightgray;
  }
`;
/* 검색결과 카드내용(아파트이름, 청약기간, 상세주소) */
export const CardText = styled.p<ISearchRInfo>`
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  font-size: ${(props) => props.fontSize ?? "0.813rem"};
  width: 100%;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0.75rem;
  }
`;
/* 검색결과 카드내용(분양세대, 분양면적, 분양가격) */
export const CardText2 = styled.p`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  font-weight: bold;

  span {
    margin-left: 0.714em;
    font-weight: normal;
  }
`;
