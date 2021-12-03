import { useMutation } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import SignupUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.queries";

export default function Signup() {
  const [createUser] = useMutation(CREATE_USER);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value !== "") setEmailError("");
  };
  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value !== "") setNameError("");
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") setPasswordError("");
  };

  const onClickSignUp = async () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
    }
    if (!name) {
      setNameError("이름을 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!/\w+@\w+\.\w+/.test(email)) {
      alert("이메일 형식이 어긋납니다. 다시 입력 해주세요!");
      return;
    }
    if (email && name && password) {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            name,
            password,
          },
        },
      });
      console.log(result);
      alert("회원가입을 축하합니다!");
      router.push(`/signinID`);
    }
  };

  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      onClickSignUp={onClickSignUp}
    />
  );
}
