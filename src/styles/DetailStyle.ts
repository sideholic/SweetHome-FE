import styled from "styled-components";

interface IInfoText {
  fontSize?: string;
  fontColor?: string;
  marginTop?: string;
  fontWeight?: string;
}

/* Wrapper */
export const DetailHomeWrapper = styled.div`
  position: relative;
`;
/* 청약 주택 정보 Wrapper */
export const DetailHomeInfoWrapper = styled.div`
  position: relative;
  width: 100%;
`;
/* 정보 div(라벨, 분양명, 상세주소) */
export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0;
`;
/* 라벨 */
export const InfoLabel = styled.span`
  display: block;
  font-size: 0.875rem;
  background-color: ${(props) => props.theme.greenColor.green4};
  padding: 0.714em;
  color: #fff;
`;
/* 텍스트(공통) */
export const InfoText = styled.p<IInfoText>`
  font-size: ${(props) => props.fontSize ?? "1rem"};
  color: ${(props) => props.fontColor ?? "#000"};
  margin-top: ${(props) => props.marginTop ?? "1.563rem"};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
`;
/* 분양정보(float box) */
export const FloatBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #f2f2f2;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  text-align: center;
`;
export const FloatBoxInner = styled.li`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 50%;
    background-color: #dfdfdf;
    top: 25%;
    right: 0;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`;
