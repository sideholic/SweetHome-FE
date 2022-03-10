import {
  CCCategoryTitle,
  CCInner,
  CCProgress,
  ConfirmBtn,
  ConfirmWrapper,
  CurationCheckBox,
  CurationCheckBoxWrapper,
  CurationCreatePop,
  Overlay,
} from "../../styles/LayoutStyle";
import { AnimatePresence, useViewportScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { getKoreaAdminDivision, setScrolling } from "../../utils/utilsFn";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";

export default function CurationCreate() {
  const navigate = useNavigate();
  const curationCreateMatch = useMatch("/curation/create");
  // 현재 스크롤 위치
  const { scrollY } = useViewportScroll();
  // 팝업 꺼지게
  const onOverlayClick = () => {
    navigate("/");
    setScrolling();
  };
  // 행정구역 가져오기
  const locationList = getKoreaAdminDivision();

  const checkedLocation = (
    category: string,
    categorySelector: string,
    number: number,
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    const chk = document.querySelectorAll(categorySelector);
    // 선택제한
    if (chk.length > number) {
      event.currentTarget.checked = false;
      alert(`${category} ${number}개까지만 선택이 가능합니다.`);
      return;
    }
    event.currentTarget.parentElement?.classList.toggle("checked");
  };

  return (
    <>
      {/* 큐레이션 생성 팝업 */}
      {curationCreateMatch ? (
        <AnimatePresence>
          <Overlay
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></Overlay>
          <CurationCreatePop
            style={{ top: scrollY.get() + 80 }}
            layoutId={"curationCreate"}
          >
            <form>
              <CCProgress>
                <h2>큐레이션 생성</h2>
                <h3>나만의 큐레이션 카드를 생성해 보세요</h3>
              </CCProgress>
              {/* 지역 */}
              <CCInner>
                <CCCategoryTitle>지역</CCCategoryTitle>
                {locationList.map((data) => (
                  <CurationCheckBoxWrapper key={data}>
                    <CurationCheckBox
                      id={data}
                      type={"checkbox"}
                      name="location"
                      onClick={(e) =>
                        checkedLocation(
                          "지역은",
                          "input[name='location']:checked",
                          3,
                          e
                        )
                      }
                    />
                    <label htmlFor={data}>{data}</label>
                  </CurationCheckBoxWrapper>
                ))}
              </CCInner>
              {/* 건물유형 */}
              <CCInner>
                <CCCategoryTitle>건물유형</CCCategoryTitle>
                <CurationCheckBoxWrapper paddingSize={"3.5rem"}>
                  <CurationCheckBox
                    id="1"
                    type={"checkbox"}
                    name={"building"}
                    onClick={(e) =>
                      checkedLocation(
                        "건물유형은",
                        "input[name='building']:checked",
                        2,
                        e
                      )
                    }
                  />
                  <label htmlFor="1">
                    <span>
                      <BiBuildings size={48} />
                    </span>
                    <span>아파트</span>
                  </label>
                </CurationCheckBoxWrapper>
                <CurationCheckBoxWrapper paddingSize={"3.5rem"}>
                  <CurationCheckBox
                    id="2"
                    type={"checkbox"}
                    name={"building"}
                    onClick={(e) =>
                      checkedLocation(
                        "건물유형은",
                        "input[name='building']:checked",
                        2,
                        e
                      )
                    }
                  />
                  <label htmlFor="2">
                    <span>
                      <IoHomeOutline size={48} />
                    </span>
                    <span>빌라</span>
                  </label>
                </CurationCheckBoxWrapper>
                <CurationCheckBoxWrapper paddingSize={"3.5rem"}>
                  <CurationCheckBox
                    id="3"
                    type={"checkbox"}
                    name={"building"}
                    onClick={(e) =>
                      checkedLocation(
                        "건물유형은",
                        "input[name='building']:checked",
                        2,
                        e
                      )
                    }
                  />
                  <label htmlFor="3">
                    <span>
                      <BsBuilding size={48} />
                    </span>
                    <span>오피스텔</span>
                  </label>
                </CurationCheckBoxWrapper>
              </CCInner>
              {/* 공급유형 */}
              <CCInner>
                <CCCategoryTitle>공급유형</CCCategoryTitle>
                <CurationCheckBoxWrapper paddingSize={"1.5rem"}>
                  <CurationCheckBox
                    id="1"
                    type={"checkbox"}
                    name={"supply"}
                    onClick={(e) =>
                      checkedLocation(
                        "공급유형은",
                        "input[name='supply']:checked",
                        2,
                        e
                      )
                    }
                  />
                  <label htmlFor="1">공공분양</label>
                </CurationCheckBoxWrapper>
                <CurationCheckBoxWrapper paddingSize={"1.5rem"}>
                  <CurationCheckBox
                    id="2"
                    type={"checkbox"}
                    name={"supply"}
                    onClick={(e) =>
                      checkedLocation(
                        "공급유형은",
                        "input[name='supply']:checked",
                        2,
                        e
                      )
                    }
                  />
                  <label htmlFor="2">민간분양</label>
                </CurationCheckBoxWrapper>
              </CCInner>
              {/* SUBMIT 버튼 */}
              <ConfirmWrapper>
                <ConfirmBtn type={"submit"}>완료</ConfirmBtn>
              </ConfirmWrapper>
            </form>
          </CurationCreatePop>
        </AnimatePresence>
      ) : null}
    </>
  );
}
