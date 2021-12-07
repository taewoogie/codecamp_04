import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import router from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList() {
  // 상품리스트 조회
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  // 장바구니 담기
  const onClickMoveToBasket = (el) => () => {
    const usedItems = JSON.parse(localStorage.getItem("usedItem") || "[]");
    // 장바구니에 담기 한 행의 id값이 장바구니에 있는지 유효성 체크
    let isExists = false;
    usedItems.forEach((usedItemEl: any) => {
      if (el._id === usedItemEl._id) isExists = true;
    });

    if (isExists) {
      Modal.error({ content: "이미 장바구니에 담겨있습니다" });
      return;
    }
    // 추출 된 데이터에 __typename을 제외한 나머지 데이터들만 usedItems에 저장
    const { __typename, ...rest } = el;
    Modal.success({ content: "방구니에 쏙 담겼습니다!" });
    usedItems.push(rest);
    // localStorage에 저장하여 오늘 본 상품 기능 구현 가능
    localStorage.setItem("usedItem", JSON.stringify(usedItems));
  };

  // 상품 등록하기
  const onClickMoveToProductNew = () => {
    router.push("/product/new");
  };

  return (
    <ProductListUI
      data={data}
      onClickMoveToBasket={onClickMoveToBasket}
      onClickMoveToProductNew={onClickMoveToProductNew}
    />
  );
}
