import { Link } from "react-router-dom";
import { HeaderTop, Logo } from "../styles/HeaderStyle";
import React from "react";
import {
  DateInfoDiv,
  DetailHomeInfoWrapper,
  DetailHomeWrapper,
  FloatBox,
  FloatBoxInner,
  HomeSwiperWrapper,
  InfoDiv,
  InfoLabel,
  InfoText,
  ScheduleDateInfo,
  ScheduleGrid,
  ScheduleInner,
  ScheduleToday,
  ScheduleWrapper,
} from "../styles/DetailStyle";
import { CommInner } from "../styles/GlobalStyle";
import Footer from "../components/footer/Footer";
import { lightTheme } from "../theme/theme";
import { getCurrentTime } from "../utils/utilsFn";
import { BiBuildingHouse, BiArea, BiWon, BiPhoneCall } from "react-icons/bi";
import { BsTextareaResize } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default function Detail() {
  // 현재일자 가져오기
  const currentDay: Array<string> = getCurrentTime();

  return (
    <>
      {/* 헤더 */}
      <HeaderTop>
        <Link to="/">
          <Logo>SWEET HOME</Logo>
        </Link>
      </HeaderTop>
      {/* 청약 상세페이지 */}
      <DetailHomeWrapper>
        {/* 청약 주택 정보 */}
        <DetailHomeInfoWrapper>
          <CommInner>
            {/* 라벨, 분양명, 상세주소 */}
            <InfoDiv>
              <InfoLabel>분양예정</InfoLabel>
              <InfoText fontSize="1.8rem" fontWeight="bold">
                고양지축A-2BL 행복주택
              </InfoText>
              <InfoText fontColor="#999999" marginTop="1.250rem">
                경기도 고양시 덕양구 지촉동 고양지축 A-2BL
              </InfoText>
            </InfoDiv>
            {/* 분양정보 */}
            <FloatBox>
              <FloatBoxInner>
                <BiBuildingHouse size="36" />
                <InfoText fontColor="#999999" marginTop="0.6rem">
                  분양세대수
                </InfoText>
                <InfoText fontWeight="bold" marginTop="0.6rem">
                  726세대
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <BiArea size="36" />
                <InfoText fontColor="#999999" marginTop="0.6rem">
                  분양면적
                </InfoText>
                <InfoText fontWeight="bold" marginTop="0.6rem">
                  24평(78~79㎡)
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <BsTextareaResize size="36" />
                <InfoText fontColor="#999999" marginTop="0.6rem">
                  전용면적
                </InfoText>
                <InfoText fontWeight="bold" marginTop="0.6rem">
                  17평(56㎡)
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <GiMoneyStack size="36" />
                <InfoText fontColor="#999999" marginTop="0.6rem">
                  보증금
                </InfoText>
                <InfoText fontWeight="bold" marginTop="0.6rem">
                  11,720만원
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <BiWon size="36" />
                <InfoText fontColor="#999999" marginTop="0.6rem">
                  월세
                </InfoText>
                <InfoText fontWeight="bold" marginTop="0.6rem">
                  41만원
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <HiOutlineOfficeBuilding size="36" />
                <InfoText fontColor="#999999" marginTop="0.6rem">
                  건설사
                </InfoText>
                <InfoText fontWeight="bold" marginTop="0.6rem">
                  LH공사
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <BiPhoneCall size="36" />
                <InfoText fontColor="#999999" marginTop="0.6rem">
                  문의
                </InfoText>
                <InfoText fontWeight="bold" marginTop="0.6rem">
                  1800-2332
                </InfoText>
              </FloatBoxInner>
            </FloatBox>
          </CommInner>
        </DetailHomeInfoWrapper>
        {/* 청약 이미지 스와이퍼 */}
        <HomeSwiperWrapper />
        {/* 청약 주택 분양일정 */}
        <ScheduleWrapper>
          <CommInner>
            <ScheduleInner>
              <InfoText fontWeight="bold" marginTop="3.7rem" fontSize="1.8rem">
                분양일정
              </InfoText>
              <InfoText fontColor="#999999" marginTop="0.6rem">
                분양일정은 건설사 사정에 따라 변경될 수 있습니다.
              </InfoText>
              {/* 분양일정표 */}
              <ScheduleGrid>
                <ScheduleToday>
                  <InfoText
                    fontColor={lightTheme.greenColor.green5}
                    marginTop="0"
                  >
                    TODAY
                  </InfoText>
                  <InfoText fontSize="1.5rem">{currentDay[0]}</InfoText>
                  <InfoText fontColor="#999999">{currentDay[1]}</InfoText>
                </ScheduleToday>
                <ScheduleDateInfo>
                  <DateInfoDiv>
                    <span>모집공고</span>
                    <span>2022.03.06</span>
                  </DateInfoDiv>
                  <DateInfoDiv>
                    <span>청약접수</span>
                    <span>2022.03.10 ~ 2022.03.16</span>
                  </DateInfoDiv>
                  <DateInfoDiv>
                    <span>당첨자 발표</span>
                    <span>2022.06.23</span>
                  </DateInfoDiv>
                  <DateInfoDiv>
                    <span>계약</span>
                    <span>2022.07.05 ~ 2022.07.07</span>
                  </DateInfoDiv>
                  <DateInfoDiv>
                    <span>입주예정</span>
                    <span>2023.07.23</span>
                  </DateInfoDiv>
                </ScheduleDateInfo>
              </ScheduleGrid>
            </ScheduleInner>
          </CommInner>
        </ScheduleWrapper>
      </DetailHomeWrapper>
      {/* 푸터 */}
      <Footer />
    </>
  );
}
