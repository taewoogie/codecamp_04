import styled from "@emotion/styled";
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
export const Wrapper = styled.div`
  background-color: #dcedc8;
`;

export const MenuItemWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #333;
`;

export const MenuItem = styled.div`
  /* margin: 10px 60px; */
  cursor: pointer;
  :hover {
    overflow: hidden;
    transform: scale(1.05, 1.05);
    transition-duration: 0.5s;
  }
`;
