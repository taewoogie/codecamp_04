import DOMPurify from "dompurify";

interface IProductDetailUI {
  onClickMoveToProductList: () => void;
  onClickMoveToProductUpdate: () => void;
  data: any;
}

export default function ProductDetailUI(props: IProductDetailUI) {
  console.log("Detail UI");
  console.log(props.data);
  return (
    <>
      <h1>상품 상세 페이지</h1>

      <h1>상품명</h1>
      <div>{props.data?.fetchUseditem.name}</div>

      <h1>한줄요약</h1>
      <div>{props.data?.fetchUseditem.remarks}</div>

      <h1>상품설명</h1>

      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              String(props.data?.fetchUseditem.contents)
            ),
          }}
        />
      ) : (
        <div />
      )}

      <h1>판매 가격</h1>
      <div>{props.data?.fetchUseditem.price}</div>

      <h1>태그 입력</h1>
      <div>{props.data?.fetchUseditem.tags}</div>
      <div>
        <button onClick={props.onClickMoveToProductList}>목록으로</button>
        <button onClick={props.onClickMoveToProductUpdate}>수정하기</button>
      </div>
    </>
  );
}
