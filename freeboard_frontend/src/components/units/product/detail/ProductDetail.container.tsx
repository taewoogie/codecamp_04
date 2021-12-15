import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  FETCH_USER_LOGGEDIN,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  // console.log()

  const router = useRouter();

  // ===============================
  //          상품 등록 유저 정보
  // ===============================
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });

  // ===============================
  //          로그인 유저 정보
  // ===============================
  const { data: fetchUser } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

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
      fetchUser={fetchUser}
      onClickMoveToProductList={onClickMoveToProductList}
      onClickMoveToProductUpdate={onClickMoveToProductUpdate}
      onClickMoveToProductDelete={onClickMoveToProductDelete}
    />
  );
}
