// Initialize Cloud Firestore through Firebase
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { actionCodeSettings } from "../_app";

const LoginUI = () => {
  const router = useRouter();
  const auth = getAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [isPwd, setIsPwd] = useState(false);

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onChangePasswordConfirm = (event: any) => {
    setPasswordConfirm(event.target.value);

    console.log(passwordConfirm);
    if (password === event.target.value) {
      setIsPwd((prev) => !prev);
    }
  };

  // 인증 이메일 전송하기
  // const onClickSendCode = () => {
  //   const auth = getAuth();
  //   sendSignInLinkToEmail(auth, email, actionCodeSettings)
  //     .then(() => {
  //       // The link was successfully sent. Inform the user.
  //       // Save the email locally so you don't need to ask the user for it again
  //       // if they open the link on the same device.
  //       window.localStorage.setItem("emailForSignIn", email);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ...
  //       Modal.error({ title: errorCode, content: errorMessage });
  //     });
  // };

  // 회원가입
  const onClickSubmit = () => {
    if (password !== passwordConfirm && !isPwd) {
      Modal.error({ content: "비밀번호를 일치하게 입력해주세요." });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        Modal.success({
          title: "Welconme to Pairing Mate",
          content: "회원가입을 축하합니다.",
        });
        router.push("/firebase-create-user-email-success");
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          Modal.error({
            title: "Email already in use!",
            content: "이미 사용 되고 있는 이메일 입니다.",
          });
        } else if (errorCode === "auth/weak-password") {
          Modal.error({
            title: "Weak Password!",
            content: "비밀번호는 6자리 이상으로 설정 해주세요",
          });
        } else if (errorCode === "auth/invalid-email") {
          Modal.error({
            title: "Invalid Email!",
            content: "Email 형식이 틀립니다",
          });
        }
      });
  };

  return (
    <>
      <div>Firebase에 데이터 추가하기</div>
      이메일 :
      <input
        type="text"
        onChange={onChangeEmail}
        onKeyUp={onChangeEmail}
        required
      />
      {/* <button onClick={onClickSendCode}>인증번호 전송</button> */}
      <br />
      비밀번호 :
      <input
        type="password"
        onChange={onChangePassword}
        onKeyUp={onChangePassword}
      />
      <br />
      비밀번호확인 :
      <input
        type="password"
        onChange={onChangePasswordConfirm}
        onKeyUp={onChangePasswordConfirm}
      />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
    </>
  );
};
export default LoginUI;
