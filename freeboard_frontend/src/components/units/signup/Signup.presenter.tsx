import {
  Wrapper,
  WrapperTitle,
  SignupWrapper,
  EmailWrapper,
  Email,
  EmailError,
  NameWrapper,
  Name,
  NameError,
  PasswordWrapper,
  Password,
  PasswordError,
  SignUpConfirmBtn,
} from "./Signup.styles";

export default function SignupUI(props) {
  return (
    <Wrapper>
      <WrapperTitle>Sign up</WrapperTitle>

      <SignupWrapper>
        <EmailWrapper>
          <Email
            type="text"
            placeholder="이메일"
            onChange={props.onChangeEmail}
          />
          <EmailError>{props.emailError}</EmailError>
        </EmailWrapper>
        <NameWrapper>
          <Name type="text" placeholder="name" onChange={props.onChangeName} />
          <NameError>{props.nameError}</NameError>
        </NameWrapper>
        <PasswordWrapper>
          <Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <PasswordError>{props.passwordError}</PasswordError>
        </PasswordWrapper>
      </SignupWrapper>
      <SignUpConfirmBtn onClick={props.onClickSignUp}>Sign Up</SignUpConfirmBtn>
    </Wrapper>
  );
}
