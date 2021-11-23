import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function FuntionalLifeCycle() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  //   componentDidMount 와 동일
  //   [] <= 의존성 배열 (dependency array)
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();

    // componentWillUnmount와 동일
    return () => {
      console.log("잘가요~");
    };
  }, []);

  //   componentDidUpdate 와 비슷
  //   []가 없을 때, 화면의 하나라도 바뀌면 다시 실행
  useEffect(() => {
    console.log("수정됨");
  });

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>페이지 이동</button>
    </>
  );
}
