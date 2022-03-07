import styled from "styled-components";

/* Wrapper */
export const FooterWrapper = styled.footer`
  background-color: #f2f2f2;
  height: 16.25rem;
  margin-top: 6.25rem;
`;
/* 푸터 flex 지정 */
export const FooterFlexContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 2.5rem 0;
`;

export const TextWrapper = styled.div`
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 1.25rem 0;
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

/* 푸터 글 */
export const FooterText = styled.p`
  width: 100%;
  line-height: 1.8;
  font-size: 0.875rem;

  span {
    display: inline-block;
    &:nth-of-type(1) {
      width: 3.571em;
      margin-right: 2.143em;
    }
    &:nth-of-type(2) {
      width: 14.286em;
      &:before {
        content: "|";
        margin-right: 0.714em;
      }
    }
    &.leftSpan {
      margin-right: 1.071em;
    }
  }
`;
