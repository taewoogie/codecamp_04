import { useEffect, useRef, useState } from "react";

const ImagePreloadPage = () => {
  const divRef = useRef(null);
  const [myLoadedImage, setMyLoadedImage] = useState();

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setMyLoadedImage(img);
    };
  }, []);

  const onClickButton = () => {
    divRef.current?.appendChild(myLoadedImage);
  };

  return (
    <>
      <h1>안녕하세요 사이트에 오신것을 환영합니다</h1>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보영주기</button>
      {/* <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" /> */}
    </>
  );
};
export default ImagePreloadPage;
