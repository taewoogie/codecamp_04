// Initialize Cloud Firestore through Firebase
import { Modal } from "antd";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

const LoginUI = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyB3FSnWLebiGYOvA-GlEbdDwPfMW8Tvq0M",
    authDomain: "woogie-project.firebaseapp.com",
    projectId: "woogie-project",
  };

  const firebaseApp = initializeApp(firebaseConfig, "woogie-project");
  const db = getFirestore(firebaseApp);
  const docRef = doc(db, "users", "u0Z8syvBXaDn9aly3L5U");

  // // 데이터 불러오기
  const onClickFetchUser = async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data : ", docSnap.data());
      console.log(" data : ", docSnap.data().Email);
      console.log(" data : ", docSnap.data().Password);

      setEmail(docSnap.data().Email);
      setPassword(docSnap.data().Password);

      Modal.success({ title: "조회 성공했습니다." });
    } else {
      Modal.error({ title: "조회에 실패했습니다." });
    }
  };

  return (
    <>
      <div>Firebase 데이터 불러오기</div>
      이메일 : <span>{Email}</span>
      <br />
      비밀번호 : <span>{Password}</span>
      <br />
      <button onClick={onClickFetchUser}>불러오기</button>
      <br />
      <br />
      <span></span>
    </>
  );
};
export default LoginUI;
