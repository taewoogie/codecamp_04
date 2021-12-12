import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickDeleteAtk = () => {
    localStorage.removeItem("accessToken");
    alert("로그아웃 되었습니다.");
    router.push("/signinID");
  };

  const onClickLogo = () => {
    router.push("/boards");
  };

  const onClickMoveToSignin = () => {
    router.push("/signinGoogle");
  };

  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToSignin={onClickMoveToSignin}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickDeleteAtk={onClickDeleteAtk}
    />
  );
}
