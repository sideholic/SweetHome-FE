import styled from "styled-components";

/* header Wrapper */
export const HeaderWrapper = styled.header`
  height: 35.625rem;
`;
/* header 최상단 로고, 알람 div 영역 */
export const HeaderTop = styled.div`
  display: flex;
  width: 1080px;
  margin: 0 auto;
  height: 5rem;
  align-items: center;
  justify-content: center;
`;
/* header 로고 */
export const Logo = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.greenColor.green4};
`;
/* 메인페이지 header 카테고리 해시태그 div 영역 */
export const HeaderCategory = styled.div`
  height: 15rem;
`;
/* 카테고리 영역 */
export const CategoryGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;
`;
/* 카테고리 리스트 */
export const Category = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    margin: 0.333em;
    padding-right: 0.133em;
    font-size: 0.938rem;

    a {
      display: block;
      padding: 0.533em 0.867em;
      color: ${(props) => props.theme.greenColor.green5};
      border: 1px solid ${(props) => props.theme.greenColor.green5};
      border-radius: 2.267em;
    }
  }
`;
/* 메인페이지 그림 */
export const HeaderImg = styled.img`
  position: absolute;
  top: -1.333rem;
  left: 0;
  height: 21.875rem;
  width: 31.25rem;
`;
/* 메인페이지 header 검색바 */
export const HeaderSearch = styled.div`
  height: calc(570px - 5rem - 15rem);
  background-color: ${(props) => props.theme.greenColor.green3};
`;
/* 검색창 */
export const SearchBarDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;
/* ON/OFF 설명 DIV */
export const ExplainDiv = styled.div`
  position: relative;
  width: 36rem;
  height: 3.75rem;
`;
export const ExplainInnerDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 0.313rem;
`;
/* 툴팁 */
export const ToolTipExplain = styled.span`
  cursor: pointer;
`;
/* 토글 버튼 */
export const ToggleCheckBoxWrapper = styled.div`
  margin-top: 0.438rem;
  position: relative;
`;
export const ToggleCheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 2.625rem;
  height: 1.625rem;
  border-radius: 0.938rem;
  background: gray;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 1.125rem;
    height: 1.125rem;
    margin: 0.188rem;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const ToggleCheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 0.938rem;
  width: 2.625rem;
  height: 1.625rem;
  &:checked + ${ToggleCheckBoxLabel} {
    background: ${(props) => props.theme.greenColor.green4};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 1.125rem;
      height: 1.125rem;
      margin-left: 1.313rem;
      transition: 0.2s;
    }
  }
`;
/* 검색창 */
export const SearchInput = styled.input`
  font-size: 1.25rem;
  width: 27.5em;
  height: 2.1em;
  padding: 1em;
  border: 0;
  outline: 0;
  border-bottom: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;
/* 검색 버튼 */
export const SearchBtn = styled.span`
  display: block;
  padding-top: 0.625rem;
  border-bottom: 2px solid #fff;
  width: 1.625rem;
  height: 2.625rem;
`;
