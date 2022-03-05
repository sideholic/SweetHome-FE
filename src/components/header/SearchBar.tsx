import { CommInner } from "../../styles/GlobalStyle";
import {
  ExplainDiv,
  ExplainInnerDiv,
  SearchBarDiv,
  SearchBtn,
  SearchInput,
  ToggleCheckBox,
  ToggleCheckBoxLabel,
  ToggleCheckBoxWrapper,
  ToolTipExplain,
} from "../../styles/HeaderStyle";
import { BsQuestionCircle } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <>
      {/* 큐레이션 ON / OFF */}
      <ExplainDiv>
        <ExplainInnerDiv>
          <ToggleCheckBoxWrapper>
            <ToggleCheckBox id="checkbox" type="checkbox" />
            <ToggleCheckBoxLabel htmlFor="checkbox" />
          </ToggleCheckBoxWrapper>
          {/* 툴팁 */}
          <ToolTipExplain>
            <a data-tip="" data-for="curationExplain">
              <BsQuestionCircle size="20" color="#fff" />
            </a>
            <ReactTooltip id="curationExplain" aria-haspopup="true">
              <span>ON : 큐레이션 카드내의 검색어가 자동 추가 됩니다</span>
            </ReactTooltip>
          </ToolTipExplain>
        </ExplainInnerDiv>
      </ExplainDiv>
      {/* 검색 INPUT */}
      <SearchInput placeholder="민간분양을 검색해보세요." />
      <SearchBtn>
        <AiOutlineSearch size="26" color="#fff" />
      </SearchBtn>
    </>
  );
}
