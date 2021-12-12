import { useEffect } from "react";
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
}
export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>💎 Woogie</InnerLogo>

        <div>
          <InnerButton onClick={props.onClickMoveToSignin}>Sign in</InnerButton>
          <InnerButton onClick={props.onClickMoveToSignup}>Sign up</InnerButton>
          <InnerButton onClick={props.onClickDeleteAtk}>Log out</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
