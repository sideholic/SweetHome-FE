import {
  DeadLineCardGrid,
  DeadLineListFlex,
  DeadLineWrapper,
} from "../../styles/DeadLineStyle";
import { CommInner } from "../../styles/GlobalStyle";
import {
  CommonMoreBtn,
  CommonTitle,
  CommonTitleDiv,
} from "../../styles/CommonStyle";

export default function DeadLineList() {
  return (
    <DeadLineWrapper>
      <CommonTitleDiv>
        <CommInner>
          <CommonTitle>마감 임박</CommonTitle>
          <CommonMoreBtn>더보기</CommonMoreBtn>
        </CommInner>
      </CommonTitleDiv>

      <CommInner>
        <DeadLineCardGrid>
          <DeadLineListFlex>
            <img src={require("../../images/building.png")} alt="HeaderImg" />
            <div>
              <p>[부산] 빌리브 명지 듀클래스 1단지</p>
              <p className="deathLineInfo">
                <span className="deathLineTime">D-5</span>
                <span>부산광역시</span>
              </p>
            </div>
          </DeadLineListFlex>
          <DeadLineListFlex>
            <img src={require("../../images/building.png")} alt="HeaderImg" />
            <div>
              <p>[대구] 빌리브 명지 듀클래스 2단지</p>
              <p className="deathLineInfo">
                <span className="deathLineTime">D-6</span>
                <span>대구광역시</span>
              </p>
            </div>
          </DeadLineListFlex>
          <DeadLineListFlex>
            <img src={require("../../images/building.png")} alt="HeaderImg" />
            <div>
              <p>[경기] 빌리브 명지 듀클래스 3단지</p>
              <p className="deathLineInfo">
                <span className="deathLineTime">D-7</span>
                <span>경기도</span>
              </p>
            </div>
          </DeadLineListFlex>
          <DeadLineListFlex>
            <img src={require("../../images/building.png")} alt="HeaderImg" />
            <div>
              <p>[서울] 빌리브 명지 듀클래스 4단지</p>
              <p className="deathLineInfo">
                <span className="deathLineTime">D-8</span>
                <span>서울특별시</span>
              </p>
            </div>
          </DeadLineListFlex>
        </DeadLineCardGrid>
      </CommInner>
    </DeadLineWrapper>
  );
}
