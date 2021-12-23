import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_BEST,
  TOGGLE_USEDITEM_PICK,
} from "./ProductList.queries";

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

  // 찜하기
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

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

  // 베스트 상품 상세조회
  const onClickMoveToBestProductDetail = (event) => {
    router.push(`/product/${event.currentTarget.id}`);
  };
  // 일반 상품 상세조회
  const onClickMoveToProductDetail = (event) => {
    router.push(`/product/${event.target.id}`);
  };

  const handleErrorImg = (event) => {
    event.target.src = "/images/no-image.png";
  };

  // ====================================
  //                찜하기
  // ====================================
  const onClickPickedUseditem = async (event) => {
    const useditemId = event.target.id;
    console.log(useditemId);
    const result = await toggleUseditemPick({
      variables: { useditemId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEMS,
          variables: { isSoldout: false },
        },
      ],
    });
    console.log(result);
  };

  // ====================================
  //      오늘 본 상품 담기 [ 수정 예정 ]
  // ====================================
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
      handleErrorImg={handleErrorImg}
      onClickPickedUseditem={onClickPickedUseditem}
      onClickMoveToBestProductDetail={onClickMoveToBestProductDetail}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onClickMoveToBasket={onClickMoveToBasket}
      onClickMoveToProductNew={onClickMoveToProductNew}
    />
  );
}
