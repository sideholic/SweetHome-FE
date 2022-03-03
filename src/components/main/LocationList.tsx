import useCurrentLocation from "../../hooks/useCurrentLocation";
import { LocationWrapper } from "../../styles/LocationStyle";
import { CommInner } from "../../styles/GlobalStyle";
import {
  CommonMoreBtn,
  CommonTitle,
  CommonTitleDiv,
} from "../../styles/CommonStyle";

export default function LocationList() {
  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
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
      <div style={{ textAlign: "center" }}>
        ㅋㅋ 위치 해킹함 ㅅㄱㅇ
        <br />
        <br />
        {location?.latitude}, {location?.longitude}
      </div>
    </LocationWrapper>
  ) : null;
}
