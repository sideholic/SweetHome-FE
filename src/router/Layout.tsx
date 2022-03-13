import {
  AlarmDiv,
  LayoutList,
  LayoutSpread,
  LayoutWrapper,
  SpreadBtn,
} from "../styles/LayoutStyle";
import { Link } from "react-router-dom";
import { layoutBtnClick, preventScrolling } from "../utils/utilsFn";
import CurationCreate from "../components/curation/CurationCreate";
import { MdAddchart } from "react-icons/md";
import { CgList } from "react-icons/cg";
import MyCurationList from "../components/curation/MyCurationList";
import { useViewportScroll } from "framer-motion";

export default function Layout() {
  // 현재 스크롤 위치
  const { scrollY } = useViewportScroll();

  // 큐레이션 팝업
  const onCurationPopClick = (eleNm: string) => {
    const pop = document.querySelector<HTMLElement>(`.${eleNm}`);
    const popTop = document.querySelectorAll<HTMLElement>(".popupTop");
    pop!.classList.add("show");

    popTop.forEach((data) => {
      data.style.top = `${scrollY.get() + 80}px`;
    });
    preventScrolling();
  };

  return (
    <>
      <LayoutWrapper>
        {/* 큐레이션 */}
        <LayoutSpread className="spread">
          <LayoutList onClick={() => onCurationPopClick("createPop")}>
            <MdAddchart size="26" />
          </LayoutList>
          <LayoutList onClick={() => onCurationPopClick("ccList")}>
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
