import {
  AlarmDiv,
  LayoutList,
  LayoutSpread,
  LayoutWrapper,
  SpreadBtn,
} from "../styles/LayoutStyle";
import { Link } from "react-router-dom";
import { layoutBtnClick } from "../utils/utilsFn";

export default function Layout() {
  return (
    <LayoutWrapper>
      {/* 큐레이션 */}
      <LayoutSpread className="spread">
        <LayoutList>1</LayoutList>
        <LayoutList>2</LayoutList>
        <LayoutList>
          {/* 알람버튼 link 임시 */}
          <Link to="/search">
            <AlarmDiv>
              <img src={require("../images/bell-white.png")} alt="AlarmBell" />
            </AlarmDiv>
          </Link>
        </LayoutList>
      </LayoutSpread>
      {/* 펼치기 */}
      <SpreadBtn onClick={layoutBtnClick} />
    </LayoutWrapper>
  );
}
