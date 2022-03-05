import { CommInner } from "../../styles/GlobalStyle";
import { SearchResultCnt, SearchResultMenu } from "../../styles/SearchStyle";

export default function SearchResult() {
  return (
    <CommInner>
      <SearchResultCnt>
        <span>"민간분양"</span>에 대한 검색결과는 총<span>2152</span>건 입니다.
      </SearchResultCnt>
      <SearchResultMenu>
        <li>오늘청약</li>
        <li>예정</li>
        <li>모집중</li>
        <li>무순위</li>
      </SearchResultMenu>
    </CommInner>
  );
}
