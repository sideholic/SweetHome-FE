import { CommInner } from "../../styles/GlobalStyle";
import {
  Category,
  CategoryGrid,
  HeaderCategory,
  HeaderImg,
  HeaderSearch,
  HeaderTop,
  HeaderWrapper,
  Logo,
  SearchBarDiv,
} from "../../styles/HeaderStyle";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <HeaderWrapper>
      {/* 로고 */}
      <HeaderTop>
        <Logo>SWEET HOME</Logo>
      </HeaderTop>
      {/* 카테고리, 이미지 */}
      <HeaderCategory>
        <CommInner>
          <HeaderImg
            src={require("../../images/HeaderImg.png")}
            alt="HeaderImg"
          />
          <CategoryGrid>
            <div />
            <Category>
              <li>
                <a>#서울</a>
              </li>
              <li>
                <a>#경기</a>
              </li>
              <li>
                <a>#부산</a>
              </li>
              <li>
                <a>#대구</a>
              </li>
              <li>
                <a>#강원</a>
              </li>
              <li>
                <a>#아파트</a>
              </li>
              <li>
                <a>#민간임대</a>
              </li>
              <li>
                <a>#APT</a>
              </li>
              <li>
                <a>#APT</a>
              </li>
              <li>
                <a>#APT</a>
              </li>
              <li>
                <a>#APT</a>
              </li>
            </Category>
          </CategoryGrid>
        </CommInner>
      </HeaderCategory>
      {/* 검색바 */}
      <HeaderSearch>
        <CommInner>
          <SearchBarDiv>
            <SearchBar />
          </SearchBarDiv>
        </CommInner>
      </HeaderSearch>
    </HeaderWrapper>
  );
}
