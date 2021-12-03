import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/Input01";
import {
  Wrapper,
  WrapperTitle,
  SignInWrapper,
  IdWrapper,
  PwdWrapper,
  IdError,
  PwdError,
} from "./SigninID.styles";
import { FormValues } from "./SigninID.types";

export default function SignInIdUI(props: FormValues) {
  return (
    <Wrapper>
      <WrapperTitle>ID Login</WrapperTitle>
      <form onSubmit={props.handleSubmit(props.onClickSignIn)}>
        <SignInWrapper>
          <IdWrapper>
            이메일
            <br />
            <Input01 type="text" register={props.register("Email")} />
            <IdError>{props.formState.errors.Email?.message}</IdError>
          </IdWrapper>
          <PwdWrapper>
            비밀번호
            <br />
            <Input01 type="password" register={props.register("Password")} />
            <PwdError>{props.formState.errors.Password?.message}</PwdError>
          </PwdWrapper>
        </SignInWrapper>

        <Button01
          type="submit"
          name="Sign In"
          isValid={props.formState.isValid}
        />
      </form>
    </Wrapper>
  );
}
