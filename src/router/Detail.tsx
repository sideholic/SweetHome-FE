import { Link } from "react-router-dom";
import { HeaderTop, Logo } from "../styles/HeaderStyle";
import React from "react";
import {
  DetailHomeInfoWrapper,
  DetailHomeWrapper,
  FloatBox,
  FloatBoxInner,
  InfoDiv,
  InfoLabel,
  InfoText,
} from "../styles/DetailStyle";
import { CommInner } from "../styles/GlobalStyle";

export default function Detail() {
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
        <CommInner>
          {/* 청약 주택 정보 */}
          <DetailHomeInfoWrapper>
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
                <InfoText fontColor="#999999" marginTop="0">
                  분양세대수
                </InfoText>
                <InfoText fontWeight="bold" marginTop="1.071rem">
                  726세대
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <InfoText fontColor="#999999" marginTop="0">
                  분양면적
                </InfoText>
                <InfoText fontWeight="bold" marginTop="1.071rem">
                  24평(78~79㎡)
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <InfoText fontColor="#999999" marginTop="0">
                  전용면적
                </InfoText>
                <InfoText fontWeight="bold" marginTop="1.071rem">
                  17평(56㎡)
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <InfoText fontColor="#999999" marginTop="0">
                  보증금
                </InfoText>
                <InfoText fontWeight="bold" marginTop="1.071rem">
                  11,720만원
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <InfoText fontColor="#999999" marginTop="0">
                  월세
                </InfoText>
                <InfoText fontWeight="bold" marginTop="1.071rem">
                  41만원
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <InfoText fontColor="#999999" marginTop="0">
                  건설사
                </InfoText>
                <InfoText fontWeight="bold" marginTop="1.071rem">
                  LH공사
                </InfoText>
              </FloatBoxInner>
              <FloatBoxInner>
                <InfoText fontColor="#999999" marginTop="0">
                  문의
                </InfoText>
                <InfoText fontWeight="bold" marginTop="1.071rem">
                  1800-2332
                </InfoText>
              </FloatBoxInner>
            </FloatBox>
          </DetailHomeInfoWrapper>
          {/* 청약 주택 분양일정 */}
        </CommInner>
      </DetailHomeWrapper>
    </>
  );
}
