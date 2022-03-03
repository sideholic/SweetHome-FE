import {
  CurationCardWrapper,
  CurationTitle,
  CurationTitleDiv,
  CurationWrapper,
} from "../../styles/CurationStyle";
import "../../styles/curationSwiper.scss";
import { CommInner } from "../../styles/GlobalStyle";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MoreBtn } from "../../styles/CommonStyle";

export default function CurationList() {
  SwiperCore.use([Autoplay]);
  return (
    <CurationWrapper>
      <CurationTitleDiv>
        <CommInner>
          <CurationTitle>
            청약 큐레이션 <span>HOT</span>
          </CurationTitle>
          <MoreBtn>더보기</MoreBtn>
        </CommInner>
      </CurationTitleDiv>

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
              <img src={require("../../images/NewsImg.jpg")} alt="test" />
              <div>내용내용내용내용내용내용내용내용내용내용</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../../images/HeaderImg.png")} alt="test" />
              <div>내용내용내용내용내용내용내용내용내용내용</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../../images/NewsImg.jpg")} alt="test" />
              <div>내용내용내용내용내용내용내용내용내용내용</div>
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
