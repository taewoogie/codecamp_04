import GoogleLoginBtn from "../../commons/googleLoginBtn";
import {
  Wrapper,
  WrapperTitle,
  GoogleLoginBtnWrapper,
  SignInIdBtn,
} from "./SigninGoogle.styles";

export default function SignInIDUI(props: any) {
  return (
    <Wrapper>
      <WrapperTitle>Google Login</WrapperTitle>
      <GoogleLoginBtnWrapper>
        <GoogleLoginBtn />
      </GoogleLoginBtnWrapper>

      {/* 아이디 비밀번호로 입력 하기 */}
      <SignInIdBtn onClick={props.onClickSigninId}>
        Sign in to use ID
      </SignInIdBtn>
    </Wrapper>
  );
}
