import {
  CurationCardWrapper,
  CurationWrapper,
} from "../../styles/CurationStyle";
import "../../styles/curationSwiper.css";
import { CommInner } from "../../styles/GlobalStyle";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  CommonMoreBtn,
  CommonTitle,
  CommonTitleDiv,
} from "../../styles/CommonStyle";

export default function CurationList() {
  SwiperCore.use([Autoplay]);
  return (
    <CurationWrapper>
      <CommonTitleDiv>
        <CommInner>
          <CommonTitle>
            청약 큐레이션 <span>HOT</span>
          </CommonTitle>
          <CommonMoreBtn>더보기</CommonMoreBtn>
        </CommInner>
      </CommonTitleDiv>

      <CurationCardWrapper>
        <CommInner>
          <Swiper
            className="curationSwiper"
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 4000 }}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="imgWrapper">
                <img src={require("../../images/building.png")} alt="test" />
              </div>
              <div className="curInfo">
                내용내용내용내용내용내용내용내용내용내용
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgWrapper">
                <img src={require("../../images/building.png")} alt="test" />
              </div>
              <div className="curInfo">
                내용내용내용내용내용내용내용내용내용내용
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgWrapper">
                <img src={require("../../images/building.png")} alt="test" />
              </div>
              <div className="curInfo">
                내용내용내용내용내용내용내용내용내용내용
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <SwiperSlide>Slide 10</SwiperSlide>
          </Swiper>
        </CommInner>
      </CurationCardWrapper>
    </CurationWrapper>
  );
}
