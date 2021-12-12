import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_BEST } from "./ProductList.queries";

export default function ProductList() {
  const router = useRouter();
  // 상품리스트 조회
  const { data: usedItems, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { isSoldout: false },
  });

  // 베스트 상품 조회
  const { data: bestUsedItems } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USED_ITEMS_BEST);

  const onLoad = () => {
    if (!usedItems) return;

    fetchMore({
      variables: { page: Math.ceil(usedItems?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  // 상품 상세조회
  const onClickMoveToProductDetail = (event) => {
    router.push(`/product/${event.target.id}`);
  };

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
      usedItems={usedItems}
      bestUsedItems={bestUsedItems}
      onLoad={onLoad}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onClickMoveToBasket={onClickMoveToBasket}
      onClickMoveToProductNew={onClickMoveToProductNew}
    />
  );
}
