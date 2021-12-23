import DOMPurify from "dompurify";

interface IProductDetailUI {
  onClickMoveToProductList: () => void;
  onClickMoveToProductUpdate: () => void;
  onClickMoveToProductDelete: () => void;
  onClickBuyUseditem: () => void;
  data: any;
  fetchUser: any;
}

export default function ProductDetailUI(props: IProductDetailUI) {
  const sellerId = props.data?.fetchUseditem.seller._id;
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

      <h1>태그</h1>
      <div>{props.data?.fetchUseditem.tags}</div>

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
          // <Payment data={props.data} />
          <button onClick={props.onClickBuyUseditem}>구매하기</button>
        )}
      </div>
    </>
  );
}
