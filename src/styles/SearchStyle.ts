import styled from "styled-components";

export const SearchWrapper = styled.div``;

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
  font-size: 1.25rem;
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
  font-size: 1.2rem;
  height: 4em;
  background-color: #f2f2f2;
  position: relative;
  cursor: pointer;

  li {
    display: table-cell;
    text-align: center;
    vertical-align: middle;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #000;
      z-index: 2;
    }
  }
`;
