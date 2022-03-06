import { CommInner } from "../../styles/GlobalStyle";
import {
  CardText,
  CardText2,
  CardTextInnerWrapper,
  CardTextWrapper,
  SearchResultCard,
  SearchResultCnt,
  SearchResultList,
  SearchResultMenu,
} from "../../styles/SearchStyle";

export default function SearchResult() {
  return (
    <CommInner>
      <SearchResultCnt>
        <span>"민간분양"</span>에 대한 검색결과는 총<span>2152</span>건 입니다.
      </SearchResultCnt>
      {/* 검색결과 메뉴바 */}
      <SearchResultMenu>
        <li>오늘청약(370)</li>
        <li>예정(20)</li>
        <li>모집중(48)</li>
        <li>무순위(28)</li>
      </SearchResultMenu>
      {/* 검색결과 리스트 */}
      <SearchResultList>
        <SearchResultCard>
          <img src={require("../../images/building.png")} alt="building" />
          <CardTextWrapper>
            <CardTextInnerWrapper>
              <CardText fontSize="1.063rem" fontWeight="bold">
                부산장안 디에트르
              </CardText>
              <CardText fontSize="1.063rem" fontWeight="bold">
                2022-03-14 ~ 2022-03-16
              </CardText>
              <CardText>부산광역시 기장군 장안읍 좌천리 361-4 일원</CardText>
            </CardTextInnerWrapper>
            <CardTextInnerWrapper>
              <CardText2>
                분양세대<span>410세대</span>
              </CardText2>
              <CardText2>
                분양면적<span>500평</span>
              </CardText2>
              <CardText2>
                분양가격<span>36,334 ~ 51,243 만원</span>
              </CardText2>
            </CardTextInnerWrapper>
          </CardTextWrapper>
        </SearchResultCard>

        <SearchResultCard>
          <img src={require("../../images/building.png")} alt="building" />
          <CardTextWrapper>
            <CardTextInnerWrapper>
              <CardText fontSize="1.063rem" fontWeight="bold">
                부산장안 디에트르
              </CardText>
              <CardText fontSize="1.063rem" fontWeight="bold">
                2022-03-14 ~ 2022-03-16
              </CardText>
              <CardText>부산광역시 기장군 장안읍 좌천리 361-4 일원</CardText>
            </CardTextInnerWrapper>
            <CardTextInnerWrapper>
              <CardText2>
                분양세대<span>410세대</span>
              </CardText2>
              <CardText2>
                분양면적<span>500평</span>
              </CardText2>
              <CardText2>
                분양가격<span>36,334 ~ 51,243 만원</span>
              </CardText2>
            </CardTextInnerWrapper>
          </CardTextWrapper>
        </SearchResultCard>

        <SearchResultCard>
          <img src={require("../../images/building.png")} alt="building" />
          <CardTextWrapper>
            <CardTextInnerWrapper>
              <CardText fontSize="1.063rem" fontWeight="bold">
                부산장안 디에트르
              </CardText>
              <CardText fontSize="1.063rem" fontWeight="bold">
                2022-03-14 ~ 2022-03-16
              </CardText>
              <CardText>부산광역시 기장군 장안읍 좌천리 361-4 일원</CardText>
            </CardTextInnerWrapper>
            <CardTextInnerWrapper>
              <CardText2>
                분양세대<span>410세대</span>
              </CardText2>
              <CardText2>
                분양면적<span>500평</span>
              </CardText2>
              <CardText2>
                분양가격<span>36,334 ~ 51,243 만원</span>
              </CardText2>
            </CardTextInnerWrapper>
          </CardTextWrapper>
        </SearchResultCard>

        <SearchResultCard>
          <img src={require("../../images/building.png")} alt="building" />
          <CardTextWrapper>
            <CardTextInnerWrapper>
              <CardText fontSize="1.063rem" fontWeight="bold">
                부산장안 디에트르
              </CardText>
              <CardText fontSize="1.063rem" fontWeight="bold">
                2022-03-14 ~ 2022-03-16
              </CardText>
              <CardText>부산광역시 기장군 장안읍 좌천리 361-4 일원</CardText>
            </CardTextInnerWrapper>
            <CardTextInnerWrapper>
              <CardText2>
                분양세대<span>410세대</span>
              </CardText2>
              <CardText2>
                분양면적<span>500평</span>
              </CardText2>
              <CardText2>
                분양가격<span>36,334 ~ 51,243 만원</span>
              </CardText2>
            </CardTextInnerWrapper>
          </CardTextWrapper>
        </SearchResultCard>

        <SearchResultCard>
          <img src={require("../../images/building.png")} alt="building" />
          <CardTextWrapper>
            <CardTextInnerWrapper>
              <CardText fontSize="1.063rem" fontWeight="bold">
                부산장안 디에트르
              </CardText>
              <CardText fontSize="1.063rem" fontWeight="bold">
                2022-03-14 ~ 2022-03-16
              </CardText>
              <CardText>부산광역시 기장군 장안읍 좌천리 361-4 일원</CardText>
            </CardTextInnerWrapper>
            <CardTextInnerWrapper>
              <CardText2>
                분양세대<span>410세대</span>
              </CardText2>
              <CardText2>
                분양면적<span>500평</span>
              </CardText2>
              <CardText2>
                분양가격<span>36,334 ~ 51,243 만원</span>
              </CardText2>
            </CardTextInnerWrapper>
          </CardTextWrapper>
        </SearchResultCard>

        <SearchResultCard>
          <img src={require("../../images/building.png")} alt="building" />
          <CardTextWrapper>
            <CardTextInnerWrapper>
              <CardText fontSize="1.063rem" fontWeight="bold">
                부산장안 디에트르
              </CardText>
              <CardText fontSize="1.063rem" fontWeight="bold">
                2022-03-14 ~ 2022-03-16
              </CardText>
              <CardText>부산광역시 기장군 장안읍 좌천리 361-4 일원</CardText>
            </CardTextInnerWrapper>
            <CardTextInnerWrapper>
              <CardText2>
                분양세대<span>410세대</span>
              </CardText2>
              <CardText2>
                분양면적<span>500평</span>
              </CardText2>
              <CardText2>
                분양가격<span>36,334 ~ 51,243 만원</span>
              </CardText2>
            </CardTextInnerWrapper>
          </CardTextWrapper>
        </SearchResultCard>
      </SearchResultList>
    </CommInner>
  );
}
