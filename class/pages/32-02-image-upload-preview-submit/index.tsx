import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState("");

  const onChangeFile = (event) => {
    const myFile = event.target.files[0];
    console.log(myFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
      setFile(myFile);
    };
  };

  const onClickSubmit = async () => {
    let myImageUrl = "";
    // 1. 파일 업로드
    if (file) {
      const result1 = await uploadFile({
        variables: {
          file,
        },
      });
      myImageUrl = result1.data?.uploadFile.url || "";
    }

    // 2. 업로드 된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "태욱",
          password: "1234",
          title: "안녕",
          contents: "이미지 업로드",
          images: [myImageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />;
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
