import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPage(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // 사용 하지 않는 파라미터는 지울 수 있으나 콤마를 꼭 넣어줘야한다.
  const [myImages, setMyImages] = useState<string[]>([]);

  // console.log("<<<<< Index tsx = props >>>>> ");
  // console.log(props);

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
  console.log("<<<<<<< index.tsx MyImages >>>>>> ");
  console.log(myImages);
  props.setImages(myImages);

  const onClickMyImages = () => {
    fileRef.current?.click();
  };

  console.log("props.data");
  console.log(props.data);

  return (
    <>
      {myImages[0] ? (
        <div
          style={{
            width: "78px",
            height: "78px",
            backgroundColor: "lightgray",
            marginRight: "15px",
          }}
          onClick={onClickMyImages}
        >
          <img
            style={{ width: "78px", height: "78px" }}
            src={`https://storage.googleapis.com/${myImages[0]}`}
          />
        </div>
      ) : (
        <div
          style={{
            width: "78px",
            height: "78px",
            backgroundColor: "lightgray",
            marginRight: "15px",
          }}
          onClick={onClickMyImages}
        >
          <img
            style={{ width: "78px", height: "78px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}
          />
        </div>
      )}
      <input
        ref={fileRef}
        style={{
          display: "none",
          width: "100px",
          height: "100px",
        }}
        type="file"
        onChange={onChangeFile}
      />
    </>
  );
}
