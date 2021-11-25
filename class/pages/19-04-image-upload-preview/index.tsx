import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // 사용 하지 않는 파라미터는 지울 수 있으나 콤마를 꼭 넣어줘야한다.
  const [myImages, setMyImages] = useState<string[]>([]);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  };

  const onClickMyImages = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightgray",
        }}
        onClick={onClickMyImages}
      >
        <img
          src={`https://storage.googleapis.com/${myImages[0]}`}
          style={{ width: "100px", height: "100px" }}
        />
        <button style={{ border: "1px solid black" }}>이미지 업로드</button>
      </div>
      <input
        ref={fileRef}
        style={{
          display: "none",
          width: "300px",
          height: "100px",
        }}
        type="file"
        onChange={onChangeFile}
      />
    </>
  );
}
