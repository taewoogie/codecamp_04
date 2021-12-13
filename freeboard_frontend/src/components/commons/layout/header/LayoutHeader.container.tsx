import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickDeleteAtk = async () => {
    localStorage.removeItem("refreshToken");
    const result = await logoutUser();
    console.log(result);
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
