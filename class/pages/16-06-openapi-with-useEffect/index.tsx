import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffect() {
  const [dogUrl, setDogUrl] = useState("");
  const [state, setstate] = useState(false);

  const onClickChangeImg = () => {
    setstate((prev) => !prev);
  };

  useEffect(() => {
    async function fetchDog() {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogUrl(result.data.message);
    }
    fetchDog();
  }, [state]);
  return (
    <>
      <div>OPEN API 연습</div>
      <img src={dogUrl} />
      <br />
      <button onClick={onClickChangeImg}>사진교체</button>
    </>
  );
}
