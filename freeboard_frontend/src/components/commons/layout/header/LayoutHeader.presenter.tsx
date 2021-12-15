import { useQuery } from "@apollo/client";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

interface IProps {
  onClickLogo: () => void;
  onClickMoveToSignin: () => void;
  onClickMoveToSignup: () => void;
  onClickDeleteAtk: () => void;
  fetchUser: any;
}
export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>💎 Woogie</InnerLogo>
        {props.fetchUser?.fetchUserLoggedIn._id ? (
          <div>
            <span>{props.fetchUser?.fetchUserLoggedIn?.picture}</span>
            <span>{props.fetchUser?.fetchUserLoggedIn.name}님 환영합니다!</span>
            <InnerButton onClick={props.onClickDeleteAtk}>Log out</InnerButton>
          </div>
        ) : (
          <div>
            <InnerButton onClick={props.onClickMoveToSignin}>
              Sign in
            </InnerButton>
            <InnerButton onClick={props.onClickMoveToSignup}>
              Sign up
            </InnerButton>
          </div>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
