import { CommInner } from "../../styles/GlobalStyle";
import {
  Category,
  CategoryGrid,
  ExplainDiv,
  ExplainInnerDiv,
  HeaderCategory,
  HeaderImg,
  HeaderSearch,
  HeaderWrapper,
  SearchBar,
  SearchBtn,
  SearchInput,
  ToggleCheckBoxLabel,
  ToggleCheckBox,
  ToggleCheckBoxWrapper,
  ToolTipExplain,
} from "../../styles/HeaderStyle";
import LogoAlarmHeader from "./LogoAlarmHeader";
import { AiOutlineSearch } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

export default function Header() {
  return (
    <HeaderWrapper>
      {/* 로고, 알람 */}
      <LogoAlarmHeader />
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
          <SearchBar>
            {/* 큐레이션 ON / OFF */}
            <ExplainDiv>
              <ExplainInnerDiv>
                <ToggleCheckBoxWrapper>
                  <ToggleCheckBox id="checkbox" type="checkbox" />
                  <ToggleCheckBoxLabel htmlFor="checkbox" />
                </ToggleCheckBoxWrapper>
                {/* 툴팁 */}
                <ToolTipExplain>
                  <a data-tip data-for="curationExplain">
                    <BsQuestionCircle size="20" color="#fff" />
                  </a>
                  <ReactTooltip id="curationExplain" aria-haspopup="true">
                    <span>
                      ON : 큐레이션 카드내의 검색어가 자동 추가 됩니다
                    </span>
                  </ReactTooltip>
                </ToolTipExplain>
              </ExplainInnerDiv>
            </ExplainDiv>
            {/* 검색 INPUT */}
            <SearchInput placeholder="민간분양을 검색해보세요." />
            <SearchBtn>
              <AiOutlineSearch size="26" color="#fff" />
            </SearchBtn>
          </SearchBar>
        </CommInner>
      </HeaderSearch>
    </HeaderWrapper>
  );
}
