import {
  AlarmDiv,
  LayoutList,
  LayoutSpread,
  LayoutWrapper,
  SpreadBtn,
} from "../styles/LayoutStyle";
import { Link, useNavigate } from "react-router-dom";
import { layoutBtnClick, preventScrolling } from "../utils/utilsFn";
import CurationCreate from "../components/curation/CurationCreate";
import { MdAddchart } from "react-icons/md";
import { CgList } from "react-icons/cg";
import MyCurationList from "../components/curation/MyCurationList";

export default function Layout() {
  const navigate = useNavigate();
  // 큐레이션 생성
  const onCurationCreateClick = () => {
    preventScrolling();
    navigate("/curation/create");
  };

  // 큐레이션 리스트
  const onCurationMyListClick = () => {
    preventScrolling();
    navigate("/curation/list");
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
            <MdAddchart size="26" />
          </LayoutList>
          <LayoutList onClick={onCurationMyListClick} layoutId={"curationList"}>
            <CgList size="26" />
          </LayoutList>
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
      <MyCurationList />
    </>
  );
}
