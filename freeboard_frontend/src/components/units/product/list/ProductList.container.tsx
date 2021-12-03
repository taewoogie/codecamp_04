import router from "next/router";
import ProductListUI from "./ProductList.presenter";

export default function ProductList() {
  const onClickMoveToProductNew = () => {
    router.push("/product/new");
  };
  return <ProductListUI onClickMoveToProductNew={onClickMoveToProductNew} />;
}
