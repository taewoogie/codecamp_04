// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, collection } from "firebase/firestore";
import { useState } from "react";

const LoginUI = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const firebaseConfig = {
    apiKey: "AIzaSyB3FSnWLebiGYOvA-GlEbdDwPfMW8Tvq0M",
    authDomain: "woogie-project.firebaseapp.com",
    projectId: "woogie-project",
  };
  const firebaseApp = initializeApp(firebaseConfig, "woogie-project");

  const db = getFirestore(firebaseApp);

  // 데이터 추가하기
  const onClickSubmit = async () => {
    // set방식
    const userInfo = collection(db, "users");
    await setDoc(doc(userInfo), {
      Email,
      Password,
    });
  };

  return (
    <>
      <div>Firebase에 데이터 추가하기</div>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
    </>
  );
};
export default LoginUI;
