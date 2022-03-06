import useCurrentLocation from "../../hooks/useCurrentLocation";
import {
  LocationCard,
  LocationListFlex,
  LocationWrapper,
  LocationCardTitle,
  LocationCardTags,
  LocationInfos,
  LocationCardImg,
  LocationCardLoco,
} from "../../styles/LocationStyle";
import { CommInner } from "../../styles/GlobalStyle";
import {
  CommonMoreBtn,
  CommonTitle,
  CommonTitleDiv,
} from "../../styles/CommonStyle";
import { IoLocationOutline } from "react-icons/io5";

export default function LocationList() {
  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60, // ms
    maximumAge: 1000 * 3600 * 24, // 24 hour
  };

  const { location, error } = useCurrentLocation(geolocationOptions);
  // console.log(location?.longitude, location?.latitude);

  return location ? (
    <LocationWrapper>
      <CommonTitleDiv>
        <CommInner>
          <CommonTitle>내 위치 근처</CommonTitle>
          <CommonMoreBtn>더보기</CommonMoreBtn>
        </CommInner>
      </CommonTitleDiv>
      <CommInner>
        <LocationListFlex>
          <LocationCard>
            <div className="locoImg">
              <LocationCardImg
                src={require("../../images/building.png")}
                alt="test"
              />
              <LocationCardLoco>
                <IoLocationOutline />
                성수동 | 임대주택
              </LocationCardLoco>
            </div>
            <LocationInfos>
              <LocationCardTitle>빌리브 명지 듀클래스 1단지</LocationCardTitle>
              <LocationCardTags>
                <span>22/03/03 ~ 22/04/04</span>
              </LocationCardTags>
            </LocationInfos>
          </LocationCard>
          <LocationCard>
            <div className="locoImg">
              <LocationCardImg
                src={require("../../images/building.png")}
                alt="test"
              />
              <LocationCardLoco>
                <IoLocationOutline />
                성수동 | 임대주택
              </LocationCardLoco>
            </div>
            <LocationInfos>
              <LocationCardTitle>빌리브 명지 듀클래스 2단지</LocationCardTitle>
              <LocationCardTags>
                <span>22/03/03 ~ 22/04/04</span>
              </LocationCardTags>
            </LocationInfos>
          </LocationCard>
          <LocationCard>
            <div className="locoImg">
              <LocationCardImg
                src={require("../../images/building.png")}
                alt="test"
              />
              <LocationCardLoco>
                <IoLocationOutline />
                신림동 | 임대주택
              </LocationCardLoco>
            </div>
            <LocationInfos>
              <LocationCardTitle>빌리브 명지 듀클래스 3단지</LocationCardTitle>
              <LocationCardTags>
                <span>22/03/03 ~ 22/04/04</span>
              </LocationCardTags>
            </LocationInfos>
          </LocationCard>

          <LocationCard>
            <div className="locoImg">
              <LocationCardImg
                src={require("../../images/building.png")}
                alt="test"
              />
              <LocationCardLoco>
                <IoLocationOutline />
                인사동 | 임대주택
              </LocationCardLoco>
            </div>
            <LocationInfos>
              <LocationCardTitle>빌리브 명지 듀클래스 1단지</LocationCardTitle>
              <LocationCardTags>
                <span>22/03/03 ~ 22/04/04</span>
              </LocationCardTags>
            </LocationInfos>
          </LocationCard>
          <LocationCard>
            <div className="locoImg">
              <LocationCardImg
                src={require("../../images/building.png")}
                alt="test"
              />
              <LocationCardLoco>
                <IoLocationOutline />
                신림동 | 임대주택
              </LocationCardLoco>
            </div>
            <LocationInfos>
              <LocationCardTitle>빌리브 명지 듀클래스 2단지</LocationCardTitle>
              <LocationCardTags>
                <span>22/03/03 ~ 22/04/04</span>
              </LocationCardTags>
            </LocationInfos>
          </LocationCard>
          <LocationCard>
            <div className="locoImg">
              <LocationCardImg
                src={require("../../images/building.png")}
                alt="test"
              />
              <LocationCardLoco>
                <IoLocationOutline />
                인사동 | 임대주택
              </LocationCardLoco>
            </div>
            <LocationInfos>
              <LocationCardTitle>빌리브 명지 듀클래스 3단지</LocationCardTitle>
              <LocationCardTags>
                <span>22/03/03 ~ 22/04/04</span>
              </LocationCardTags>
            </LocationInfos>
          </LocationCard>
        </LocationListFlex>
      </CommInner>
    </LocationWrapper>
  ) : null;
}
