import { useContext } from "react";
import { MyContext } from "../../../../pages/21-04-context-api";

export default function MyBoardWriteUI() {
  // Global State 에서 context 사용 시 useContext 로 사용한다
  const { isEdit } = useContext(MyContext);

  console.log(isEdit);

  //   return <div>{props.isEdit ? "수정하기" : "등록하기"}</div>;
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
