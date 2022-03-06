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
            <img src={require("../../images/building.png")} alt="building" />
            <div>
              <p>부산광역시</p>
              <p>빌리브 명지 듀클래스 1단지</p>
              <p className="deathLineInfo">
                <span className="deathLineTime">D-5</span>
                <span>2022.02.16 ~ 2022.03.05</span>
              </p>
            </div>
          </DeadLineListFlex>
          <DeadLineListFlex>
            <img src={require("../../images/building.png")} alt="building" />
            <div>
              <p>대구광역시</p>
              <p>빌리브 명지 듀클래스 2단지</p>
              <p className="deathLineInfo">
                <span className="deathLineTime">D-6</span>
                <span>2022.02.16 ~ 2022.03.05</span>
              </p>
            </div>
          </DeadLineListFlex>
          <DeadLineListFlex>
            <img src={require("../../images/building.png")} alt="building" />
            <div>
              <p>경기도</p>
              <p>빌리브 명지 듀클래스 3단지</p>
              <p className="deathLineInfo">
                <span className="deathLineTime">D-7</span>
                <span>2022.02.16 ~ 2022.03.05</span>
              </p>
            </div>
          </DeadLineListFlex>
          <DeadLineListFlex>
            <img src={require("../../images/building.png")} alt="building" />
            <div>
              <p>서울특별시</p>
              <p>빌리브 명지 듀클래스 4단지</p>
              <p className="deathLineInfo">
                <span className="deathLineTime">D-8</span>
                <span>2022.02.16 ~ 2022.03.05</span>
              </p>
            </div>
          </DeadLineListFlex>
        </DeadLineCardGrid>
      </CommInner>
    </DeadLineWrapper>
  );
}
