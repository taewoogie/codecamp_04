import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  FETCH_USER_LOGGEDIN,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
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

  // ===============================
  //         포인트로 상품 구매
  // ===============================
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

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

  // 상품 구매하기
  const onClickBuyUseditem = async () => {
    console.log(String(router.query.productId));
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.productId) },
      });
      console.log("구매성공!");
      console.log(result);
      Modal.success({ content: "구매 되었습니다. 감사합니다." });
      router.push("/product");
    } catch (error) {
      Modal.error({ content: "구매 실패 했습니다." });
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data}
      fetchUser={fetchUser}
      onClickMoveToProductList={onClickMoveToProductList}
      onClickMoveToProductUpdate={onClickMoveToProductUpdate}
      onClickMoveToProductDelete={onClickMoveToProductDelete}
      onClickBuyUseditem={onClickBuyUseditem}
    />
  );
}
