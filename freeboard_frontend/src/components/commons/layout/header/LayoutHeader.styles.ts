import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
`;

export const UserMenuWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const UserMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export const UserPicture = styled.img`
  margin-right: 7px;
  width: 30px;
  height: 30px;
`;

export const UserName = styled.span`
  margin-right: 7px;
  line-height: 30px;
  font-weight: 700;
`;

export const UserName2 = styled.span`
  margin-right: 7px;
  line-height: 30px;
`;

export const InnerButton = styled.button`
  border: none;
  border-radius: 5px;
  margin-right: 7px;
  color: #333;
  cursor: pointer;
  :hover {
    overflow: hidden;
    transform: scale(1.05, 1.05);
    transition-duration: 0.5s;
  }
`;

export const InnerLogoWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerLogo = styled.img`
  width: 150px;
  cursor: pointer;
`;
