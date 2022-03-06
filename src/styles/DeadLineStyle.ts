import styled from "styled-components";

/* Wrapper */
export const DeadLineWrapper = styled.div`
  height: 42.5rem;
`;
/* 마감 임박 Grid wrapper */
export const DeadLineCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`;
/* FLEX */
export const DeadLineListFlex = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 0.4rem;

  &:nth-child(n + 3) {
    margin-top: 0.625rem;
  }

  img {
    display: block;
    width: 50%;
    height: 12.5rem;
    border-radius: 0.4rem 0 0 0.4rem;
  }
  div {
    margin-left: 1em;
  }

  p {
    line-height: 1.3;
    margin: 1.1em 0;

    &:first-child {
      margin-top: 0;
    }
  }

  .deathLineInfo {
    font-size: 0.875rem;
  }
  .deathLineTime {
    border-radius: 1.4em;
    padding: 0.3em 0.6em;
    background-color: ${(props) => props.theme.greenColor.green3};
    margin-right: 0.5em;
  }
`;
