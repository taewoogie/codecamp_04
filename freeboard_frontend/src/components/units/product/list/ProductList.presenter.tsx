export default function ProductListUI(props) {
  return (
    <>
      <h1>베스트 상품</h1>
      <div>
        <button onClick={props.onClickMoveToProductNew}>상품 등록하기</button>
        <button onClick={props.onClickMoveToProductDetail}>
          상품 상세하기
        </button>
      </div>
    </>
  );
}
