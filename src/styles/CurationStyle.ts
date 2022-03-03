import styled from "styled-components";

/* Wrapper */
export const CurationWrapper = styled.div`
  height: 60vh;
  background-color: #f2f2f2;
`;
/* 제목 div */
export const CurationTitleDiv = styled.div`
  height: 15vh;
`;
/* 제목 */
export const CurationTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.625rem;
  font-weight: bold;

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme.greenColor.green4};
  }
`;
/* 큐레이션 카드 리스트 */
export const CurationCardWrapper = styled.div`
  height: 45vh;
`;
