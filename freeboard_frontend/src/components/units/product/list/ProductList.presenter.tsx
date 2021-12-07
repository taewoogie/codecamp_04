import { getDate } from "../../../../commons/libraries/utils";
import { Title } from "./ProductList.styles";
import { IProductListUIProps } from "./ProductList.types";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <>
      {/* <productTitle>Product List</productTitle> */}
      <Title>Woogie Products</Title>
      {props.data?.fetchUseditems.map((el) => (
        <div key={el._id}>
          <span>{el.name}</span>
          <span>{el.contents}</span>
          <span>{el.price}</span>
          <span>{getDate(el.createdAt)}</span>
          <button onClick={props.onClickMoveToBasket(el)}>바구니</button>
        </div>
      ))}
      <div>
        <button onClick={props.onClickMoveToProductNew}>상품 등록하기</button>
      </div>
    </>
  );
}
