import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductListUIProps {
  usedItems?: Pick<IQuery, "fetchUseditems">;
  bestUsedItems?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  onClickMoveToProductNew: () => void;
  onClickMoveToProductDetail: () => void;
  onLoad: () => void;
  onClickPickedUseditem: () => void;
  // handleErrorImg:
}
