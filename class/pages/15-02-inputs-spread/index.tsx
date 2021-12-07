import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationBoard3Page() {
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  //   const [myWriter, setMyWriter] = useState("");
  //   const [myTitle, setMyTitle] = useState("");
  //   const [myContents, setMyContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  function onChnageMyInputs(event) {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
    });
  }
  //   function onChangeMyWriter(event) {
  //     setMyWriter(event.target.value);
  //   }
  //   function onChangeMyTitle(event) {
  //     setMyTitle(event.target.value);
  //   }
  //   function onChangeMyContents(event) {
  //     setMyContents(event.target.value);
  //   }
  async function zzz() {
    const result = await createBoard({
      variables: {
        ...myInputs,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    // setAaa(result.data.createBoard.message)
  }
  return (
    <>
      작성자:
      <input type="text" name="writer" onChange={onChnageMyInputs} />
      제목:
      <input type="text" name="title" onChange={onChnageMyInputs} />
      내용:
      <input type="text" name="contents" onChange={onChnageMyInputs} />
      <button onClick={zzz}>게시물 등록하기</button>
      {/* <div>{aaa}</div>
            <button onClick={zzz}>graphql-API 요청하기</button> */}
    </>
  );
}
