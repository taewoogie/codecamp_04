import router from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";

export default function ProductDetail() {
  const onClickMoveToProductList = () => {
    router.back();
  };
  return (
    <ProductDetailUI onClickMoveToProductList={onClickMoveToProductList} />
  );
}
