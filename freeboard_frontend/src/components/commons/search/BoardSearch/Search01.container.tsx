import { ChangeEvent, MouseEvent } from "react";
import Search01UI from "./Search01.presenter";
import { ISearch01Props } from "./Search01.types";
import _ from "lodash";

export default function Search01(props: ISearch01Props) {
  // 검색어 입력 값
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.refetchBoardsCount({ search: data });
    props.onChangeKewword(data);
  }, 200);

  let SearchData = "";

  // 검색어 입력 시 이벤트
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    SearchData = event.target.value;
  };

  const onClickSearch = (event: MouseEvent<HTMLButtonElement>) => {
    getDebounce(SearchData);
  };

  return (
    <Search01UI onChangeSearch={onChangeSearch} onClickSearch={onClickSearch} />
  );
}
