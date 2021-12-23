import {
  changePrice,
  changeUrl,
  getDate,
} from "../../../../commons/libraries/utils";
import * as S from "./ProductList.styles";
import { IProductListUIProps } from "./ProductList.types";
import InfiniteScroll from "react-infinite-scroller";
import DOMPurify from "dompurify";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <S.Container>
      <S.Title>Best Products</S.Title>
      <S.BestItemWrapper>
        {props.bestUsedItems?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestItemCardWrapper
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBestProductDetail}
          >
            <S.ImageWrapper>
              <img
                src={changeUrl(el.images?.[0] || "")}
                onError={props.handleErrorImg}
                alt=""
              />
            </S.ImageWrapper>
            <S.ItemInfo>
              <S.InfoTitle>{el.name}</S.InfoTitle>
              <S.InfoPrice>{changePrice(el.price)}</S.InfoPrice>
              <S.InfoTag>{el.tags?.[0]}</S.InfoTag>
              <S.InfoTag>{el.tags?.[1]}</S.InfoTag>
              <S.InfoTag>{el.tags?.[2]}</S.InfoTag>
            </S.ItemInfo>
          </S.BestItemCardWrapper>
        ))}
      </S.BestItemWrapper>

      <S.Title>Woogie Products</S.Title>

      <div>
        <button onClick={props.onClickMoveToProductNew}>상품 등록하기</button>
      </div>

      <InfiniteScroll pageStart={0} loadMore={props.onLoad} hasMore={true}>
        <S.UsedItemsContainer>
          {props.usedItems?.fetchUseditems.map((el) => (
            <S.UsedItemsdWrapper key={el._id}>
              <S.InnerWrapper>
                <S.ImageWrapper>
                  <img
                    src={changeUrl(el.images?.[0] || "")}
                    onError={props.handleErrorImg}
                  />
                </S.ImageWrapper>

                <S.ItemInfo>
                  <S.InfoTitle
                    id={el._id}
                    onClick={props.onClickMoveToProductDetail}
                  >
                    {el.name}
                  </S.InfoTitle>
                  <S.InfoPrice>{changePrice(el.price)}</S.InfoPrice>
                  <S.InfoTag>{el.tags?.[0]}</S.InfoTag>
                  <S.InfoTag>{el.tags?.[1]}</S.InfoTag>
                  <S.InfoTag>{el.tags?.[2]}</S.InfoTag>
                </S.ItemInfo>
                <S.UsedItemBottomWrapper>
                  <S.DateWrapper>{getDate(el.createdAt)}</S.DateWrapper>
                  <S.BasketBtn
                    id={el._id}
                    onClick={props.onClickPickedUseditem}
                  >
                    찜하기
                  </S.BasketBtn>
                </S.UsedItemBottomWrapper>
              </S.InnerWrapper>
            </S.UsedItemsdWrapper>
          ))}
        </S.UsedItemsContainer>
      </InfiniteScroll>
    </S.Container>
  );
}
