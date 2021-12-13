import axios from "axios";
import { useState } from "react";

export default function CallBackPromiseAsyncAwaitPage() {
  const [myCallback, setMyCallback] = useState([]);
  const [myPromise, setMyPromise] = useState([]);
  const [myAsyncAwait, setMyAsyncAwait] = useState([]);

  const onClickCallback = () => {
    const resultCallback = new XMLHttpRequest();
    resultCallback.open("get", "http://numbersapi.com/random?min=1&max=200");
    resultCallback.send();
    resultCallback.addEventListener("load", (res: any) => {
      //   console.log(res);
      const num = res.target.response.split(" ")[0];
      console.log(num);

      const newReq = new XMLHttpRequest();
      newReq.open("get", `https://koreanjson.com/posts/${num}`);
      newReq.send();
      newReq.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const newNewReq = new XMLHttpRequest();
        newNewReq.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        newNewReq.send();
        newNewReq.addEventListener("load", (res: any) => {
          console.log(res);
          const result = JSON.parse(res.target.response);
          setMyCallback(result);
        });
      });
    });
  };

  // axios 직접 만들 시
  // new Promise (( resolve , reject ) => {
  //     // 외부에 요청하기 또는 비동기작업하기
  //     //  if(성공) resolve()
  //     //  if(실패) reject()

  // });

  // Promise chainning
  const onClickPromise = () => {
    console.log("1번");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("3번");
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setMyPromise(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("2번");
  };

  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    const res3 = await axios.get(
      `http://koreanjson.com/posts?userId=${userId}`
    );
    setMyAsyncAwait(res3.data);
  };

  console.log(myCallback);
  return (
    <>
      <div>
        <h1>콜백과 친구들</h1>
        <div>
          결과:
          {myCallback?.map((el: any) => (
            <div key={el.title}>{el.title}</div>
          ))}
        </div>
        <button onClick={onClickCallback}>콜백 요청하기</button>

        <div>
          결과:
          {myPromise.map((el: any) => (
            <div key={el.title}>{el.title}</div>
          ))}
        </div>
        <button onClick={onClickPromise}>프로미스 요청하기</button>

        <div>
          결과:
          {myAsyncAwait.map((el: any) => (
            <div key={el.title}>{el.title}</div>
          ))}
        </div>
        <button onClick={onClickAsyncAwait}>에이씨ㅇ크 요청하기</button>
      </div>
    </>
  );
}
