import { memo } from "react";

interface IProps {
  countState: number;
}

const MemoizationPresenterPage = (props: IProps) => {
  console.log("======================");
  console.log("프리젠터가 rendering 됩니다.");
  console.log("======================");
  return (
    <>
      <div>============================</div>
      <div>이것은 Presenter 입니다.</div>
      <div>============================</div>
    </>
  );
};

export default memo(MemoizationPresenterPage);
