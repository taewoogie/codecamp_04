import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();

  // console.log("<<<< ProductDetailContainer >>>>>");
  // console.log(router.query.productId);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });

  // console.log("<<<< ProductDetailContainer - FetchUseditem >>>>>");
  // console.log(data);

  const onClickMoveToProductList = () => {
    router.back();
  };

  const onClickMoveToProductUpdate = () => {
    router.push(`/product/${router.query.productId}/edit`);
  };

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToProductList={onClickMoveToProductList}
      onClickMoveToProductUpdate={onClickMoveToProductUpdate}
    />
  );
}
