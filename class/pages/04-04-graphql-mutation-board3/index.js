import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CRERATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationBoard3Page() {
  const [createBoard] = useMutation(CRERATE_BOARD);

  const [Writer, setWriter] = useState("");

  const [Title, setTitle] = useState("");

  const [Contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const Request = async () => {
    const result = await createBoard({
      variables: {
        writer: Writer,
        title: Title,
        contents: Contents,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} /> <br />
      제목 : <input type="text" onChange={onChangeTitle} /> <br />
      내용 : <input type="text" onChange={onChangeContents} /> <br />
      <button onClick={Request}>게시물 등록하기</button>
    </>
  );
}
