import { useEffect, useState } from "react";

export default function UseEffectDependencyArray() {
  console.log("rendering~");
  const [count, setCount] = useState(0);

  // 1번 case
  // 최초 1번 실행 (= DisMount)

  useEffect(() => {
    console.log("최초 1회 실행됨");
  }, []);

  // 2번 case
  // 의존성 배열의 count 감지 후 재실행

  useEffect(() => {
    console.log("count가 변경되면 재실행");
  }, [count]);

  // 3번 case
  // 최초 랜더링 + 1

  // useEffect(() => {
  //   setCount(100);
  // }, []);

  // 4번 case
  // 무한반복

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
    </>
  );
}
