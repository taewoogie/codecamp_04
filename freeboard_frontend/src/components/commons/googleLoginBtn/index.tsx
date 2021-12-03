import router from "next/router";
import React from "react";
import { GoogleLogin, useGoogleLogin } from "react-google-login";

// const clientId = "위의 Google Cloud Platform에서 발급받은 Client ID";
const clientId =
  "899539617528-lrr87uhk2tn0b45mpo6gp3tbib9gk2pt.apps.googleusercontent.com";

// export default function GoogleLoginBtn({ onGoogleLogin }) {
export default function GoogleLoginBtn() {
  const onSuccess = (response: any) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;

    alert("로그인 성공!");
    console.log(onSuccess);
    router.push("/boards");
  };

  const onFailure = (error: any) => {
    console.log(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}
