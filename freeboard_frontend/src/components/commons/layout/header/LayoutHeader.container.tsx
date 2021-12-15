import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { LOGOUT_USER, FETCH_USER_LOGGEDIN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  // ===============================
  //          로그인 유저 정보
  // ===============================
  const { data: fetchUser } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

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
      fetchUser={fetchUser}
      onClickLogo={onClickLogo}
      onClickMoveToSignin={onClickMoveToSignin}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickDeleteAtk={onClickDeleteAtk}
    />
  );
}
