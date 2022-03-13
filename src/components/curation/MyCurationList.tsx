import { useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence, useViewportScroll } from "framer-motion";
import { setScrolling } from "../../utils/utilsFn";
import React from "react";
import {
  CCInner,
  CCProgress,
  ConfirmBtn,
  ConfirmWrapper,
  CurationCreatePop,
  Overlay,
} from "../../styles/LayoutStyle";

export default function MyCurationList() {
  const navigate = useNavigate();
  const curationListMatch = useMatch("/curation/list");
  // 현재 스크롤 위치
  const { scrollY } = useViewportScroll();
  // 팝업 꺼지게
  const onOverlayClick = () => {
    navigate("/");
    setTimeout(() => {
      setScrolling();
    }, 600);
  };

  const checkedCreate = () => {
    navigate("/curation/create");
  };

  return (
    <>
      {/* 큐레이션 목록 */}
      {curationListMatch ? (
        <AnimatePresence key={"curationList"}>
          <Overlay
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></Overlay>
          <CurationCreatePop
            style={{ top: scrollY.get() + 80 }}
            layoutId={"curationList"}
          >
            <CCProgress>
              <h2>큐레이션 목록</h2>
              <h3>생성한 큐레이션 카드를 확인해 보세요</h3>
            </CCProgress>
            {/* 스와이퍼 */}
            <CCInner>
              <CCProgress>
                <h3>큐레이션 카드를 생성해 보세요</h3>
                <h3>카드는 최대 5개 생성 가능합니다.</h3>
              </CCProgress>
            </CCInner>
            {/* 카드 생성 버튼(카드가 5개 있을시 hidden) */}
            <ConfirmWrapper>
              <ConfirmBtn onClick={checkedCreate}>카드 생성하기</ConfirmBtn>
            </ConfirmWrapper>
          </CurationCreatePop>
        </AnimatePresence>
      ) : null}
    </>
  );
}
