import { useMutation, useQuery } from "@apollo/client";
import Modal from "antd/lib/modal/Modal";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const onClickMoveToProductList = () => {
    router.push("/product");
  };

  const onClickMoveToProductUpdate = () => {
    router.push(`/product/${router.query.productId}/edit`);
  };

  const onClickMoveToProductDelete = async () => {
    // console.log(String(data?.fetchUseditem._id));
    console.log(String("< 상품 ID >"));
    console.log(String(router.query.productId));
    try {
      const result = await deleteUseditem({
        variables: { useditemId: String(router.query.productId) },
      });
      alert("상품 삭제에 성공했습니다");
      console.log(result);
      router.push("/product");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToProductList={onClickMoveToProductList}
      onClickMoveToProductUpdate={onClickMoveToProductUpdate}
      onClickMoveToProductDelete={onClickMoveToProductDelete}
    />
  );
}
