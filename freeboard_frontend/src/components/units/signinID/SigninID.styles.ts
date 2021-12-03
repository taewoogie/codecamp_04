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
export const SignInWrapper = styled.div`
  border: 3px solid lightgray;
  border-radius: 15px;
  width: 300px;
  height: 400px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;
export const IdWrapper = styled.div``;
export const PwdWrapper = styled.div``;
export const Input = styled.input`
  width: 230px;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 5px 10px;
  :focus {
    outline: none;
  }
`;
export const IdError = styled.div`
  color: red;
  padding: 7px;
`;
export const PwdError = styled.div`
  color: red;
  padding: 7px;
`;
export const SignInConfirmBtn = styled.button`
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
