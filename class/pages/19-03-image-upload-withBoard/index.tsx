import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // 사용 하지 않는 파라미터는 지울 수 있으나 콤마를 꼭 넣어줘야한다.
  const [myImages, setMyImages] = useState<string[]>([]);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: myImages,
        },
      },
    });
    alert("등록 성공");
    console.log(result);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (!myFile?.size) {
      alert("파일이 없습니다.");
      return;
    }

    // 5MB 기준 계산법
    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일이 너무 큽니다. (크기 제한 : 5MB ");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png 파일만 업로드 가능합니다.");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  };

  return (
    <>
      <h1>이미지 업로드</h1>
      <input type="file" onChange={onChangeFile} />
      <br />
      writer : <input type="text" onChange={onChangeWriter} />
      <br />
      password : <input type="text" onChange={onChangePassword} />
      <br />
      title : <input type="text" onChange={onChangeTitle} />
      <br />
      contents : <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
