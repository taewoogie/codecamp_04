import { useState } from "react";

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const onChangeFile = (event) => {
    const myFile = event.target.files[0];
    console.log(myFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
    };
  };

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />;
    </>
  );
}
