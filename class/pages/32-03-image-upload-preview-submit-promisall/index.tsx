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
  const [file, setFile] = useState([]);

  const onChangeFile = (event) => {
    const myFile = event.target.files[0];
    console.log(myFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
      setFile((prev) => [...prev, myFile]);
    };
  };

  const onClickSubmit = async () => {
    let myImageUrls = [];
    // 1. 파일 업로드
    if (file.length) {
      // 동시에 올리기 테스트
      const start = performance.now();
      const result = await Promise.all([
        //  vs Promise.race([...]) 10개 동시에 다 뿌리고 먼저 끝난 것 하나만 캐치
        await uploadFile({ variables: { file: file[0] } }),
        await uploadFile({ variables: { file: file[0] } }),
        await uploadFile({ variables: { file: file[0] } }),
        await uploadFile({ variables: { file: file[0] } }),
        await uploadFile({ variables: { file: file[0] } }),
        await uploadFile({ variables: { file: file[0] } }),
        await uploadFile({ variables: { file: file[0] } }),
        await uploadFile({ variables: { file: file[0] } }),
      ]);
      const end = performance.now();
      console.log(end - start);

      // result = [result1, result2, result3, .... result10]
      myImageUrls = result.map((el) => el.data?.uploadFile.url);

      // 각각 올리기 테스트
      // const start = performance.now()
      // await uploadFile({ variables: { file: file[0] }});
      // await uploadFile({ variables: { file: file[0] }});
      // await uploadFile({ variables: { file: file[0] }});
      // await uploadFile({ variables: { file: file[0] }});
      // await uploadFile({ variables: { file: file[0] }});
      // await uploadFile({ variables: { file: file[0] }});
      // await uploadFile({ variables: { file: file[0] }});
      // await uploadFile({ variables: { file: file[0] }});

      // const end = performance.now();
      // console.log(end - start);

      // const result1 = await uploadFile({
      //   variables: {
      //     file: file[0],
      //   },
      // });
      // myImageUrls[0] = result1.data?.uploadFile.url || "";

      // const result2 = await uploadFile({
      //   variables: {
      //     file: file[1],
      //   },
      // });
      // myImageUrls[1] = result2.data?.uploadFile.url || "";

      // const result3 = await uploadFile({
      //   variables: {
      //     file: file[2],
      //   },
      // });
      // myImageUrls[2] = result3.data?.uploadFile.url || "";

      // 2. 업로드 된 파일로 게시물 등록
      const result2 = await createBoard({
        variables: {
          createBoardInput: {
            writer: "태욱",
            password: "1234",
            title: "안녕",
            contents: "이미지 업로드",
            images: [...myImageUrls],
          },
        },
      });
      console.log(result2.data?.createBoard._id);
    }
  };
  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} multiple />;
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
