import {
  AlarmDiv,
  CCProgress,
  CurationCreatePop,
  LayoutList,
  LayoutSpread,
  LayoutWrapper,
  Overlay,
  SpreadBtn,
} from "../styles/LayoutStyle";
import { Link, useNavigate } from "react-router-dom";
import { layoutBtnClick, preventScrolling } from "../utils/utilsFn";
import CurationCreate from "../components/curation/CurationCreate";

export default function Layout() {
  const navigate = useNavigate();
  // 큐레이션 생성
  const onCurationCreateClick = () => {
    navigate("/curation/create");
    preventScrolling();
  };

  return (
    <>
      <LayoutWrapper>
        {/* 큐레이션 */}
        <LayoutSpread className="spread">
          <LayoutList
            onClick={onCurationCreateClick}
            layoutId={"curationCreate"}
          >
            1
          </LayoutList>
          <LayoutList>2</LayoutList>
          <LayoutList>
            {/* 알람버튼 link 임시 */}
            <Link to="/search">
              <AlarmDiv>
                <img
                  src={require("../images/bell-white.png")}
                  alt="AlarmBell"
                />
              </AlarmDiv>
            </Link>
          </LayoutList>
        </LayoutSpread>
        {/* 펼치기 */}
        <SpreadBtn onClick={layoutBtnClick} />
      </LayoutWrapper>
      {/* 레이어 팝업 */}
      <CurationCreate />
    </>
  );
}
