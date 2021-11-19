import { useMutation , gql } from "@apollo/client";
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

export default function  InputsSpreadPage() {

    const [createBoard] = useMutation(CRERATE_BOARD);

    // 아래 기능 리펙토리
    const [ myInputs , setMyInputs ] = useState({
        writer   : "" ,
        title    : "" ,
        Contents : ""
    })

    const onChangeMyInputs = (event) => {
        setMyInputs({
            ...myInputs,
            [event.target.name] : event.target.value

        })
    }

    // const [Writer, setWriter] = useState("");
  
    // const [Title, setTitle] = useState("");
  
    // const [Contents, setContents] = useState("");
  
    // const onChangeWriter = (event) => {
    //   setWriter(event.target.value);
    // };
  
    // const onChangeTitle = (event) => {
    //   setTitle(event.target.value);
    // };
  
    // const onChangeContents = (event) => {
    //   setContents(event.target.value);
    // };
  
    const Request = async () => {
      const result = await createBoard({
          variables: { ...myInputs }
      });
      console.log(result);
      console.log(result.data.createBoard.message);
    };

    return(
        <>
        작성자 : <input type="text"  name = "writer"   onChange={onChangeMyInputs} /> <br />
        제목  : <input type="text"  name = "title"     onChange={onChangeMyInputs} /> <br />
        내용  : <input type="text"  name = "contents"  onChange={onChangeMyInputs} /> <br />
        <button onClick={Request}>게시물 등록하기</button>
      </>
    )
    
}