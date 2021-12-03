import router from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";

export default function ProductDetail() {
  const onClickMoveToProductList = () => {
    router.push("/product");
  };
  return (
    <ProductDetailUI onClickMoveToProductList={onClickMoveToProductList} />
  );
}
