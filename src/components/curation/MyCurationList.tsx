import { setScrolling } from "../../utils/utilsFn";
import React from "react";
import {
  CCInner,
  CCListWrapper,
  CCProgress,
  ConfirmBtn,
  ConfirmWrapper,
  CuartionPop,
  Overlay,
} from "../../styles/LayoutStyle";

export default function MyCurationList() {
  // 팝업 꺼지게
  const onOverlayClick = () => {
    const list = document.querySelector<HTMLElement>(".ccList");
    list?.classList.remove("show");
    setScrolling();
  };

  const checkedCreate = () => {
    const pop = document.querySelector<HTMLElement>(".createPop");
    const list = document.querySelector<HTMLElement>(".ccList");
    list?.classList.remove("show");
    pop?.classList.add("show");
  };

  return (
    <CCListWrapper className="ccList">
      <Overlay onClick={onOverlayClick}></Overlay>
      <CuartionPop className="popupTop">
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
      </CuartionPop>
    </CCListWrapper>
  );
}
