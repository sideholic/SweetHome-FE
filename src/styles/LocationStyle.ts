import styled from "styled-components";

/* Wrapper */
export const LocationWrapper = styled.div`
  height: 54.375rem;
  background-color: ${(props) => props.theme.greenColor.green1};
`;
/* FLEX */
export const LocationListFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
/* 카드 너비 */
export const LocationCard = styled.div`
  width: 330px; // 고정
  border-radius: 0.4rem;
  background-color: #fff;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.1);

  &:nth-child(n + 4) {
    margin-top: 45px;
  }
  .locoImg {
    width: 100%;
    height: 13.75rem;
    position: relative;
  }
`;
/* 아파트 이미지 */
export const LocationCardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.4rem 0.4rem 0 0;
`;
/* 아파트 위치 & 카테고리 */
export const LocationCardLoco = styled.span`
  position: absolute;
  border-radius: 0.35em;
  font-size: 0.688rem;
  bottom: 1.364em;
  left: 1.364em;
  padding: 0.727em;
  color: #fff;
  background-color: ${(props) => props.theme.greenColor.green4};
`;
/* 아파트 정보 */
export const LocationInfos = styled.div`
  padding: 1.111em;
`;
/* 아파트 이름 */
export const LocationCardTitle = styled.p`
  width: 100%;
  margin-bottom: 0.8em;
  font-size: 1.125rem;
`;
/* 아파트 정보(태그) */
export const LocationCardTags = styled.span`
  font-size: 12px;
  color: #656565;
`;
