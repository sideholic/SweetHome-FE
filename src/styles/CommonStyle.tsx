import styled from "styled-components";

/* 더보기 버튼 */
export const MoreBtn = styled.span`
  display: block;
  position: absolute;
  right: 0;
  bottom: 10px;
  color: ${(props) => props.theme.greenColor.green4};
  &:after {
    content: " >";
  }
`;
