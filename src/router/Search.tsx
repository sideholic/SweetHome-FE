import LogoAlarmHeader from "../components/header/LogoAlarmHeader";
import { Category, HeaderSearch, SearchBarDiv } from "../styles/HeaderStyle";
import { CommInner } from "../styles/GlobalStyle";
import SearchBar from "../components/header/SearchBar";
import { SearchCategory, SearchWrapper } from "../styles/SearchStyle";
import SearchResult from "../components/search/SearchResult";

export default function Search() {
  return (
    <SearchWrapper>
      <LogoAlarmHeader />
      {/* 검색바 */}
      <HeaderSearch>
        <CommInner>
          <SearchBarDiv>
            <SearchBar />
            {/* 카테고리 리스트 */}
            <SearchCategory>
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
              </Category>
            </SearchCategory>
          </SearchBarDiv>
        </CommInner>
        {/* 검색결과 */}
        <SearchResult />
      </HeaderSearch>
    </SearchWrapper>
  );
}
