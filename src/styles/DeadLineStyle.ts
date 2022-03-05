import styled from "styled-components";

/* Wrapper */
export const DeadLineWrapper = styled.div`
  height: 42.5rem;
`;
/* 마감 임박 Grid wrapper */
export const DeadLineCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
/* FLEX */
export const DeadLineListFlex = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(n + 3) {
    margin-top: 50px;
  }

  img {
    display: block;
    width: 16.875rem;
    height: 12.5rem;
    border-radius: 0.4rem;
  }
  div {
    margin-left: 1em;
  }

  p {
    line-height: 1.3;
  }

  .deathLineInfo {
    margin-top: 1.429em;
    font-size: 0.875rem;
  }
  .deathLineTime {
    border: 1px solid #fff;
    border-radius: 1.4em;
    padding: 0.3em 0.6em;
    background-color: ${(props) => props.theme.greenColor.green3};
    margin-right: 0.5em;
  }
`;
