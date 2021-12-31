// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const LoginUI = () => {
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
    }
  };

  return (
    <>
      <div>Firebase 데이터 불러오기</div>
      이메일 : <span></span>
      <br />
      비밀번호 : <span></span>
      <br />
      <button onClick={onClickFetchUser}>불러오기</button>
      <br />
      <br />
      <span></span>
    </>
  );
};
export default LoginUI;
