import styled from "styled-components";

const NotFoundWrapper = styled.div`
  height: calc(100vh - 17.813rem);
  background-color: #fff;
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.4;
  color: ${(props) => props.theme.greenColor.green5};
`;

export default function NotFound() {
  return (
    <NotFoundWrapper>
      404
      <br />
      NOT FOUND
    </NotFoundWrapper>
  );
}
