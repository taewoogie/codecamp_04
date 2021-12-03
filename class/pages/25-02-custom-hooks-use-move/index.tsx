import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMovePage() {
  const { moveToPage } = useMoveToPage();
  return (
    <>
      <div>커스텀 훅 연습 - 페이지 이동</div>
      <button onClick={moveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={moveToPage("/product")}>마켓으로 이동</button>
      <button onClick={moveToPage("/mypage")}>마이페이지로 이동</button>
    </>
  );
}
