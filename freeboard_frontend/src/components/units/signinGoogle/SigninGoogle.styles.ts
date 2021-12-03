import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 50px;
`;

export const WrapperTitle = styled.div`
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
  color: #636363;
  text-shadow: 6px 6px 6px lightgray;
`;

export const GoogleLoginBtnWrapper = styled.div`
  border: 3px solid lightgray;
  border-radius: 15px;
  width: 300px;
  height: 300px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignInIdBtn = styled.button`
  border: none;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  margin-top: 30px;
  font-size: 17px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
