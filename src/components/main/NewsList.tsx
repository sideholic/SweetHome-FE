import {
  NewsGrid,
  NewsInner,
  NewsTitle,
  NewsTitleList,
  NewsWrapper,
} from "../../styles/NewsStyle";
import { CommInner } from "../../styles/GlobalStyle";
import { CommonTitle, CommonTitleDiv } from "../../styles/CommonStyle";

export default function NewsList() {
  return (
    <NewsWrapper>
      <CommonTitleDiv>
        <CommInner>
          <CommonTitle>부동산 뉴스</CommonTitle>
        </CommInner>
      </CommonTitleDiv>
      {/* 뉴스 Grid */}
      <NewsInner>
        <CommInner>
          <NewsGrid>
            <img src={require("../../images/NewsImg.jpg")} alt="newsImg" />
            <NewsTitleList>
              <NewsTitle>
                "푸틴과 같은 종말 맞길 바란다" 이재명 '우크라' 발언에 세계언...
              </NewsTitle>
              <NewsTitle>
                주말부터 식당·카페 11시까지…거리두기 완화될 듯
              </NewsTitle>
              <NewsTitle>
                완주한다더니 이탈…'안철수' 찍은 재외국민표 사표 됐다
              </NewsTitle>
              <NewsTitle>李-尹, '부정 이미지' 줄었다</NewsTitle>
              <NewsTitle>서방 제재 본격화… 직격탄 맞은 러 경제</NewsTitle>
              <NewsTitle>
                삼부토건, 윤석열-안철수 ‘단일화’ 소식에 급등세 [증시...
              </NewsTitle>
              <NewsTitle>
                [속보] 확진자 24만명대로 급증…오후 9시까지 전국서 24만4889명
                확진
              </NewsTitle>
              <NewsTitle>
                러시아군 포로 증언 "러, 자국군 부상병 자체 사살 중"
              </NewsTitle>
              <NewsTitle>
                親文 댓글 부대 ‘문꿀오소리’, 尹 지지 선언하며 돌직구…
              </NewsTitle>
              <NewsTitle>
                [Newsmaker] Leaving their instruments behind, Ukrainian...
              </NewsTitle>
            </NewsTitleList>
          </NewsGrid>
        </CommInner>
      </NewsInner>
    </NewsWrapper>
  );
}
