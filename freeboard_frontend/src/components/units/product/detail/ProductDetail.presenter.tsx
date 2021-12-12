import DOMPurify from "dompurify";
import PaymentPage from "../../../commons/payment";
import Payment from "../../../commons/payment/payment.container";

interface IProductDetailUI {
  onClickMoveToProductList: () => void;
  onClickMoveToProductUpdate: () => void;
  data: any;
}

export default function ProductDetailUI(props: IProductDetailUI) {
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
      <div>
        {props.data?.fetchUseditem.price
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}
      </div>

      {/* <h1>태그 입력</h1>
      <div>{props.data?.fetchUseditem.tags}</div> */}
      <div style={{ display: "flex" }}>
        <button onClick={props.onClickMoveToProductList}>목록으로</button>
        <button onClick={props.onClickMoveToProductUpdate}>수정하기</button>
        <Payment data={props.data} />
        {/* <button onClick={props.onClickMoveToProductPay}>결제하기</button> */}
      </div>
    </>
  );
}
