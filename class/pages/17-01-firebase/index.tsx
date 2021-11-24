import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  async function onClickSubmit() {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "제목",
      contents: "내용",
    });
  }

  async function onClickFetch() {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  }

  return (
    <>
      <div>firebase 연습 페이지 입니다.</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
