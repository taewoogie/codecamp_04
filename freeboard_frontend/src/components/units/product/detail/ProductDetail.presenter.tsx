export default function ProductDetailUI(props) {
  return (
    <>
      <h1>상품 상세 페이지</h1>

      <h1>상품명</h1>
      <input type="text" placeholder="상품명을 작성해주세요" />

      <h1>한줄요약</h1>
      <input type="text" placeholder="한줄요약을 작성해주세요" />

      <h1>상품설명</h1>
      <textarea placeholder="상품을 설명해주세요" />

      <h1>판매 가격</h1>
      <input type="text" placeholder="판매 가격을 입력해주세요." />

      <h1>태그 입력</h1>
      <input type="text" placeholder="#태그 #태그 #태그" />

      <button onClick={props.onClickMoveToProductList}>목록으로</button>
    </>
  );
}
