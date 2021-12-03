import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickLogo() {
    router.push("/boards");
  }

  function onClickMoveToSignin() {
    router.push("/signinGoogle");
  }

  function onClickMoveToSignup() {
    router.push("/signup");
  }

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToSignin={onClickMoveToSignin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
