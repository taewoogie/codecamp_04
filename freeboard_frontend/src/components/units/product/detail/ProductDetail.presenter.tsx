import DOMPurify from "dompurify";
import PaymentPage from "../../../commons/payment";
import Payment from "../../../commons/payment/payment.container";

interface IProductDetailUI {
  onClickMoveToProductList: () => void;
  onClickMoveToProductUpdate: () => void;
  onClickMoveToProductDelete: () => void;
  data: any;
  fetchUser: any;
}

export default function ProductDetailUI(props: IProductDetailUI) {
  // =====================================
  //          상품 등록 유저 정보 (판매자 ID 값)
  // =====================================
  const sellerId = props.data?.fetchUseditem.seller._id;

  // ===========================================
  //          로그인 유저 정보 (현재 나의 ID 값)
  // ===========================================
  const myId = props.fetchUser?.fetchUserLoggedIn._id;

  return (
    <>
      <h1>상품 상세 페이지</h1>

      <h1>상품명</h1>
      <div>{props.data?.fetchUseditem.name}</div>

      <h1>한줄요약</h1>
      <div>{props.data?.fetchUseditem.remarks}</div>

      <h1>판매 가격</h1>
      <div>
        {props.data?.fetchUseditem.price
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}
      </div>

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

      <h1>이미지</h1>
      <div>
        {props.data?.fetchUseditem.images
          ?.filter((el: string) => el)
          .map((el: string) => (
            <img key={el} src={`https://storage.googleapis.com/${el}`} />
          ))}
      </div>

      <div style={{ display: "flex" }}>
        <button onClick={props.onClickMoveToProductList}>목록으로</button>

        {sellerId === myId ? (
          <>
            <button onClick={props.onClickMoveToProductUpdate}>수정하기</button>
            <button onClick={props.onClickMoveToProductDelete}>삭제하기</button>
          </>
        ) : (
          <Payment data={props.data} />
        )}
      </div>
    </>
  );
}
