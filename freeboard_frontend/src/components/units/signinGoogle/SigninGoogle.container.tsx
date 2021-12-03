import router from "next/router";
import SignInUI from "./SigninGoogle.presenter";

export default function SignInGoogle() {
  const onClickSigninId = () => {
    router.push("/signinID");
  };

  return <SignInUI onClickSigninId={onClickSigninId} />;
}
