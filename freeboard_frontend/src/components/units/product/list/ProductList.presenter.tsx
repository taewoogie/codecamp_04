import {
  changePrice,
  changeUrl,
  getDate,
} from "../../../../commons/libraries/utils";
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
          <S.BestItemCardWrapper
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToProductDetail}
          >
            <S.Img
              src={changeUrl(el.images?.[0] || "")}
              onError={props.handleErrorImg}
            />
            <S.Info_Title>{el.name}</S.Info_Title>
            <S.UsedItemBody>
              <S.Info_Tag>{el.tags}</S.Info_Tag>
              <S.Info>{changePrice(el.price)}</S.Info>
              <S.Info>{el.pickedCount}</S.Info>
              <S.UsedItemBottomWrapper>
                <S.DateWrapper>{getDate(el.createdAt)}</S.DateWrapper>
              </S.UsedItemBottomWrapper>
            </S.UsedItemBody>
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
          <S.UsedItemsContainer>
            {props.usedItems?.fetchUseditems.map((el) => (
              <S.UsedItemsdWrapper key={el._id}>
                <S.Img
                  src={changeUrl(el.images?.[0] || "")}
                  onError={props.handleErrorImg}
                />
                <S.Info_Title
                  id={el._id}
                  onClick={props.onClickMoveToProductDetail}
                >
                  {el.name}
                </S.Info_Title>
                <S.UsedItemBody>
                  <S.Info_Tag>{el.tags}</S.Info_Tag>
                  <S.Info>{changePrice(el.price)}</S.Info>
                  <S.Info>{el.pickedCount}</S.Info>
                </S.UsedItemBody>
                <S.UsedItemBottomWrapper>
                  <S.DateWrapper>{getDate(el.createdAt)}</S.DateWrapper>
                  <S.BasketBtn
                    id={el._id}
                    onClick={props.onClickPickedUseditem}
                  >
                    찜하기
                  </S.BasketBtn>
                </S.UsedItemBottomWrapper>
              </S.UsedItemsdWrapper>
            ))}
          </S.UsedItemsContainer>
        </div>
      </InfiniteScroll>
    </S.Container>
  );
}
