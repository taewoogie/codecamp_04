import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

const MemoizationContainerPage = () => {
  console.log("컨테이너가 rendering 됩니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const randomValue = useMemo(() => Math.random(), []);
  console.log(randomValue);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onClickCountState = () => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  };
  return (
    <>
      <div>============================</div>
      <div>이것은 Container 입니다.</div>

      <div> 카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트 (let) + 1 올리기 </button>

      <div> 카운트(state) : {countState}</div>
      <button onClick={onClickCountState}>카운트 (state) + 1 올리기 </button>
      {/* <div>============================</div> */}
      <MemoizationPresenterPage countState={countState} />
    </>
  );
};
export default MemoizationContainerPage;
