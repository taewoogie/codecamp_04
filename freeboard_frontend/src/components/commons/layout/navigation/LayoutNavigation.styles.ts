import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  /* background-color: #ffcce6; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #333;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    overflow: hidden;
    transform: scale(1.05, 1.05);
    transition-duration: 0.5s;
  }
`;
