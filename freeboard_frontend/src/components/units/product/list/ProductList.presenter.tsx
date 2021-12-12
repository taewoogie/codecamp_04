import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductList.styles";
import { IProductListUIProps } from "./ProductList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <S.Container>
      <S.Title>Woogie Product</S.Title>
      <S.BestItemWrapper>
        {props.bestUsedItems?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestItemCardWrapper key={el._id}>
            {/* 이미지 */}
            <S.Img></S.Img>
            <S.Info_Title
              id={el._id}
              onClick={props.onClickMoveToProductDetail}
            >
              {el.name}
            </S.Info_Title>
            <S.Info>
              {el.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              원
            </S.Info>
            <S.Info>{el.pickedCount}</S.Info>
            <S.DateWrapper>{getDate(el.createdAt)}</S.DateWrapper>
          </S.BestItemCardWrapper>
        ))}
      </S.BestItemWrapper>

      {/*  */}
      <div style={{ margin: "50px" }}>
        <div>
          <button onClick={props.onClickMoveToProductNew}>상품 등록하기</button>
        </div>
      </div>

      <InfiniteScroll pageStart={0} loadMore={props.onLoad} hasMore={true}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <S.UsedItemsWrapper>
            {props.usedItems?.fetchUseditems.map((el) => (
              <S.UsedItemCardWrapper key={el._id}>
                <S.ItemCard key={el._id}>
                  {/* 이미지 */}
                  <S.Img></S.Img>
                  <S.Info_Title
                    id={el._id}
                    onClick={props.onClickMoveToProductDetail}
                  >
                    {el.name}
                  </S.Info_Title>
                  <S.Info>{el.contents}</S.Info>
                  <S.ItemCardBottomWrapper>
                    <S.Info>
                      {el.price
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </S.Info>
                    <S.PickCount>{el.pickedCount}</S.PickCount>
                  </S.ItemCardBottomWrapper>
                  <S.ItemCardBottomWrapper>
                    <S.DateWrapper>{getDate(el.createdAt)}</S.DateWrapper>
                    <S.BasketBtn onClick={props.onClickMoveToBasket(el)}>
                      바구니
                    </S.BasketBtn>
                  </S.ItemCardBottomWrapper>
                </S.ItemCard>
              </S.UsedItemCardWrapper>
            ))}
          </S.UsedItemsWrapper>
        </div>
      </InfiniteScroll>
    </S.Container>
  );
}
