import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickBtn = () => {
    // 3. 화살표함수에서 매개변수 바꾸기
    setCount((kwontaewook) => kwontaewook + 1);

    //      2. 일반 함수
    //     setCount(function (prev) {
    //       // 로직 추가하기
    //       return prev + 1;
    //     });

    //     1. 화살표 함수
    //     // setCount((prev) => prev + 1);
    //   };
  };
  return (
    <>
      <div>현재 카운트 : {count}</div>
      <button onClick={onClickBtn}>카운트 올려올려!</button>
    </>
  );
}
