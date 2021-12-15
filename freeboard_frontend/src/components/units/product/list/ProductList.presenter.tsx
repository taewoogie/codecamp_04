import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductList.styles";
import { IProductListUIProps } from "./ProductList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <S.Container>
      <S.Title>Woogie Best Products</S.Title>
      <div
        style={{ marginRight: "100px", marginBottom: "50px", float: "right" }}
      >
        <div>
          <button onClick={props.onClickMoveToProductNew}>상품 등록하기</button>
        </div>
      </div>
      <S.BestItemWrapper>
        {props.bestUsedItems?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestItemCardWrapper key={el._id}>
            <S.Img></S.Img>

            <S.Info_Title
              id={el._id}
              onClick={props.onClickMoveToProductDetail}
            >
              {el.name}
            </S.Info_Title>
            {/* <div> */}
            <S.Info>
              {el.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              원
            </S.Info>

            <S.Info>{el.pickedCount}</S.Info>
            {/* <S.Info>{el.pickedCount}</S.Info> */}
            {/* </div> */}
            <S.ItemCardBottomWrapper>
              <S.DateWrapper>{getDate(el.createdAt)}</S.DateWrapper>
              {/* <S.BasketBtn id={el._id} onClick={props.onClickPickedUseditem}>
                찜하기
              </S.BasketBtn> */}
            </S.ItemCardBottomWrapper>
          </S.BestItemCardWrapper>
        ))}
      </S.BestItemWrapper>

      <S.Title style={{ marginTop: "100px" }}>Woogie Products</S.Title>

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
                  {/* <S.Info>{el.contents}</S.Info> */}
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
                    <S.BasketBtn
                      id={el._id}
                      onClick={props.onClickPickedUseditem}
                    >
                      찜하기
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
