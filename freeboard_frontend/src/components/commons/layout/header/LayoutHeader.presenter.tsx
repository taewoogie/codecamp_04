import {
  Wrapper,
  UserMenuWrapper,
  UserMenu,
  UserPicture,
  UserName,
  UserName2,
  InnerButton,
  InnerLogoWrapper,
  InnerLogo,
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
      <UserMenuWrapper>
        {props.fetchUser?.fetchUserLoggedIn._id ? (
          <UserMenu>
            {props.fetchUser.fetchUserLoggedIn.picture ? (
              <UserPicture>
                {props.fetchUser?.fetchUserLoggedIn?.picture}
              </UserPicture>
            ) : (
              <UserPicture src="/images/avatar.png" />
            )}
            <UserName>{props.fetchUser?.fetchUserLoggedIn.name}</UserName>
            <UserName2>님 환영합니다!</UserName2>
            <InnerButton onClick={props.onClickDeleteAtk}>Log out</InnerButton>
          </UserMenu>
        ) : (
          <UserMenu>
            <InnerButton onClick={props.onClickMoveToSignin}>
              Sign in
            </InnerButton>
            <InnerButton onClick={props.onClickMoveToSignup}>
              Sign up
            </InnerButton>
          </UserMenu>
        )}
      </UserMenuWrapper>
      <InnerLogoWrapper>
        <InnerLogo onClick={props.onClickLogo} src="/images/pngwing.com.png" />
      </InnerLogoWrapper>
    </Wrapper>
  );
}
