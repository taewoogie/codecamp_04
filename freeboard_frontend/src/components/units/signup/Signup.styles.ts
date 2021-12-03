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
export const SignupWrapper = styled.div`
  width: 400px;
  height: 400px;
  padding: 30px;
  /* background-color: #ffc0cb; */
  border: 3px solid lightgray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 230px;
  height: 60px;
  /* background-color: gray; */
`;
export const Email = styled.input`
  border: 1px solid lightgray;
  border-radius: 15px;
  margin-bottom: 5px;
  padding: 5px 10px;
  :focus {
    outline: none;
  }
`;
export const EmailError = styled.span`
  margin-left: 10px;
  color: red;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 230px;
  height: 60px;
`;
export const Name = styled.input`
  border: 1px solid lightgray;
  border-radius: 15px;
  margin-bottom: 5px;
  padding: 5px 10px;
  :focus {
    outline: none;
  }
`;
export const NameError = styled.span`
  margin-left: 10px;
  color: red;
`;
export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 230px;
  height: 60px;
`;
export const Password = styled.input`
  border: 1px solid lightgray;
  border-radius: 15px;
  margin-bottom: 5px;
  padding: 5px 10px;
  :focus {
    outline: none;
  }
`;
export const PasswordError = styled.span`
  margin-left: 10px;
  color: red;
`;
export const SignUpConfirmBtn = styled.button`
  border: none;
  border-radius: 15px;
  width: 400px;
  height: 50px;
  margin-top: 30px;
  font-size: 17px;
  cursor: pointer;
  :hover {
    background-color: #ffcce6;
    color: white;
  }
`;
